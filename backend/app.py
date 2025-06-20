from flask import Flask
from routes import auth, user, course, plan, progress, notification

from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow React (localhost:3000) to access Flask (localhost:5000)

# Register Blueprints
app.register_blueprint(auth.auth_bp, url_prefix='/auth')
app.register_blueprint(user.user_bp, url_prefix='/user')
app.register_blueprint(course.course_bp, url_prefix='/course')
app.register_blueprint(plan.plan_bp, url_prefix='/plan')
app.register_blueprint(progress.progress_bp, url_prefix='/progress')
app.register_blueprint(notification.notification_bp, url_prefix='/notification')

if __name__ == '__main__':
    app.run(debug=True)
