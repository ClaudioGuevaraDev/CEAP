from flask import Flask, request, jsonify, make_response
from flask_cors import CORS
from modules.database import Database
import config

app = Flask(__name__)
#Cors
CORS(app)

db = Database(config)

class api():
        
    @app.route('/api/get_user/', methods=['POST'])
    def get_user():
        data = request.json
        res = db.get_user(data)
        return make_response(jsonify({"state": "success", "results": res}), 200)


    @app.route('/api/get_rol/', methods=['POST'])
    def get_rol():
        data = request.json
        res = db.get_rol(data)
        return make_response(jsonify({"state": "success", "results": res}), 200)

    @app.route('/api/get_request/', methods=['POST'])
    def get_request():
        data = request.json
        res = db.get_request(data)
        return make_response(jsonify({"state": "success", "results": res}), 200)

    @app.route('/api/get_project/', methods=['POST'])
    def get_project():
        data = request.json
        res = db.get_project(data)
        return make_response(jsonify({"state": "success", "results": res}), 200)

    @app.route('/api/get_member/', methods=['POST'])
    def get_member():
        data = request.json
        res = db.get_member(data)
        return make_response(jsonify({"state": "success", "results": res}), 200)

    @app.route('/api/get_lab_reagent/', methods=['POST'])
    def get_lab_reagent():
        data = request.json
        res = db.get_lab_reagent(data)
        return make_response(jsonify({"state": "success", "results": res}), 200)
    
    @app.route('/api/get_measurement_unit/', methods=['POST'])
    def get_measurement_unit():
        data = request.json
        res = db.get_measurement_unit(data)
        return make_response(jsonify({"state": "success", "results": res}), 200)

    @app.route('/api/get_type/', methods=['POST'])
    def get_type():
        data = request.json
        res = db.get_type(data)
        return make_response(jsonify({"state": "success", "results": res}), 200)

    @app.route('/api/get_request_reagent/', methods=['POST'])
    def get_request_reagent():
        data = request.json
        res = db.get_request_reagent(data)
        return make_response(jsonify({"state": "success", "results": res}), 200)

    @app.route('/api/get_lab_equipment/', methods=['POST'])
    def get_lab_equipment():
        data = request.json
        res = db.get_lab_equipment(data)
        return make_response(jsonify({"state": "success", "results": res}), 200)

    @app.route('/api/get_brand/', methods=['POST'])
    def get_brand():
        data = request.json
        res = db.get_brand(data)
        return make_response(jsonify({"state": "success", "results": res}), 200)

    @app.route('/api/get_provider/', methods=['POST'])
    def get_provider():
        data = request.json
        res = db.get_provider(data)
        return make_response(jsonify({"state": "success", "results": res}), 200)

    @app.route('/api/get_status/', methods=['POST'])
    def get_status():
        data = request.json
        res = db.get_status(data)
        return make_response(jsonify({"state": "success", "results": res}), 200)

    @app.route('/api/get_maintenance/', methods=['POST'])
    def get_maintenance():
        data = request.json
        res = db.get_maintenance(data)
        return make_response(jsonify({"state": "success", "results": res}), 200)

    @app.route('/api/get_request_equipment/', methods=['POST'])
    def get_request_equipment():
        data = request.json
        res = db.get_request_equipment(data)
        return make_response(jsonify({"state": "success", "results": res}), 200)

    def get_api(self):
        return app