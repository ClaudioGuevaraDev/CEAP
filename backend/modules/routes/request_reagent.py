
from flask import request, jsonify, make_response, Blueprint
from modules.database import Database
import config

request_reagent_blueprint = Blueprint('request_reagent', __name__, url_prefix='/request_reagent')

db = Database(config)

@request_reagent_blueprint.route('/get/', methods=['POST'])
def get_request_reagent():
    data = request.json
    res = db.get_request_reagent(data)
    return make_response(jsonify({"state": "success", "results": res}), 200)
