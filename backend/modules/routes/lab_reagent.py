
from flask import request, Blueprint
from modules.database import Database
import config
from modules.interface import interface

lab_reagent_blueprint = Blueprint('lab_reagent', __name__, url_prefix='/lab_reagent')

db = Database(config)

tablename = "Lab_reagent"
parser = interface(tablename, db)

@lab_reagent_blueprint.route('/get/', methods=['POST'])
def get_lab_reagent():
    return parser.get(request)

@lab_reagent_blueprint.route('/insert/', methods=["POST"])
def insert_lab_reagent():
    return parser.insert(request)
    
@lab_reagent_blueprint.route('/update/', methods=["POST"])
def update_lab_reagent():
    return parser.update(request)