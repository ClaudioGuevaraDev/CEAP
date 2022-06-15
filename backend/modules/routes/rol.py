from flask import request, Blueprint
from modules.database import Database
import config
from modules.interface import interface

rol_blueprint = Blueprint('rol', __name__, url_prefix='/rol')

db = Database(config)

tablename = "Rol"
parser = interface(tablename, db)

@rol_blueprint.route('/get/', methods=['POST'])
def get_rol():
    return parser.get(request)

@rol_blueprint.route('/insert/', methods=["POST"])
def insert_rol():
    return parser.insert(request)

@rol_blueprint.route('/update/', methods=["POST"])
def update_rol():
    return parser.update(request)

@rol_blueprint.route('/delete/', methods=["POST"])
def delete_rol():
    return parser.delete(request)