
from flask import request, jsonify, make_response, Blueprint
from modules.database import Database
import config

lab_reagent_blueprint = Blueprint('lab_reagent', __name__, url_prefix='/lab_reagent')

db = Database(config)
@lab_reagent_blueprint.route('/get/', methods=['POST'])
def get_lab_reagent():
    data = request.json
    res = db.get_lab_reagent(data)
    return make_response(jsonify({"state": "success", "results": res}), 200)
