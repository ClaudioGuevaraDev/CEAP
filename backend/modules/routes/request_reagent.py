
from flask import request, Blueprint
from modules.database import Database
import config
from modules.interface import interface

request_reagent_blueprint = Blueprint('request_reagent', __name__, url_prefix='/request_reagent')

db = Database(config)

tablename = "Request_reagent"
parser = interface(tablename, db)

@request_reagent_blueprint.route('/get/', methods=['POST'])
def get_request_reagent():
    return parser.get(request)

@request_reagent_blueprint.route('/insert/', methods=["POST"])
def insert_request_reagent():
    return parser.insert(request)
    
@request_reagent_blueprint.route('/update/', methods=["POST"])
def update_request_reagent():
    return parser.update(request)

@request_reagent_blueprint.route('/delete/', methods=["POST"])
def delete_request_reagent():
    return parser.delete(request)