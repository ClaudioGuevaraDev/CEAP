"""Project url functions"""
from flask import request, Blueprint
from modules.database import Database
from modules.interface import Interface
from modules.models import Project
import config

project_blueprint = Blueprint('project', __name__, url_prefix='/project')

db = Database(config)

parser = Interface(Project, db)

@project_blueprint.route('/get/', methods=['POST'])
def get_project():
    """calls to interface get function"""
    return parser.get(request)

@project_blueprint.route('/insert/', methods=["POST"])
def insert_project():
    """calls to interface insert function"""
    return parser.insert(request)

@project_blueprint.route('/update/', methods=["POST"])
def update_project():
    """calls to interface update function"""
    return parser.update(request)

@project_blueprint.route('/delete/', methods=["POST"])
def delete_project():
    """calls to interface delete function"""
    return parser.delete(request)
