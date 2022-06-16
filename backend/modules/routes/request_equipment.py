"""RequestEquipment url functions"""
from flask import request, Blueprint
from modules.database import Database
from modules.interface import Interface
from modules.models import RequestEquipment
import config

request_equipment_blueprint = Blueprint('request_equipment', __name__,
                                        url_prefix='/request_equipment')

db = Database(config)

parser = Interface(RequestEquipment, db)

@request_equipment_blueprint.route('/get/', methods=['POST'])
def get_request_equipment():
    """calls to interface get function"""
    return parser.get(request)

@request_equipment_blueprint.route('/insert/', methods=["POST"])
def insert_request_equipment():
    """calls to interface insert function"""
    return parser.insert(request)

@request_equipment_blueprint.route('/update/', methods=["POST"])
def update_request_equipment():
    """calls to interface update function"""
    return parser.update(request)

@request_equipment_blueprint.route('/delete/', methods=["POST"])
def delete_request_equipment():
    """calls to interface delete function"""
    return parser.delete(request)
