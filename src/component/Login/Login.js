import React from 'react';
import { Button } from 'react-bootstrap';
import useFirebase from '../Hooks/useFirebase';


const Login = () => {
    const { signInUsingGoogle } = useFirebase();
    return (
        <div className="container">
            <h1 className="login text-center text-primary">Please login here</h1>
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <p>Or</p>
            <Button className="my-4" onClick={signInUsingGoogle}>Google Sign In</Button> <br />

        </div>
    );
};

export default Login;