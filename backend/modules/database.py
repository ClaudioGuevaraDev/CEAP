"""Database module"""
import json
from sqlalchemy import create_engine
from sqlalchemy.orm import Session
from sqlalchemy import select
import pandas as pd
from modules.crud import Crud
from modules.models import LabEquipment, Brand, Provider, Status
from modules.models import LabReagent, MeasurementUnit, ReactiveType
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

    def equipment_get_joined(self, data):
        """lab_equipment joined"""
        try:
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
            keys = data.keys()
            for key in keys:
                stmt = stmt.where(getattr(LabEquipment, key) == data[key])
            data = pd.read_sql(stmt, con = self.con)
            data.next_maintanance = data.next_maintanance.fillna("")
            data.next_maintanance = data.next_maintanance.astype(str)
            return json.loads(data.to_json(orient="records"))
        except Exception as exception:
            return str(exception)

    def reagent_get_joined(self, data):
        """lab_reagent joined"""
        try:
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
            keys = data.keys()
            for key in keys:
                stmt = stmt.where(getattr(LabEquipment, key) == data[key])
            data = pd.read_sql(stmt, con = self.con)
            data.expiration_date = data.expiration_date.fillna("")
            data.expiration_date = data.expiration_date.astype(str)
            return json.loads(data.to_json(orient="records"))
        except Exception as exception:
            return str(exception)
