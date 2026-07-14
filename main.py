from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
    return "<h1>This is my project</h1>"

if __name__ == "__main__":
    app.run(debug=True)
