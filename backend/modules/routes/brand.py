
from flask import request, Blueprint
from modules.database import Database
import config
from modules.interface import interface

brand_blueprint = Blueprint('brand', __name__, url_prefix='/brand')

db = Database(config)

tablename = "Brand"
parser = interface(tablename, db)

@brand_blueprint.route('/get/', methods=['POST'])
def get_brand():
    return parser.get(request)

@brand_blueprint.route('/insert/', methods=["POST"])
def insert_brand():
    return parser.insert(request)

@brand_blueprint.route('/update/', methods=["POST"])
def update_brand():
    return parser.update(request)

@brand_blueprint.route('/delete/', methods=["POST"])
def delete_brand():
    return parser.delete(request)
