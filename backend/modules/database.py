"""Database module"""
from datetime import datetime
from sqlalchemy import create_engine
from sqlalchemy.orm import Session
from modules.crud import Crud
from modules.models import Request, RequestEquipment, RequestReagent, User
from jwt import encode

class Database(Crud):
    """Database class for db administration
    Crud herency (basic functions)"""
    def __init__(self, config):
        user = config.USER
        password = config.PASSWORD
        host = config.HOST
        port = config.PORT
        db_name = config.DB_NAME
        uri = f"postgresql+psycopg2://{user}:{password}@{host}:{port}/{db_name}"
        self.engine = create_engine(uri)
        self.con = self.engine.connect()
        self.session = Session(self.engine, future=True)
        super().__init__(self.con, self.engine, self.session)

    def create_request(self, data):
        """Creates a new request"""
        res = self.insert_({"request_date": datetime.now().strftime("%m-%d-%Y"),
            "id_user": data["id_user"],
            "id_project": data["id_project"],
            "use_date": data["use_date"]}, Request)
        if isinstance(res, str):
            return res
        id_request = res["id"]
        for equipment in data["equipments"]:
            res = self.insert_({"id_request": id_request,
                "id_equipment": equipment["id"]}, RequestEquipment)
            if isinstance(res, str):
                self.delete_({"id_request": id_request}, RequestEquipment)
                self.delete_({"id": id_request}, Request)
                return res
        for reagent in data["reagents"]:
            res = self.insert_({"id_request": id_request,
                "id_lab_reagent": reagent["id"],
                "requested_amount": reagent["requested_amount"]}, RequestReagent)
            if isinstance(res, str):
                self.delete_({"id_request": id_request}, RequestEquipment)
                self.delete_({"id_request": id_request}, RequestReagent)
                self.delete_({"id": id_request}, Request)
                return res
        del data["reagents"]
        del data["equipments"]
        return self.get_(data, Request)[-1]

    def login(self, data, key):
        """login function (compare passwords and mails)"""
        email = data["email"]
        users = self.get_({"email": email}, User)
        if len(users) == 0:
            return {"description": "Unknown email"}
        user = users[0]
        if user["password"] != data["password"]:
            return {"description": "Incorrect password"}
        token = encode({
            "id": user["id"],
            "name": user["full_name"],
            "rol": user["rol"]
        }, key, algorithm="HS256")
        return {"description": "Login success", "token": token}
