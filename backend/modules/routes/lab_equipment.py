
from flask import request, Blueprint
from modules.database import Database
import config
from modules.interface import interface

lab_equipment_blueprint = Blueprint('lab_equipment', __name__, url_prefix='/lab_equipment')

db = Database(config)

tablename = "Lab_equipment"
parser = interface(tablename, db)

@lab_equipment_blueprint.route('/get/', methods=['POST'])
def get_lab_equipment():
    return parser.get(request)

@lab_equipment_blueprint.route('/insert/', methods=["POST"])
def insert_type():
    return parser.insert(request)