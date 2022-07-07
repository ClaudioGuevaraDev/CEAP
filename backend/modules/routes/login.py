"""Login url functions"""
from flask import request, Blueprint
from modules.database import Database
import config

login_blueprint = Blueprint('login', __name__)

db = Database(config)

@login_blueprint.route('/login/', methods=['POST'])
def login():
    """compare mails and passwords as login function"""
    return db.login(request.json, config.KEY)
