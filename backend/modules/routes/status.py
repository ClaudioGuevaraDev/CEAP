
from flask import request, jsonify, make_response, Blueprint
from modules.database import Database
import config

status_blueprint = Blueprint('status', __name__, url_prefix='/status')

db = Database(config)

@status_blueprint.route('/get/', methods=['POST'])
def get_status():
    data = request.json
    res = db.get_status(data)
    return make_response(jsonify({"state": "success", "results": res}), 200)
