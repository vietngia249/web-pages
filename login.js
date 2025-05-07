var account = JSON.parse(localStorage.getItem('account')) || {
    'adminAccount@gmail.com': 'password123'
}

const inputEmail = document.querySelector('#email')
const inputPassword = document.querySelector('#password')
const errorEmail = document.querySelector('#error_email')
const errorAccount = document.querySelector('#email_password_incorrect')

function isEmail() {
    const text = document.querySelector('#email').value.trim()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(text);
}

function checkAccount() {
    if (!isEmail()) {
        errorEmail.style.display = 'block'
    } else {
        const inputEmail = document.querySelector('#email')
        const inputPassword = document.querySelector('#password')
        const errorEmail = document.querySelector('#error_email')
        const errorAccount = document.querySelector('#email_password_incorrect')

        const email = inputEmail.value.trim()
        const password = inputPassword.value

        inputEmail.value = ''
        inputPassword.value = ''

        if (account[email] === password) {
            errorEmail.style.display = 'none'
            errorAccount.style.display = 'none'
            alert('Login successfully')
        } else {
            errorAccount.style.display = 'block'
        }
    }
}

function changeDisplay() {
    const displayA = document.querySelectorAll('.display_a')
    const displayB = document.querySelector('.display_b')

    if (displayB.style.display === 'none') {
        displayB.style.display = 'block'
        displayA.forEach(function (x) {
            x.style.display = 'none'
        })
    } else {
        displayA.forEach(function (x) {
            x.style.display = 'block'
        })
        displayB.style.display = 'none'
    }
}

function addAccount() {
    if (!isEmail()) {
        errorEmail.style.display = 'block'
    } else {
        const inputEmail = document.querySelector('#email')
        const inputPassword = document.querySelector('#password')
        const errorEmail = document.querySelector('#error_email')
        const errorAccount = document.querySelector('#email_password_incorrect')

        const email = inputEmail.value.trim()
        const password = inputPassword.value

        inputEmail.value = ''
        inputPassword.value = ''

        if (Object.keys(account).indexOf(email) === -1) {
            errorEmail.style.display = 'none'
            account[email] = password
            alert("create a new account successfully")
        } else {
            errorAccount.style.display = 'block'
        }
    }
    localStorage.setItem('account', JSON.stringify(account));
}

function loginGoogle() {
    alert("waiting for next update")
}

function loginMicrosoft() {
    alert("waiting for next update")
}

function loginSSO() {
    alert("waiting for next update")
}

function resetAccount() {
    localStorage.removeItem('account');
}