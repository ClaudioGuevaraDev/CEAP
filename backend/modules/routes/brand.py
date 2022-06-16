"""Brand url functions"""
from flask import request, Blueprint
from modules.database import Database
from modules.interface import Interface
from modules.models import Brand
import config

brand_blueprint = Blueprint('brand', __name__, url_prefix='/brand')

db = Database(config)

parser = Interface(Brand, db)

@brand_blueprint.route('/get/', methods=['POST'])
def get_brand():
    """calls to interface get function"""
    return parser.get(request)

@brand_blueprint.route('/insert/', methods=["POST"])
def insert_brand():
    """calls to interface insert function"""
    return parser.insert(request)

@brand_blueprint.route('/update/', methods=["POST"])
def update_brand():
    """calls to interface update function"""
    return parser.update(request)

@brand_blueprint.route('/delete/', methods=["POST"])
def delete_brand():
    """calls to interface delete function"""
    return parser.delete(request)
