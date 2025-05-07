var account = JSON.parse(localStorage.getItem('account')) || {
    'adminAccount@gmail.com': 'password123'
}

// const inputEmail = document.querySelector('#email')
// const inputPassword = document.querySelector('#password')
// const errorEmail = document.querySelector('#error_email')
// const errorAccount = document.querySelector('#email_password_incorrect')

function isEmail() {
    const text = document.querySelector('#email').value.trim()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(text);
}

function checkAccount() {
    const inputEmail = document.querySelector('#email')
    const inputPassword = document.querySelector('#password')
    const errorEmail = document.querySelector('#error_email')
    const errorPassword = document.querySelector('#error_password')
    const errorAccount = document.querySelector('#email_password_incorrect')

    const email = inputEmail.value.trim()
    const password = inputPassword.value

    if (password === '') {
        errorPassword.style.display = 'block'
    } else {
        errorPassword.style.display = 'none'
    }

    if (!isEmail()) {
        errorEmail.style.display = 'block'
    } else {
        errorEmail.style.display = 'none'

        if (!((password === ''))) {
            if (account[email] === password) {
                errorAccount.style.display = 'none'
                alert('Login successfully')
            } else {
                errorAccount.style.display = 'block'
            }
        }
    }
}

function changeDisplay() {
    const displayA = document.querySelectorAll('.display_a')
    const displayB = document.querySelector('.display_b')

    document.querySelector('#email_password_incorrect').style.display = 'none'
    document.querySelector('#email_duplicate').style.display = 'none'

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
    const inputEmail = document.querySelector('#email')
    const inputPassword = document.querySelector('#password')
    const errorEmail = document.querySelector('#error_email')
    const errorPassword = document.querySelector('#error_password')
    const emailDuplicate = document.querySelector('#email_duplicate')

    const email = inputEmail.value.trim()
    const password = inputPassword.value

    if (password === '') {
        errorPassword.style.display = 'block'
    } else {
        errorPassword.style.display = 'none'
    }

    if (!isEmail()) {
        errorEmail.style.display = 'block'
    } else {
        errorEmail.style.display = 'none'

        if (!(password === '')) {
            if (Object.keys(account).indexOf(email) === -1) {
                emailDuplicate.style.display = 'none'

                inputEmail.value = ''
                inputPassword.value = ''

                account[email] = password
                alert("create a new account successfully")
            } else {
                emailDuplicate.style.display = 'block'
            }
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