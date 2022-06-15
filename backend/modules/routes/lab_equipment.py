
from flask import request, jsonify, make_response, Blueprint
from modules.database import Database
import config

lab_equipment_blueprint = Blueprint('lab_equipment', __name__, url_prefix='/lab_equipment')

db = Database(config)

@lab_equipment_blueprint.route('/get/', methods=['POST'])
def get_lab_equipment():
    data = request.json
    res = db.get_lab_equipment(data)
    return make_response(jsonify({"state": "success", "results": res}), 200)
