from flask import Flask, render_template, request, redirect, url_for, flash
from flask_mysqldb import MySQL

# Initializations
app = Flask(__name__)

# Mysql Connection
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '890611'
app.config['MYSQL_DB']= 'python_db'

mysql = MySQL(app)

# Settings
app.secret_key = "secret"

@app.route('/')
def index():
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM contacts')
    data = cur.fetchall()
    return render_template("index.html", contacts = data)


@app.route('/add_contact', methods=['POST'])
def contact():
    if request.method == 'POST':
        fullname = request.form['fullname']
        phone = request.form['phone']
        email = request.form['email']
        cur = mysql.connection.cursor()
        cur.execute('INSERT INTO contacts(fullname, phone, email) VALUES(%s, %s, %s)', (fullname, phone, email))
        mysql.connection.commit()
        flash('Contact added succesfully')
        return redirect(url_for("index"))
    

@app.route('/delete/<string:id>')
def delete(id):
    cur = mysql.connection.cursor()
    cur.execute('DELETE FROM contacts WHERE id = %s', (id))
    mysql.connection.commit()
    flash('Contact removed succesfully')
    return redirect(url_for("index"))

@app.route('/edit/<string:id>', methods=['POST', 'GET'])
def edit(id):

    cur = mysql.connection.cursor()

    if request.method == 'GET':        
        cur.execute('SELECT * FROM contacts WHERE id = %s', (id))
        data = cur.fetchall()
        return render_template("edit.html", contact = data[0])
    else:
        fullname = request.form['fullname']
        phone = request.form['phone']
        email = request.form['email']
        cur.execute("""
            UPDATE contacts
            SET fullname=%s, phone=%s, email=%s 
            WHERE id=%s
            """, (fullname, phone, email, id))
        mysql.connection.commit()
        flash('Contact updated succesfully')
        return redirect(url_for("index"))

if __name__ == '__main__':
    app.run(port=3000, debug=True)


