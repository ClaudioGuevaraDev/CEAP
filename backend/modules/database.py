"""Database module"""
from datetime import datetime
from sqlalchemy import create_engine
from sqlalchemy.orm import Session
from modules.crud import Crud
from modules.models import Request, RequestEquipment, RequestReagent


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
        res = self.insert_({"request_date": datetime.now().strftime("%d/%m/%Y"),
            "id_user": data["id_user"],
            "id_project": data["id_project"],
            "use_date": data["use_date"]}, Request)
        if isinstance(res, str):
            return res
        id_request = res["id"]
        for equipment in data["equipments"]:
            res = self.insert_({"id_request": id_request,
                "id_equipment": equipment["id"]}, RequestEquipment)
        for reagent in data["reagents"]:
            res = self.insert_({"id_request": id_request,
                "id_lab_reagent": reagent["id"],
                "requested_amount": reagent["requested_amount"]}, RequestReagent)
        del data["reagents"]
        del data["equipments"]
        return self.get_(data, Request)[-1]
