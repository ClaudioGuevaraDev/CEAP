from flask import request, jsonify, make_response, Blueprint
from modules.database import Database
import config

maintenance_blueprint = Blueprint('maintenance', __name__, url_prefix='/maintenance')

db = Database(config)

@maintenance_blueprint.route('/get/', methods=['POST'])
def get_maintenance():
    data = request.json
    res = db.get_maintenance(data)
    return make_response(jsonify({"state": "success", "results": res}), 200)
