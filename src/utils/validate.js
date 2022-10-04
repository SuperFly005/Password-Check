
export const validate = (password, repassword) => {
    const error = []
    if(password !== repassword) {
        error.push("Password doesn't match")
    }
    if(password.length < 6) {
        error.push("must contain at least 6 letters")
    }
    if(!password.match(/[A-Z]/)) {
        error.push("must contain at least 1 uppercase character")
    }
    if(!password.match(/[a-z]/)) {
        error.push("must contain at least 1 lowercase character")
    }
    if(!password.match(/[0-9]/)) {
        error.push("must contain at least 1 number")
    }
    if(!password.match(/[!#@$%^&*(){}\[\]_\-+="':;<>\.]/)) {
        error.push("must contain at least 1 special character (!@#$%^&*()_-+={[}]|:;\"'<,>.)")
    }

    return error
}