
from flask import request, Blueprint
from modules.database import Database
import config
from modules.interface import interface

provider_blueprint = Blueprint('provider', __name__, url_prefix='/provider')

db = Database(config)

tablename = "Provider"
parser = interface(tablename, db)

@provider_blueprint.route('/get/', methods=['POST'])
def get_provider():
    return parser.get(request)

@provider_blueprint.route('/insert/', methods=["POST"])
def insert_type():
    return parser.insert(request)