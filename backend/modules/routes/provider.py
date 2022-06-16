"""Provider url functions"""
from flask import request, Blueprint
from modules.database import Database
from modules.interface import Interface
from modules.models import Provider
import config

provider_blueprint = Blueprint('provider', __name__, url_prefix='/provider')

db = Database(config)

parser = Interface(Provider, db)

@provider_blueprint.route('/get/', methods=['POST'])
def get_provider():
    """calls to interface get function"""
    return parser.get(request)

@provider_blueprint.route('/insert/', methods=["POST"])
def insert_provider():
    """calls to interface insert function"""
    return parser.insert(request)

@provider_blueprint.route('/update/', methods=["POST"])
def update_provider():
    """calls to interface update function"""
    return parser.update(request)

@provider_blueprint.route('/delete/', methods=["POST"])
def delete_provider():
    """calls to interface delete function"""
    return parser.delete(request)
    