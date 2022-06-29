"""ReactiveType url functions"""
from flask import request, Blueprint
from modules.database import Database
from modules.interface import Interface
from modules.models import ReactiveType
import config

reactive_type_blueprint = Blueprint('reactive_type', __name__, url_prefix='/reactive_type')

db = Database(config)

parser = Interface(ReactiveType, db)

@reactive_type_blueprint.route('/get/', methods=['POST'])
def get_type():
    """calls to interface get function"""
    return parser.get(request)

@reactive_type_blueprint.route('/insert/', methods=["POST"])
def insert_type():
    """calls to interface insert function"""
    return parser.insert(request)

@reactive_type_blueprint.route('/update/', methods=["POST"])
def update_type():
    """calls to interface update function"""
    return parser.update(request)

@reactive_type_blueprint.route('/delete/', methods=["POST"])
def delete_type():
    """calls to interface delete function"""
    return parser.delete(request)
    