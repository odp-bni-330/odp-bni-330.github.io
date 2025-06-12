from flask import Flask, redirect, request, session, url_for
import requests
import os

app = Flask(__name__)
app.secret_key = 'your_secret_key_here'

# --- Ganti sesuai konfigurasi Keycloak kamu ---
CLIENT_ID = 'postman-client'
CLIENT_SECRET = 'secret'
AUTH_URL = 'http://localhost:8080/realms/demo/protocol/openid-connect/auth'
TOKEN_URL = 'http://localhost:8080/realms/demo/protocol/openid-connect/token'
REDIRECT_URI = 'http://localhost:5000/callback'
SCOPE = 'openid profile email'

@app.route('/')
def home():
    return '<a href="/login">Login with Keycloak</a>'

@app.route('/login')
def login():
    auth_redirect_url = (
        f"{AUTH_URL}?"
        f"client_id={CLIENT_ID}&"
        f"response_type=code&"
        f"scope={SCOPE}&"
        f"redirect_uri={REDIRECT_URI}"
    )
    return redirect(auth_redirect_url)

@app.route('/callback')
def callback():
    code = request.args.get('code')

    token_response = requests.post(TOKEN_URL, data={
        'grant_type': 'authorization_code',
        'code': code,
        'redirect_uri': REDIRECT_URI,
        'client_id': CLIENT_ID,
        'client_secret': CLIENT_SECRET
    })

    token_data = token_response.json()
    session['access_token'] = token_data.get('access_token')
    session['id_token'] = token_data.get('id_token')

    return redirect(url_for('profile'))

@app.route('/profile')
def profile():
    if 'access_token' not in session:
        return redirect('/')

    access_token = session['access_token']

    # Ambil data user dari userinfo endpoint
    userinfo_url = 'http://localhost:8080/realms/demo/protocol/openid-connect/userinfo'
    headers = {'Authorization': f'Bearer {access_token}'}
    userinfo_response = requests.get(userinfo_url, headers=headers)

    if userinfo_response.ok:
        userinfo = userinfo_response.json()
        return f"<h1>Welcome {userinfo['name']}</h1><pre>{userinfo}</pre>"
    else:
        return 'Gagal mendapatkan data profil.'

if __name__ == '__main__':
    app.run(debug=True)

