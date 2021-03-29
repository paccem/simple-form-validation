// import { useSelector } from 'react-redux'


const ValidateLogin = (loginData) => {
    
    let logErrors = {}

    if (!loginData.LogEmail) {
        logErrors.LogEmail = 'Email is required' 
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(loginData.LogEmail)) {
        logErrors.LogEmail = 'Email address is invalid'
    }
    
    

    if (!loginData.LogPassword) {
        logErrors.LogPassword = 'Password is required'
    }else if (loginData.LogPassword.length<6) {
        logErrors.LogPassword = 'Password must be 6 characters or more'
    }
    



    return logErrors
}
export default ValidateLogin


