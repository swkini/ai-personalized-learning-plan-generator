from flask import Blueprint, request, jsonify

course_bp = Blueprint('course', __name__)

@course_bp.route('/courses', methods=['GET'])
def get_courses():
    return jsonify({"courses": ["Course1", "Course2", "Course3"]})

@course_bp.route('/enroll', methods=['POST'])
def enroll():
    data = request.json
    return jsonify({"message": "Enrolled successfully!", "data": data})
