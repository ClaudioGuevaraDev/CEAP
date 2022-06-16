"""MeasurementUnit url functions"""
from flask import request, Blueprint
from modules.database import Database
from modules.interface import Interface
from modules.models import MeasurementUnit
import config

measurement_unit_blueprint = Blueprint('measurement_unit', __name__, url_prefix='/measurement_unit')

db = Database(config)

parser = Interface(MeasurementUnit, db)

@measurement_unit_blueprint.route('/get/', methods=['POST'])
def get_measurement_unit():
    """calls to interface get function"""
    return parser.get(request)

@measurement_unit_blueprint.route('/insert/', methods=["POST"])
def insert_measurement_unit():
    """calls to interface insert function"""
    return parser.insert(request)

@measurement_unit_blueprint.route('/update/', methods=["POST"])
def update_measurement_unit():
    """calls to interface update function"""
    return parser.update(request)

@measurement_unit_blueprint.route('/delete/', methods=["POST"])
def delete_measurement_unit():
    """calls to interface delete function"""
    return parser.delete(request)
