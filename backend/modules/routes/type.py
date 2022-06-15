from flask import request, jsonify, make_response, Blueprint
from modules.database import Database
import config

type_blueprint = Blueprint('type', __name__, url_prefix='/type')

db = Database(config)
@type_blueprint.route('/get/', methods=['POST'])
def get_type():
    data = request.json
    res = db.get_type(data)
    return make_response(jsonify({"state": "success", "results": res}), 200)
