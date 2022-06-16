"""LabReagent url functions"""
from flask import request, Blueprint
from modules.database import Database
from modules.interface import Interface
from modules.models import LabReagent
import config

lab_reagent_blueprint = Blueprint('lab_reagent', __name__, url_prefix='/lab_reagent')

db = Database(config)

parser = Interface(LabReagent, db)

@lab_reagent_blueprint.route('/get/', methods=['POST'])
def get_lab_reagent():
    """calls to interface get function"""
    return parser.get(request)

@lab_reagent_blueprint.route('/insert/', methods=["POST"])
def insert_lab_reagent():
    """calls to interface insert function"""
    return parser.insert(request)

@lab_reagent_blueprint.route('/update/', methods=["POST"])
def update_lab_reagent():
    """calls to interface update function"""
    return parser.update(request)

@lab_reagent_blueprint.route('/delete/', methods=["POST"])
def delete_lab_reagent():
    """calls to interface delete function"""
    return parser.delete(request)
