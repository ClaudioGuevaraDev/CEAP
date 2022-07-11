from modules.models import User, Rol, Request, Project, Member
from modules.models import LabReagent, MeasurementUnit, ReactiveType
from modules.models import RequestReagent, LabEquipment, Brand, Provider
from modules.models import Status, Maintenance, RequestEquipment

def test_new_user():
    """
    GIVEN a User model
    WHEN a new User is created
    THEN check the id, full_name, password and id_rol fields are defined correctly
    """
    user = User()
    user.id = 1
    user.full_name = "Gabriel"
    user.email = "gabriel@gmail.com"
    user.password = "pass"
    user.id_rol = 1
    assert user.__tablename__ == "user"
    assert user.id == 1
    assert user.full_name == "Gabriel"
    assert user.email == "gabriel@gmail.com"
    assert user.password == "pass"
    assert user.id_rol == 1

def test_new_rol():
    """
    GIVEN a Rol model
    WHEN a new Rol is created
    THEN check the id and name are defined correctly
    """
    rol = Rol()
    rol.id = 1
    rol.name = "Administrador"
    assert rol.__tablename__ == "rol"
    assert rol.id == 1
    assert rol.name == "Administrador"

def test_new_request():
    """
    GIVEN a Request model
    WHEN a new Request is created
    THEN check the id and request_date, id_user and id_project are defined correctly
    """
    request = Request()
    request.id = 1
    request.request_date = "07/07/2022"
    request.id_user = 1
    request.id_project = 1
    assert request.__tablename__ == "request"
    assert request.id == 1
    assert request.request_date == "07/07/2022"
    assert request.id_user == 1
    assert request.id_project == 1

def test_new_project():
    """
    GIVEN a Project model
    WHEN a new Project is created
    THEN check the id and name are defined correctly
    """
    project = Project()
    project.id = 1
    project.name = "GNN en antígeno anticuerpo"
    assert project.__tablename__ == "project"
    assert project.id == 1
    assert project.name == "GNN en antígeno anticuerpo"

def test_new_member():
    """
    GIVEN a Member model
    WHEN a new Member is created
    THEN check the id_project and id_user are defined correctly
    """
    member = Member()
    member.id_project = 1
    member.id_user = 1
    assert member.__tablename__ == "member"
    assert member.id_project == 1
    assert member.id_user == 1

def test_lab_reagent():
    """
    GIVEN a LabReagent model
    WHEN a new LabReagent is created
    THEN check the id, name, cas,
    expiration_date, actual_amount, buy_alarm,
    id_measurement_unit and id_type are defined correctly
    """
    lab_reagent = LabReagent()
    lab_reagent.id = 1
    lab_reagent.name = "agua"
    lab_reagent.cas = "123456"
    lab_reagent.expiration_date = "07/07/2022"
    lab_reagent.actual_amount = 10
    lab_reagent.buy_alarm = 0.2
    lab_reagent.id_measurement_unit = 1
    lab_reagent.id_type = 1
    assert lab_reagent.__tablename__ == "lab_reagent"
    assert lab_reagent.id == 1
    assert lab_reagent.name == "agua"
    assert lab_reagent.cas == "123456"
    assert lab_reagent.expiration_date == "07/07/2022"
    assert lab_reagent.actual_amount == 10
    assert lab_reagent.buy_alarm == 0.2
    assert lab_reagent.id_measurement_unit == 1
    assert lab_reagent.id_type == 1

def test_new_measurement_unit():
    """
    GIVEN a MeasurementUnit model
    WHEN a new MeasurementUnit is created
    THEN check the id and name are defined correctly
    """
    measurement_unit = MeasurementUnit()
    measurement_unit.id = 1
    measurement_unit.name = "Kg"
    assert measurement_unit.__tablename__ == "measurement_unit"
    assert measurement_unit.id == 1
    assert measurement_unit.name == "Kg"

def test_new_reactive_type():
    """
    GIVEN a ReactiveType model
    WHEN a new ReactiveType is created
    THEN check the id and name are defined correctly
    """
    reactive_type = ReactiveType()
    reactive_type.id = 1
    reactive_type.name = "Sólido"
    assert reactive_type.__tablename__ == "reactive_type"
    assert reactive_type.id == 1
    assert reactive_type.name == "Sólido"


def test_new_request_reagent():
    """
    GIVEN a RequestReagent model
    WHEN a new RequestReagent is created
    THEN check the id_lab_reagent, id_request, requested_amount are defined correctly
    """
    request_reagent = RequestReagent()
    request_reagent.id_lab_reagent = 1
    request_reagent.id_request = 1
    request_reagent.requested_amount = 2
    assert request_reagent.__tablename__ == "request_reagent"
    assert request_reagent.id_lab_reagent == 1
    assert request_reagent.id_request == 1
    assert request_reagent.requested_amount == 2

def test_new_lab_equipment():
    """
    GIVEN a LabEquipment model
    WHEN a new LabEquipment is created
    THEN check the id, name, serial, id_brand, id_provider, next_maintanance, id_status are defined correctly
    """
    lab_equipment = LabEquipment()
    lab_equipment.id = 1
    lab_equipment.name = "probeta"
    lab_equipment.serial = "123456"
    lab_equipment.id_brand = 1
    lab_equipment.id_provider = 1
    lab_equipment.next_maintanance = "07/07/2022"
    lab_equipment.id_status = 1
    assert lab_equipment.__tablename__ == "lab_equipment"
    assert lab_equipment.id == 1
    assert lab_equipment.name == "probeta"
    assert lab_equipment.serial == "123456"
    assert lab_equipment.id_brand == 1
    assert lab_equipment.id_provider == 1
    assert lab_equipment.next_maintanance == "07/07/2022"
    assert lab_equipment.id_status == 1

def test_new_brand():
    """
    GIVEN a Brand model
    WHEN a new Brand is created
    THEN check the id and name are defined correctly
    """
    brand = Brand()
    brand.id = 1
    brand.name = "Coca cola"
    assert brand.__tablename__ == "brand"
    assert brand.id == 1
    assert brand.name == "Coca cola"

def test_new_provider():
    """
    GIVEN a Provider model
    WHEN a new Provider is created
    THEN check the id and name are defined correctly
    """
    provider = Provider()
    provider.id = 1
    provider.name = "Coca cola"
    assert provider.__tablename__ == "provider"
    assert provider.id == 1
    assert provider.name == "Coca cola"

def test_new_status():
    """
    GIVEN a Status model
    WHEN a new Status is created
    THEN check the id and name are defined correctly
    """
    status = Status()
    status.id = 1
    status.name = "En mantenimiento"
    assert status.__tablename__ == "status"
    assert status.id == 1
    assert status.name == "En mantenimiento"

def test_new_maintenance():
    """
    GIVEN a Maintenance model
    WHEN a new Maintenance is created
    THEN check the id, date and id_equipment are defined correctly
    """
    maintenance = Maintenance()
    maintenance.id = 1
    maintenance.date = "07/07/2022"
    maintenance.id_equipment = 1
    assert maintenance.__tablename__ == "maintenance"
    assert maintenance.id == 1
    assert maintenance.date == "07/07/2022"
    assert maintenance.id_equipment == 1

def test_new_request_equipment():
    """
    GIVEN a RequestEquipment model
    WHEN a new RequestEquipment is created
    THEN check the id_request and id_equipment are defined correctly
    """
    request_equipment = RequestEquipment()
    request_equipment.id_request = 1
    request_equipment.id_equipment = 1
    assert request_equipment.__tablename__ == "request_equipment"
    assert request_equipment.id_request == 1
    assert request_equipment.id_equipment == 1
