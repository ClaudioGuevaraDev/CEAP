from sqlalchemy import create_engine
from sqlalchemy.orm import Session
from modules.crud import Crud
class Database(Crud):
    def __init__(self, config):
        user = config.user
        password = config.password
        host = config.host
        port = config.port
        db = config.db
        uri = "postgresql+psycopg2://{}:{}@{}:{}/{}".format(user, password, host, port, db)
        self.engine = create_engine(uri)
        self.con = self.engine.connect()
        self.session = Session(self.engine, future=True)
        super().__init__(self.con, self.engine, self.session)
        