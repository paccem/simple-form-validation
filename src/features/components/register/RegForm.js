import React from 'react'
import useSignup from './useSignup'
import validateInfo from './validateInfo'

const RegForm = () => {
    const {onChangeHandler, userData, onSubmitHandler, errors} = useSignup(validateInfo)

    return (
        <div>
            <div className='container bg-light my-sm-5 rounded p-md-5'> 
            <fieldset className='col-md-8 mx-auto'>
                <legend className='mb-5'><i className='fas fa-user-plus fa-2x text-info'></i></legend>
                <form onSubmit={onSubmitHandler}>
                    <div className="row">
                        <div className="col-sm-6 form-group mb-4">
                            <input type="text" 
                                placeholder="First Name" 
                                className="form-control"
                                name='firstName'
                                value={userData.firstName}
                                onChange={onChangeHandler}
                            />
                            {errors.firstName && <small className="text-danger">{errors.firstName}</small>}
                        </div>

                        <div className="col-sm-6 form-group mb-4">
                            <input type="text" 
                                placeholder="Last Name" 
                                className="form-control"
                                name='lastName'
                                value={userData.lastName}
                                onChange={onChangeHandler}
                            />
                            {errors.lastName && <small className="text-danger">{errors.lastName}</small>}
                        </div>
                    </div>

                    <div className="form-group mb-4">
                        <input type="email" 
                            placeholder="Email" 
                            className="form-control"
                            name='email'
                            value={userData.email}
                            onChange={onChangeHandler}
                        />
                        {errors.email && <small className="text-danger">{errors.email}</small>}
                    </div>
                    
                    <div className="form-group mb-4">
                        <input type="number" 
                            placeholder="phone Number" 
                            className="form-control"
                            name='phoneNumber'
                            value={userData.phoneNumber}
                            onChange={onChangeHandler}
                        />
                        {errors.phoneNumber && <small className="text-danger">{errors.phoneNumber}</small>}
                    </div>

                    <div className="form-group mb-4">
                        <input type="text" 
                            placeholder="Location" 
                            className="form-control"
                            name='location'
                            value={userData.location}
                            onChange={onChangeHandler}
                        />
                        {errors.location && <small className="text-danger">{errors.location}</small>}
                    </div>

                    <div className="form-group mb-4">
                        <input type="password" 
                            placeholder="Password" 
                            className="form-control"
                            name='password'
                            value={userData.password}
                            onChange={onChangeHandler}
                        />
                        {errors.password && <small className="text-danger">{errors.password}</small>}
                    </div>

                    <button className="btn btn-info fs-5 mb-4" type='submit'>Create Account</button>
                </form>
            </fieldset>
        </div>
        </div>
    )
}

export default RegForm
