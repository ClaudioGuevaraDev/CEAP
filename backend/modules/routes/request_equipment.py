from flask import request, jsonify, make_response, Blueprint
from modules.database import Database
import config

request_equipment_blueprint = Blueprint('request_equipment', __name__, url_prefix='/request_equipment')

db = Database(config)
@request_equipment_blueprint.route('/get/', methods=['POST'])
def get_request_equipment():
    data = request.json
    res = db.get_request_equipment(data)
    return make_response(jsonify({"state": "success", "results": res}), 200)
