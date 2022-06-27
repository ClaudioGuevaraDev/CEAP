"""Interface"""
from flask import make_response
class Interface:
    """Interface class for parsing requests and responses"""
    def __init__(self, model, db_name):
        self.db_name = db_name
        self.model = model
    def parse_response(self, res):
        """Parse response and return results"""
        if isinstance(res, list) or isinstance(res, dict):
            if len(res) != 0:
                return make_response({"results": res}, 200)
            return make_response({"description": "Not Found"}, 404)
        return make_response({"description": res}, 500)
    def get(self, request):
        """Get function, administrates success and error status"""
        res = self.db_name.get_(request.json, self.model)
        return self.parse_response(res)
    def insert(self, request):
        """Insert function, administrates success and error status"""
        res = self.db_name.insert_(request.json, self.model)
        return self.parse_response(res)
    def update(self, request):
        """Update function, administrates success and error status"""
        res = self.db_name.update_(request.json["query"], request.json["values"],
                                    self.model)
        return self.parse_response(res)
    def delete(self, request):
        """Delete function, administrates success and error status"""
        res = self.db_name.delete_(request.json, self.model)
        return self.parse_response(res)