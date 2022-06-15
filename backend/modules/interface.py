from flask import make_response, jsonify
class interface:
    def __init__(self, model, db):
        self.db = db
        self.model = model
        
    def get(self, request):
        data = request.json
        res = self.db.getter(data, self.model)
        if len(res) != 0:
            return make_response(jsonify({"results": res}), 200)
        else:
            return make_response({}, 404)
            
    def insert(self, request):
        data = request.json
        res = self.db.insert(data, self.model)
        if res == True:
            return make_response({}, 201)
        else:
            return make_response({"description": res}, 500)