from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import json
import os

app = Flask(__name__, static_folder='../vrce-ui/build', static_url_path='/')
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/')
def index():
	return app.send_static_file('index.html')

@app.route('/api/status/usage/<CORP_ID>', methods=['POST'])
def getStatus():
	return 'status'

if __name__ == "__main__":
	app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))
