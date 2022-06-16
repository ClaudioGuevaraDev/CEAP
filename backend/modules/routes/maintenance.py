"""Maintenance url functions"""
from flask import request, Blueprint
from modules.database import Database
from modules.interface import Interface
from modules.models import Maintenance
import config

maintenance_blueprint = Blueprint('maintenance', __name__, url_prefix='/maintenance')

db = Database(config)

parser = Interface(Maintenance, db)

@maintenance_blueprint.route('/get/', methods=['POST'])
def get_maintenance():
    """calls to interface get function"""
    return parser.get(request)

@maintenance_blueprint.route('/insert/', methods=["POST"])
def insert_maintenance():
    """calls to interface insert function"""
    return parser.insert(request)

@maintenance_blueprint.route('/update/', methods=["POST"])
def update_maintenance():
    """calls to interface update function"""
    return parser.update(request)

@maintenance_blueprint.route('/delete/', methods=["POST"])
def delete_maintenance():
    """calls to interface delete function"""
    return parser.delete(request)
    