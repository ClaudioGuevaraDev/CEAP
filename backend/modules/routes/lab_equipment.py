"""Lab equipment url functions"""
from flask import request, Blueprint
from modules.database import Database
from modules.interface import Interface
from modules.models import LabEquipment
import config

lab_equipment_blueprint = Blueprint('lab_equipment', __name__, url_prefix='/lab_equipment')

db = Database(config)

parser = Interface(LabEquipment, db)

@lab_equipment_blueprint.route('/get/', methods=['POST'])
def get_lab_equipment():
    """calls to interface get function"""
    return parser.get(request)

@lab_equipment_blueprint.route('/insert/', methods=["POST"])
def insert_lab_equipment():
    """calls to interface insert function"""
    return parser.insert(request)

@lab_equipment_blueprint.route('/update/', methods=["POST"])
def update_lab_equipment():
    """calls to interface update function"""
    return parser.update(request)

@lab_equipment_blueprint.route('/delete/', methods=["POST"])
def delete_lab_equipment():
    """calls to interface delete function"""
    return parser.delete(request)

@lab_equipment_blueprint.route('/get_joined/', methods=["POST"])
def get_joined_lab_equipment():
    """Calls to database get_joined function"""
    return parser.equipment_get_joined(request)
