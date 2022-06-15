from flask import request, jsonify, make_response, Blueprint
from modules.database import Database
import config

project_blueprint = Blueprint('project', __name__, url_prefix='/project')

db = Database(config)

@project_blueprint.route('/get/', methods=['POST'])
def get_project():
    data = request.json
    res = db.get_project(data)
    return make_response(jsonify({"state": "success", "results": res}), 200)
