import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userLoggedIn } from '../../../app/userRegSlice'


const useLogin = (ValidateLogin) => {
    const [loginData, setLoginData] = useState({
        LogEmail:'',
        LogPassword:''
    })

    const userRegData = useSelector(state => state.user.userRegData[0])
    const [logErrors, setLogErrors] = useState({})
    const dispatch = useDispatch()

    const onLogChangeHandler = (e) => {
        const {name, value} = e.target
        setLoginData({
            ...loginData,
            [name]:value
        })
    }

    const LogSubmittedHandler = (e) => {
        e.preventDefault()
        setLogErrors(ValidateLogin(loginData), verifyLogin(loginData))
        dispatch(userLoggedIn())
    }

    const verifyLogin = (loginData) => {
        if (loginData.LogEmail !== userRegData.email) {
            logErrors.LogEmail = 'Email does not match Registered Email'
        }
        if (loginData.LogPassword !== userRegData.password) {
            logErrors.LogPassword = 'password does not match registered password'
        }
    }


    return { onLogChangeHandler, loginData, LogSubmittedHandler, logErrors }
}

export default useLogin
