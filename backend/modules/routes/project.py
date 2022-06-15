from flask import request, Blueprint
from modules.database import Database
import config
from modules.interface import interface

project_blueprint = Blueprint('project', __name__, url_prefix='/project')

db = Database(config)

tablename = "Project"
parser = interface(tablename, db)

@project_blueprint.route('/get/', methods=['POST'])
def get_project():
    return parser.get(request)
    
@project_blueprint.route('/insert/', methods=["POST"])
def insert_type():
    return parser.insert(request)