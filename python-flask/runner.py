from app import app, db
# from app.models import Users, Profile

@app.shell_context_processor
def make_shell_context():
    return {"app": app,
            "db": db,
            # "Users": Users,
            # "Profile": Profile
            }

if __name__ == "__main__" :
    app.run(debug=True, host="0.0.0.0")