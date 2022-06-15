from flask import request, Blueprint
from modules.database import Database
import config
from modules.interface import interface

member_blueprint = Blueprint('member', __name__, url_prefix= '/member')

db = Database(config)

tablename = "Member"
parser = interface(tablename, db)

@member_blueprint.route('/get/', methods=['POST'])
def get_member():
    return parser.get(request)

@member_blueprint.route('/insert/', methods=["POST"])
def insert_type():
    return parser.insert(request)