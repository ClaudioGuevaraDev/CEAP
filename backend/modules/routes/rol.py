"""Rol url functions"""
from flask import request, Blueprint
from modules.database import Database
from modules.interface import Interface
from modules.models import Rol
import config

rol_blueprint = Blueprint('rol', __name__, url_prefix='/rol')

db = Database(config)

parser = Interface(Rol, db)

@rol_blueprint.route('/get/', methods=['POST'])
def get_rol():
    """calls to interface get function"""
    return parser.get(request)

@rol_blueprint.route('/insert/', methods=["POST"])
def insert_rol():
    """calls to interface insert function"""
    return parser.insert(request)

@rol_blueprint.route('/update/', methods=["POST"])
def update_rol():
    """calls to interface update function"""
    return parser.update(request)

@rol_blueprint.route('/delete/', methods=["POST"])
def delete_rol():
    """calls to interface delete function"""
    return parser.delete(request)
    