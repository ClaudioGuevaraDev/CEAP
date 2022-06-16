"""Member url functions"""
from flask import request, Blueprint
from modules.database import Database
from modules.interface import Interface
from modules.models import Member
import config

member_blueprint = Blueprint('member', __name__, url_prefix= '/member')

db = Database(config)

parser = Interface(Member, db)

@member_blueprint.route('/get/', methods=['POST'])
def get_member():
    """calls to interface get function"""
    return parser.get(request)

@member_blueprint.route('/insert/', methods=["POST"])
def insert_member():
    """calls to interface insert function"""
    return parser.insert(request)

@member_blueprint.route('/update/', methods=["POST"])
def update_member():
    """calls to interface update function"""
    return parser.update(request)

@member_blueprint.route('/delete/', methods=["POST"])
def delete_member():
    """calls to interface delete function"""
    return parser.delete(request)
