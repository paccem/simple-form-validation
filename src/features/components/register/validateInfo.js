const validateInfo = (userData) => {
    let errors = {}

    if (!userData.firstName.trim()){
        errors.firstName = 'First Name is required'
    }
    if (!userData.lastName.trim()) {
        errors.lastName = 'Last Name is required'
    }

    if (!userData.email) {
       errors.email = 'Email is required' 
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(userData.email)) {
        errors.email = 'Email address is invalid'
    }

    if (!userData.phoneNumber) {
        errors.phoneNumber = 'Phone number is required'
    }else if (isNaN(userData.phoneNumber)) {
        errors.phoneNumber = 'Input must be a number'
    }

    if (!userData.location) {
        errors.location = 'Location is required'
    }

    if (!userData.password) {
        errors.password = 'Password is required'
    }else if (userData.password.length<6) {
        errors.password = 'Password must be 6 characters or more'
    }

    return errors
}
export default validateInfo