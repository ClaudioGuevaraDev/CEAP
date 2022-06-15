
from flask import request, jsonify, make_response, Blueprint
from modules.database import Database
import config

brand_blueprint = Blueprint('brand', __name__, url_prefix='/brand')

db = Database(config)

@brand_blueprint.route('/get/', methods=['POST'])
def get_brand():
    data = request.json
    res = db.get_brand(data)
    return make_response(jsonify({"state": "success", "results": res}), 200)
