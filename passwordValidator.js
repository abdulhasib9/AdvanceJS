function passwordValidator(password,username){
    if(password.length <8){
        return false
    }
    if(password.indexOf(' ')!=-1){
        return false
    }
    if(password.indexOf(username) !==-1){
        return false
    }
    return true
}
passwordValidator("hsib","abdul")