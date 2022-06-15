

from flask import request, jsonify, make_response, Blueprint
from modules.database import Database
import config

measurement_unit_blueprint = Blueprint('measurement_unit', __name__, url_prefix='/measurement_unit')

db = Database(config)

@measurement_unit_blueprint.route('/get/', methods=['POST'])
def get_measurement_unit():
    data = request.json
    res = db.get_measurement_unit(data)
    return make_response(jsonify({"state": "success", "results": res}), 200)
