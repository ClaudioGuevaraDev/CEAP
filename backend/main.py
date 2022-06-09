from modules.api import api

api = api()
app = api.get_api()

if __name__ == "__main__":
    app.run(debug=True)