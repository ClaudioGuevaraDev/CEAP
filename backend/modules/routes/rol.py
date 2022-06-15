from flask import request, jsonify, make_response, Blueprint
from modules.database import Database
import config

rol_blueprint = Blueprint('rol', __name__, url_prefix='/rol')

db = Database(config)

@rol_blueprint.route('/get/', methods=['POST'])
def get_rol():
    data = request.json
    res = db.get_rol(data)
    return make_response(jsonify({"state": "success", "results": res}), 200)
