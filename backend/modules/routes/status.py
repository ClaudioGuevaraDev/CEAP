"""Status url functions"""
from flask import request, Blueprint
from modules.database import Database
from modules.interface import Interface
from modules.models import Status
import config

status_blueprint = Blueprint('status', __name__, url_prefix='/status')

db = Database(config)

parser = Interface(Status, db)

@status_blueprint.route('/get/', methods=['POST'])
def get_status():
    """calls to interface get function"""
    return parser.get(request)

@status_blueprint.route('/insert/', methods=["POST"])
def insert_status():
    """calls to interface insert function"""
    return parser.insert(request)

@status_blueprint.route('/update/', methods=["POST"])
def update_status():
    """calls to interface update function"""
    return parser.update(request)

@status_blueprint.route('/delete/', methods=["POST"])
def delete_status():
    """calls to interface delete function"""
    return parser.delete(request)
