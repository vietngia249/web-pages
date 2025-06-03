var account = JSON.parse(localStorage.getItem('account')) || {
    'adminAccount@gmail.com': 'password123'
}

const inputEmail = document.querySelector('#email')
const inputPassword1 = document.querySelector('#password1')
const inputPassword2 = document.querySelector('#password2')
const errorEmail = document.querySelector('#error_email')
const errorPasswordRequired = document.querySelector('#password_required')
const errorPasswordNotSame = document.querySelector('#password_not_same')
const errorAccount = document.querySelector('#email_password_incorrect')
const emailDuplicate = document.querySelector('#email_duplicate')

// phuong thuc xoa cac thong bao loi
function clearErrorMessages() {
    errorEmail.style.display = 'none'
    errorAccount.style.display = 'none'
    errorPasswordRequired.style.display = 'none'
    errorPasswordNotSame.style.display = 'none'
    emailDuplicate.style.display = 'none'
}

// phuong thuc kiem tra co phai la email hay khong
function isEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

// phuong thuc kiem tra tai khoan co ton tai hay khong
function findAccount(email) {
    if (isEmail(email)) {
        return (account[email])
    } else {
        errorEmail.style.display = 'block'
        return false
    }
}

// phuong thuc kiem tra password co hop le hay khong
function isValidPassword(password1, password2) {
    if (password1 === '' || password2 === '') {
        errorPasswordRequired.style.display = 'block'
    } else if (password1 !== password2) {
        errorPasswordNotSame.style.display = 'block'
    } else {
        return true
    }
    return false
}

// phuong thuc tao va luu tai khoan
function saveAccount(email, password) {
    account[email] = password
    localStorage.setItem('account', JSON.stringify(account));
    inputEmail.value = ''
    inputPassword1.value = ''
    inputPassword2.value = ''
    alert("Create a new account successfully")
}

// phuong thuc chuyen huong den login page
function goToLoginPage() {
    window.location.href = 'https://vietngia249.github.io/login-website/'
}

// phuong thuc tao tai khoan moi
function createAccount(event) {
    event.preventDefault()

    // xoa cac thong bao loi
    clearErrorMessages()

    // kiem tra email
    const email = inputEmail.value.trim()
    if (findAccount(email)) {
        return false
    }

    // kiem tra password
    const password1 = inputPassword1.value
    const password2 = inputPassword2.value
    if (!isValidPassword(password1, password2)) {
        return false
    }

    // tao tai khoan moi
    saveAccount(email, password1)
    goToLoginPage()
    return true
}