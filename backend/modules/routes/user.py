from flask import request,  Blueprint
from modules.database import Database
import config
from modules.interface import interface

user_blueprint = Blueprint('user', __name__, url_prefix='/user')

db = Database(config)

tablename = "User"
parser = interface(tablename, db)

@user_blueprint.route('/get/', methods=['POST'])
def get_user():
    return parser.get(request)
@user_blueprint.route('/insert/', methods=["POST"])
def insert_type():
    return parser.insert(request)
