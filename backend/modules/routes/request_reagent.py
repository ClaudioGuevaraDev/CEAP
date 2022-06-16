"""RequestReagent url functions"""
from flask import request, Blueprint
from modules.database import Database
from modules.interface import Interface
from modules.models import RequestReagent
import config

request_reagent_blueprint = Blueprint('request_reagent', __name__, url_prefix='/request_reagent')

db = Database(config)

parser = Interface(RequestReagent, db)

@request_reagent_blueprint.route('/get/', methods=['POST'])
def get_request_reagent():
    """calls to interface get function"""
    return parser.get(request)

@request_reagent_blueprint.route('/insert/', methods=["POST"])
def insert_request_reagent():
    """calls to interface insert function"""
    return parser.insert(request)

@request_reagent_blueprint.route('/update/', methods=["POST"])
def update_request_reagent():
    """calls to interface update function"""
    return parser.update(request)

@request_reagent_blueprint.route('/delete/', methods=["POST"])
def delete_request_reagent():
    """calls to interface delete function"""
    return parser.delete(request)
    