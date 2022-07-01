"""CRUD"""
import json
from sqlalchemy import select, insert, update, delete
import pandas as pd

class Crud:
    """Basic CRUD functions for database administration"""
    def __init__(self, con, engine, session):
        self.con = con
        self.engine = engine
        self.session = session

    def get_(self, data, model):
        """Get table data using data paramenters
        Returns all data if there aren't parameters"""
        try:
            stmt = select(model)
            keys = data.keys()
            for key in keys:
                stmt = stmt.where(getattr(model, key) == data[key])
            data = pd.read_sql(stmt, con = self.con)
            for col in data.columns:
                if data[col].dtype == object:
                    data[col] = data[col].fillna("")
                    data[col] = data[col].astype(str)
            return json.loads(data.to_json(orient="records"))
        except Exception as exception:
            return str(exception)

    def insert_(self, data, model):
        """Insert row to Table"""
        try:
            stmt = (insert(model).values(data))
            self.session.execute(stmt)
            self.session.commit()
            return self.get_(data, model)[-1]
        except Exception as exception:
            self.session.flush()
            self.session.commit()
            return str(exception)

    def update_(self, query, replace, model):
        """Update rows by condition"""
        try:
            stmt = update(model)
            keys = query.keys()
            for key in keys:
                stmt = stmt.where(getattr(model, key) == query[key])
            stmt = stmt.values(**replace)
            self.session.execute(stmt)
            self.session.commit()
            return self.get_(replace, model)[-1]
        except Exception as exception:
            self.session.flush()
            self.session.commit()
            return str(exception)

    def delete_(self, data, model):
        """Delete rows by condition"""
        try:
            selected = self.get_(data, model)[-1]
            stmt = delete(model)
            keys = data.keys()
            for key in keys:
                stmt = stmt.where(getattr(model, key) == data[key])
            self.session.execute(stmt)
            self.session.commit()
            return selected
        except Exception as exception:
            self.session.flush()
            self.session.commit()
            return str(exception)
            