from flask import Blueprint, request, jsonify

plan_bp = Blueprint('plan', __name__)

@plan_bp.route('/generate-plan', methods=['POST'])
def generate_plan():
    data = request.json
    # TODO: Call LLM here
    return jsonify({"message": "Plan generated!", "plan": "Sample AI-generated plan based on input."})
