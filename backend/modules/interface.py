"""Interface"""
from flask import make_response
class Interface:
    """Interface class for parsing requests and responses"""
    def __init__(self, model, db_name):
        self.db_name = db_name
        self.model = model
    def get(self, request):
        """Get function, administrates success and error status"""
        data = request.json
        res = self.db_name.get_(data, self.model)
        if isinstance(res, list):
            if len(res) != 0:
                return make_response({"results": res}, 200)
            return make_response({}, 404)
        return make_response({"description": res}, 500)
    def insert(self, request):
        """Insert function, administrates success and error status"""
        data = request.json
        res = self.db_name.insert_(data, self.model)
        if res is True:
            return make_response({}, 200)
        return make_response({"description": res}, 500)
    def update(self, request):
        """Update function, administrates success and error status"""
        data = request.json
        res = self.db_name.update_(data["query"], data["values"], self.model)
        if res is True:
            return make_response({}, 200)
        return make_response({"description": res}, 500)
    def delete(self, request):
        """Delete function, administrates success and error status"""
        data = request.json
        res = self.db_name.delete_(data, self.model)
        if res is True:
            return make_response({}, 200)
        return make_response({"description": res}, 500)
