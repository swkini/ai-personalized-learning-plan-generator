from flask import Blueprint, request, jsonify

progress_bp = Blueprint('progress', __name__)

@progress_bp.route('/progress', methods=['GET'])
def get_progress():
    return jsonify({"progress": "50%"})

@progress_bp.route('/update-progress', methods=['POST'])
def update_progress():
    data = request.json
    return jsonify({"message": "Progress updated!", "data": data})
