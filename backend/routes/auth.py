from flask import Blueprint, request, jsonify

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.json
    # TODO: Save user to DB
    return jsonify({"message": "User registered successfully!", "data": data}), 201

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.json
    # TODO: Check user in DB
    return jsonify({"message": "Login successful!", "data": data}), 200
