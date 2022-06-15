from flask import make_response
class interface:
    def __init__(self, model, db):
        self.db = db
        self.model = model
        
    def get(self, request):
        data = request.json
        res = self.db.get_(data, self.model)
        if type(res) == list:
            if len(res) != 0:
                return make_response({"results": res}, 200)
            else:
                return make_response({}, 404)
        else:
            return make_response({"description": res}, 500)
            
    def insert(self, request):
        data = request.json
        res = self.db.insert_(data, self.model)
        if res == True:
            return make_response({}, 200)
        else:
            return make_response({"description": res}, 500)

    def update(self, request):
        data = request.json
        res = self.db.update_(data["query"], data["values"], self.model)
        if res == True:
            return make_response({}, 200)
        else:
            return make_response({"description": res}, 500)

    def delete(self, request):
        data = request.json
        res = self.db.delete_(data, self.model)
        if res == True:
            return make_response({}, 200)
        else:
            return make_response({"description": res}, 500)