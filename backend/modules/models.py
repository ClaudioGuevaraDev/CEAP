from sqlalchemy import Column, Float
from sqlalchemy import ForeignKey
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy.orm import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy.sql.sqltypes import DateTime

Base = declarative_base()

class User(Base):
    __tablename__ = "user"
    id = Column(Integer, primary_key = True)
    full_name = Column(String, nullable = False)
    email = Column(String, nullable = False)
    password = Column(String, nullable = False)
    id_rol = Column(Integer, ForeignKey("rol.id"), nullable=False)

    rol_r = relationship("Request")
    member_r = relationship("Member")
    def __repr__(self):
        return f"User(id={self.id!r}, fullname={self.full_name!r}, email={self.email!r})"

class Rol(Base):
    __tablename__ = "rol"
    id = Column(Integer, primary_key = True)
    name = Column(String, nullable=False)
    rol_r = relationship("User")

    def __repr__(self):
        return f"Rol(id={self.id!r}, name={self.full_name!r})"

class Request(Base):
    __tablename__ = "request"
    id = Column(Integer, primary_key = True)
    request_date = Column(DateTime, nullable = False)
    id_user = Column(Integer, ForeignKey("user.id"), nullable = False)
    use_date = Column(DateTime, nullable = False)
    id_project = Column(Integer, ForeignKey("project.id"), nullable = False)

    request_reagent_r = relationship("Request_reagent")
    def __repr__(self):
        return f"Request(id={self.id!r})"

class Project(Base):
    __tablename__ = "project"
    id = Column(Integer, primary_key = True)
    name = Column(String, primary_key = True)
    
    request_r = relationship("Request")
    member_project_r = relationship("Member")

    def __repr__(self):
        return f"Project(id={self.id!r})"

class Member(Base):
    __tablename__ = "member"
    id_project = Column(Integer, ForeignKey("project.id"), primary_key = True, nullable = False)
    id_user = Column(Integer, ForeignKey("user.id"), primary_key = True, nullable = False)

    def __repr__(self):
        return f"Member(id_project={self.id_project!r}, id_user={self.id_user!r})"

class Lab_reagent(Base):
    __tablename__ = "lab_reagent"
    id = Column(Integer, primary_key = True, nullable = False)
    name = Column(String, nullable = False)
    cas = Column(String, nullable = False)
    expiration_date = Column(DateTime, nullable = False)
    actual_amount = Column(Float, nullable = False)
    id_measurement_unit = Column(Integer, ForeignKey("measurement_unit.id"), nullable = False)
    id_type = Column(Integer, ForeignKey("type.id"), nullable = False)
    buy_alarm = Column(Float, nullable = False)
    request_reagent_r = relationship("Request_reagent")

    def __repr__(self):
        return f"Lab_reagent(id={self.id!r})"

class Measurement_unit(Base):
    __tablename__ = "measurement_unit"
    id = Column(Integer, primary_key = True, nullable = False)
    name = Column(String, nullable = False)

    project_r = relationship("Lab_reagent")

    def __repr__(self):
        return f"Measurement_unit(id={self.id_project!r})"

class Type(Base):
    __tablename__ = "type"
    id = Column(Integer, primary_key = True, nullable = False)
    name = Column(String, nullable = False)

    lab_reagent_r = relationship("Lab_reagent")

    def __repr__(self):
        return f"Type(id={self.id_project!r})"

class Request_reagent(Base):
    __tablename__ = "request_reagent"
    id_lab_reagent = Column(Integer, ForeignKey("lab_reagent.id"), primary_key = True, nullable = False)
    id_request = Column(Integer, ForeignKey("request.id"), primary_key = True, nullable = False)
    requested_amount = Column(Float, nullable = False)

    def __repr__(self):
        return f"Request_reagent(id_project={self.id_project!r}, id_user={self.id_user!r})"


class Lab_equipment(Base):
    __tablename__ = "lab_equipment"
    id = Column(Integer, primary_key = True, nullable = False)
    name = Column(String, nullable = False)
    serial = Column(String, nullable = False)
    id_brand = Column(Integer, ForeignKey("brand.id"), nullable = False)
    id_provider = Column(Integer, ForeignKey("provider.id"), nullable = False)
    next_maintanance = Column(DateTime, nullable = False)
    id_status = Column(Integer, ForeignKey("status.id"), nullable = False)

    maintenance_r = relationship("Maintenance")
    request_r = relationship("Request_equipment")
    def __repr__(self):
        return f"Lab_reagent(id={self.id!r})"

class Brand(Base):
    __tablename__ = "brand"
    id = Column(Integer, primary_key = True, nullable = False)
    name = Column(String, nullable = False)

    lab_equipment_r = relationship("Lab_equipment")

    def __repr__(self):
        return f"Type(id={self.id_project!r})"

class Provider(Base):
    __tablename__ = "provider"
    id = Column(Integer, primary_key = True, nullable = False)
    name = Column(String, nullable = False)

    lab_equipment_r = relationship("Lab_equipment")

    def __repr__(self):
        return f"Type(id={self.id_project!r})"

class Status(Base):
    __tablename__ = "status"
    id = Column(Integer, primary_key = True, nullable = False)
    name = Column(String, nullable = False)

    lab_equipment_r = relationship("Lab_equipment")

    def __repr__(self):
        return f"Type(id={self.id_project!r})"

class Maintenance(Base):
    __tablename__ = "maintenance"
    id = Column(Integer, primary_key = True, nullable = False)
    date = Column(DateTime, nullable = False)
    id_equipment = Column(Integer, ForeignKey("lab_equipment.id"), nullable = False)

    def __repr__(self):
        return f"Type(id={self.id_project!r})"

class Request_equipment(Base):
    __tablename__ = "request_equipment"    
    id_request = Column(Integer, ForeignKey("request.id"), primary_key = True, nullable = False)
    id_equipment = Column(Integer, ForeignKey("lab_equipment.id"), primary_key = True, nullable = False)
    quantity = Column(Float, nullable = False)

    def __repr__(self):
        return f"Request_reagent(id_project={self.id_project!r}, id_user={self.id_user!r})"

