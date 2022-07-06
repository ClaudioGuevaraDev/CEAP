"""CRUD"""
import json
from sqlalchemy import select, insert, update, delete
from modules.models import LabEquipment, Brand, Provider, Status
from modules.models import LabReagent, MeasurementUnit, ReactiveType
from modules.models import Request, Project, User
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
            if model == LabReagent:
                #LabReagent model (with joins)
                stmt = select(LabReagent.id,
                        LabReagent.name,
                        LabReagent.cas,
                        LabReagent.expiration_date,
                        LabReagent.actual_amount,
                        LabReagent.buy_alarm,
                        MeasurementUnit.id.label("measurement_unit_id"),
                        MeasurementUnit.name.label("measurement_unit_name"),
                        ReactiveType.id.label("reactive_type_id"),
                        ReactiveType.name.label("reactive_type_name"))
                stmt = stmt.join(MeasurementUnit).join(ReactiveType)
            elif model == LabEquipment:
                #LabEquipment model (with joins)
                stmt = select(LabEquipment.id,
                        LabEquipment.name,
                        LabEquipment.next_maintanance,
                        LabEquipment.serial,
                        Provider.id.label("provider_id"),
                        Provider.name.label("provider_name"),
                        Brand.id.label("brand_id"),
                        Brand.name.label("brand_name"),
                        Status.id.label("status_id"),
                        Status.name.label("status_name"))
                stmt = stmt.join(Provider).join(Brand).join(Status)
            elif model == Request:
                #Request model (with joins)
                stmt = select(Request.id.label("id"),
                        Request.request_date,
                        Request.use_date,
                        Project.name.label("project_name"),
                        User.full_name.label("user_full_name"))
                stmt = stmt.join(Project).join(User)
            else:
                #Other models
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
            print(data)
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
            return self.get_(query, model)[-1]
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
