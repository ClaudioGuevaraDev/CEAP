

from flask import request, Blueprint
from modules.database import Database
import config
from modules.interface import interface

measurement_unit_blueprint = Blueprint('measurement_unit', __name__, url_prefix='/measurement_unit')

db = Database(config)

tablename = "Measurement_unit"
parser = interface(tablename, db)

@measurement_unit_blueprint.route('/get/', methods=['POST'])
def get_measurement_unit():
    return parser.get(request)

@measurement_unit_blueprint.route('/insert/', methods=["POST"])
def insert_measurement_unit():
    return parser.insert(request)
    
@measurement_unit_blueprint.route('/update/', methods=["POST"])
def update_measurement_unit():
    return parser.update(request)