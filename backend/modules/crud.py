from sqlalchemy import select, insert, update
import pandas as pd
import json
from modules.models import *

class Crud:
    def __init__(self, con, engine, session):
        self.con = con
        self.engine = engine
        self.session = session

    def get_(self, data, Model):
        try:
            stmt = select(eval(Model))
            keys = data.keys()
            for key in keys:
                if data[key] != None:
                    stmt = stmt.where(eval("{}.{} == {}".format(Model, key, data[key])))
            data = pd.read_sql(stmt, con = self.con)
            return json.loads(data.to_json(orient="records"))
        except Exception as e:
            return str(e)

    def insert_(self, data, Model):
        try:
            stmt = (insert(eval(Model)).values(data))
            self.session.execute(stmt)
            self.session.commit()
            return True
        except Exception as e:
            return str(e)
    
    def update_(self, query, replace, Model):
        try:
            stmt = update(eval(Model))
            keys = query.keys()
            for key in keys:
                if query[key] != None:
                    stmt = stmt.where(eval("{}.{} == {}".format(Model, key, query[key])))
            stmt = stmt.values(**replace)
            self.session.execute(stmt)
            self.session.commit()
            return True
        except Exception as e:
            return str(e)