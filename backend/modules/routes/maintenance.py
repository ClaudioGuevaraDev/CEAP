from flask import request, Blueprint
from modules.database import Database
import config
from modules.interface import interface

maintenance_blueprint = Blueprint('maintenance', __name__, url_prefix='/maintenance')

db = Database(config)

tablename = "Maintenance"
parser = interface(tablename, db)

@maintenance_blueprint.route('/get/', methods=['POST'])
def get_maintenance():
    return parser.get(request)

@maintenance_blueprint.route('/insert/', methods=["POST"])
def insert_maintenance():
    return parser.insert(request)
    
@maintenance_blueprint.route('/update/', methods=["POST"])
def update_maintenance():
    return parser.update(request)