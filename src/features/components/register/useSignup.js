import { useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router'
import { userRegistration, userRegistered } from '../../../app/userRegSlice'


const useSignup = (validateInfo) => {
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        location: '',
        password: ''
    })

    const [errors, setErrors] = useState({})
    const dispatch = useDispatch()
    const history = useHistory()
    const regSuccess = useSelector(state => state.user.userRegistered)

    const onChangeHandler = (e) => {
        const {name, value} = e.target
        setUserData({
            ...userData,
            [name]:value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        setErrors(validateInfo(userData))
        dispatch(userRegistration(userData))
        dispatch(userRegistered())
        history.push('/Login')
    }

    return {userData, onChangeHandler, onSubmitHandler, errors }
}

export default useSignup
