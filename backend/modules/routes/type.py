from flask import request, Blueprint
from modules.database import Database
import config
from modules.interface import interface

type_blueprint = Blueprint('type', __name__, url_prefix='/type')

db = Database(config)
tablename = "Type"
parser = interface(tablename, db)

@type_blueprint.route('/get/', methods=['POST'])
def get_type():
    return parser.get(request)
@type_blueprint.route('/insert/', methods=["POST"])
def insert_type():
    return parser.insert(request)
    
@type_blueprint.route('/update/', methods=["POST"])
def update_type():
    return parser.update(request)

@type_blueprint.route('/delete/', methods=["POST"])
def delete_type():
    return parser.delete(request)