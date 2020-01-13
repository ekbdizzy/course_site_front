'use strict';
import axios from 'axios'

const LOGIN_URL = 'http://localhost:8000/api/user/login/';
const REGISTRATION_URL = 'http://localhost:8000/api/user/register/';


function login() {
    const email = document.getElementById('email'),
        password = document.getElementById('password'),
        login_btn = document.getElementById('login_form_btn');

    try {
        login_btn.addEventListener('click', (e) => {
            e.preventDefault();
            axios.post(LOGIN_URL, {
                    "email": email.value,
                    "password": password.value
                }
            ).then(response => {
                document.cookie = "token=" + response['data']['token'];
                alert(`Welcome, ${response['data']['email']}!`)

            }).catch((err) => {
                console.log("AXIOS: " + err);
                alert("Login or password is incorrect")
            });
        })
    } catch (err) {
        console.log("AXIOS: " + err);
    }
}

function registerNewUser() {
    const name = document.getElementById('reg_name'),
        email = document.getElementById('reg_email'),
        password = document.getElementById('reg_password'),
        check_rules = document.getElementById('reg_rules'),
        reg_btn = document.getElementById('reg_form_btn');

    try {
        reg_btn.addEventListener('click', (e) => {
            e.preventDefault();

            if (check_rules.checked === false) {
                alert("Check our rules")
            } else {
                axios.post(REGISTRATION_URL, {
                        "full_name": name.value,
                        "email": email.value,
                        "password": password.value
                    }
                ).then(response => {
                    alert(`Welcome, ${response['data']['full_name']}, you are registered!`);
                    window.location.reload();

                }).catch((err) => {
                    console.log("AXIOS: " + err);
                });
            }
        })
    } catch (err) {
        console.log("AXIOS: " + err);
    }
}

login();
registerNewUser();