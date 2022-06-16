"""User table"""
from flask import request,  Blueprint
from modules.database import Database
from modules.interface import Interface
from modules.models import User
import config

user_blueprint = Blueprint('user', __name__, url_prefix='/user')

db = Database(config)

parser = Interface(User, db)

@user_blueprint.route('/get/', methods=['POST'])
def get_user():
    """calls to interface get function"""
    return parser.get(request)

@user_blueprint.route('/insert/', methods=["POST"])
def insert_user():
    """calls to interface insert function"""
    return parser.insert(request)

@user_blueprint.route('/update/', methods=["POST"])
def update_user():
    """calls to interface update function"""
    return parser.update(request)

@user_blueprint.route('/delete/', methods=["POST"])
def delete_user():
    """calls to interface delete function"""
    return parser.delete(request)
