
from flask import request, Blueprint
from modules.database import Database
import config
from modules.interface import interface

status_blueprint = Blueprint('status', __name__, url_prefix='/status')

db = Database(config)

tablename = "Status"
parser = interface(tablename, db)

@status_blueprint.route('/get/', methods=['POST'])
def get_status():
    return parser.get(request)

@status_blueprint.route('/insert/', methods=["POST"])
def insert_type():
    return parser.insert(request)