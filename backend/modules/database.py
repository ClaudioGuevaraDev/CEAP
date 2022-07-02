"""Database module"""
from sqlalchemy import create_engine
from sqlalchemy.orm import Session
from modules.crud import Crud
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
