from flask import request, jsonify, make_response, Blueprint
from modules.database import Database
import config

user_blueprint = Blueprint('user', __name__, url_prefix='/user')

db = Database(config)

@user_blueprint.route('/get/', methods=['POST'])
def get_user():
    data = request.json
    res = db.get_user(data)
    return make_response(jsonify({"state": "success", "results": res}), 200)
