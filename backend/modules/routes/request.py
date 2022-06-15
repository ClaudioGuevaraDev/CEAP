from flask import request, Blueprint
from modules.database import Database
import config
from modules.interface import interface

request_blueprint = Blueprint('request', __name__, url_prefix='/request')

db = Database(config)

tablename = "Request"
parser = interface(tablename, db)

@request_blueprint.route('/get/', methods=['POST'])
def get_request():
    return parser.get(request)

@request_blueprint.route('/insert/', methods=["POST"])
def insert_request():
    return parser.insert(request)
    
@request_blueprint.route('/update/', methods=["POST"])
def update_request():
    return parser.update(request)

@request_blueprint.route('/delete/', methods=["POST"])
def delete_request():
    return parser.delete(request)