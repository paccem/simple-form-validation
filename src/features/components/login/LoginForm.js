import React from 'react'
import useLogin from './useLogin'
import ValidateLogin from './ValidateLogin'

const LoginForm = () => {
    const { onLogChangeHandler, loginData, LogSubmittedHandler, logErrors } = useLogin(ValidateLogin)


    return (
        <div>
             <div className='container bg-light my-sm-5 rounded p-md-5'> 
            <fieldset className='col-md-8 mx-auto'>
                <legend className='mb-5'><h3 className='text-info'>Login Here</h3></legend>
                <form onSubmit={LogSubmittedHandler}>
                    <div className="form-group mb-4">
                        <input type="email" 
                            placeholder="Email" 
                            className="form-control"
                            name='LogEmail'
                            value= {loginData.LogEmail}
                            onChange= {onLogChangeHandler}
                        />
                        {logErrors.LogEmail && <small className="text-danger">{logErrors.LogEmail}</small>}
                    </div>

                    <div className="form-group mb-4">
                        <input type="password" 
                            placeholder="Password" 
                            className="form-control"
                            name='LogPassword'
                            value={loginData.LogPassword}
                            onChange={onLogChangeHandler}
                            
                        />
                        {logErrors.LogPassword && <small className="text-danger">{logErrors.LogPassword}</small>}
                    </div>

                    <button className="btn btn-info fs-5 mb-4 text-white" type='submit'>Login <i className="fas fa-sign-in-alt"></i></button>
                </form>
            </fieldset>
        </div>
        </div>
    )
}

export default LoginForm
