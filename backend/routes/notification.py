from flask import Blueprint, jsonify

notification_bp = Blueprint('notification', __name__)

@notification_bp.route('/alerts', methods=['GET'])
def get_alerts():
    return jsonify({"alerts": ["Reminder: Complete Module 2", "New course available!"]})
