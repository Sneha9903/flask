from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

top_tags_data = {
    "years": ["2022", "2023", "2024", "2025"],
    "data": {
        "python": [5.68, 4.33, 3.91, 3.78],
        "javascript": [3.34, 2.92, 2.15, 2.04],
        "java": [1.57, 1.67, 1.58, 1.57],
        "reactjs": [1.81, 1.86, 1.33, 1.25],
        "c#": [1.48, 1.44, 1.51, 1.42],
        "android": [0.91, 1.04, 1.27, 1.04],
        "html": [1.37, 1.15, 0.85, 0.81],
        "r": [1.28, 0.97, 0.88, 0.85],
        "typescript": [0.93, 1.14, 0.91, 0.76],
        "c++": [0.89, 0.81, 0.98, 1.06]
    }
}

@app.route('/api/toptags')
def get_top_tags():
    return jsonify(top_tags_data)

if __name__ == "__main__":
    app.run(debug=True)
