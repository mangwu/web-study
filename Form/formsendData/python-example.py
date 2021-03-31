from flask import Flask, render_template, request
app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def form():
  return render_template('formfirst.html')

@app.route('/hello', methods=['GET', 'POST'])
def hello():
  user_file = request.form['user_file']
  print(type(user_file))
  return render_template(
    'greeting.html', 
    user_name=request.form['user_name'], 
    user_email=request.form['user_email'],
    user_msg=request.form['user_msg'],
    user_file=request.form['user_file']
  )

if __name__ == "__main__":
  app.run()