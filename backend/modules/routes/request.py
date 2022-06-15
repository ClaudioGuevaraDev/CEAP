from flask import request, jsonify, make_response, Blueprint
from modules.database import Database
import config

request_blueprint = Blueprint('request', __name__, url_prefix='/request')

db = Database(config)

@request_blueprint.route('/get/', methods=['POST'])
def get_request():
    data = request.json
    res = db.get_request(data)
    return make_response(jsonify({"state": "success", "results": res}), 200)
