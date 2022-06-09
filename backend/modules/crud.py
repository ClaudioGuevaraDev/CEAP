from sqlalchemy import select
import pandas as pd
import json
from modules.models import *

class Crud:
    def __init__(self, con):
        self.con = con

    def __getter(self, data, Model):
        stmt = select(Model)
        keys = data.keys()
        for key in keys:
            if data[key] != None:
                stmt = stmt.where(eval("Model.{} == {}".format(key, data[key])))
        data = pd.read_sql(stmt, con = self.con)
        return json.loads(data.to_json(orient="records"))

    def get_user(self, data):
        return self.__getter(data, User)

    def get_rol(self, data):
        return self.__getter(data, Rol)

    def get_request(self, data):
        return self.__getter(data, Request)

    def get_project(self, data):
        return self.__getter(data, Project)

    def get_member(self, data):
        return self.__getter(data, Member)

    def get_lab_reagent(self, data):
        return self.__getter(data, Lab_reagent)

    def get_measurement_unit(self, data):
        return self.__getter(data, Measurement_unit)

    def get_type(self, data):
        return self.__getter(data, Type)

    def get_request_reagent(self, data):
        return self.__getter(data, Request_reagent)

    def get_lab_equipment(self, data):
        return self.__getter(data, Lab_equipment)

    def get_brand(self, data):
        return self.__getter(data, Brand)
    
    def get_provider(self, data):
        return self.__getter(data, Provider)

    def get_status(self, data):
        return self.__getter(data, Status)

    def get_maintenance(self, data):
        return self.__getter(data, Maintenance)

    def get_request_equipment(self, data):
        return self.__getter(data, Request_equipment)