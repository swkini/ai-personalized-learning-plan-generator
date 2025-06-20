from flask import Blueprint, request, jsonify

user_bp = Blueprint('user', __name__)

@user_bp.route('/profile', methods=['GET', 'POST'])
def profile():
    if request.method == 'POST':
        data = request.json
        return jsonify({"message": "Profile updated!", "data": data})
    return jsonify({"message": "User profile details"})
