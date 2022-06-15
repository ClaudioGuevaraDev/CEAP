from flask import request, jsonify, make_response, Blueprint
from modules.database import Database
import config

member_blueprint = Blueprint('member', __name__, url_prefix= '/member')

db = Database(config)

@member_blueprint.route('/get/', methods=['POST'])
def get_member():
    data = request.json
    res = db.get_member(data)
    return make_response(jsonify({"state": "success", "results": res}), 200)
