"""Request url functions"""
from flask import request, Blueprint
from modules.database import Database
from modules.interface import Interface
from modules.models import Request
import config

request_blueprint = Blueprint('request', __name__, url_prefix='/request')

db = Database(config)

parser = Interface(Request, db)

@request_blueprint.route('/get/', methods=['POST'])
def get_request():
    """calls to interface get function"""
    return parser.get(request)

@request_blueprint.route('/insert/', methods=["POST"])
def insert_request():
    """calls to interface insert function"""
    return parser.insert(request)

@request_blueprint.route('/update/', methods=["POST"])
def update_request():
    """calls to interface update function"""
    return parser.update(request)

@request_blueprint.route('/delete/', methods=["POST"])
def delete_request():
    """calls to interface delete function"""
    return parser.delete(request)
