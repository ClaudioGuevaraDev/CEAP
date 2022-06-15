
from flask import request, jsonify, make_response, Blueprint
from modules.database import Database
import config

provider_blueprint = Blueprint('provider', __name__, url_prefix='/provider')

db = Database(config)
@provider_blueprint.route('/get/', methods=['POST'])
def get_provider():
    data = request.json
    res = db.get_provider(data)
    return make_response(jsonify({"state": "success", "results": res}), 200)
