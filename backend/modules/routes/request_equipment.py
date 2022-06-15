from flask import request, Blueprint
from modules.database import Database
import config
from modules.interface import interface

request_equipment_blueprint = Blueprint('request_equipment', __name__, url_prefix='/request_equipment')

db = Database(config)

tablename = "Request_equipment"
parser = interface(tablename, db)

@request_equipment_blueprint.route('/get/', methods=['POST'])
def get_request_equipment():
    return parser.get(request)

@request_equipment_blueprint.route('/insert/', methods=["POST"])
def insert_type():
    return parser.insert(request)