import { Link } from "react-router-dom";
import logo from '../../Logo/Square-LightBG.png'
import {useRef} from "react";
import axiosClient from "../axios-client";
export default function Login() {
    const userNameRef = useRef();
    const passwordRef = useRef();
    const onSubmit = (ev) => {
        ev.preventDefault()
        
        const payload = {
            username: userNameRef.current.value,
            password:passwordRef.current.value,
         
        }
        axiosClient.post('/login',payload)
        .then(({data}) => {
            setUser(data.user)
            setToken(data.token)
        })
        .catch(err =>{
            const response = err.response;
            if(response && response.stuts === 422) {
                console.log(response.data.errors);

            }
        })
    }
    return (
        <>
            <div className="login-signup-form animated fadeInDown">
                <div className="form">
                    <form onSubmit={onSubmit}>
                        <img src={logo} className='MyHRLogo'></img>
                        <input ref={userNameRef} type="text" placeholder="Username" />
                        <input ref={passwordRef} type="password" placeholder="Password" />
                        <label>
                            <input type="checkbox" name="checkbox" value="value" />
                            Remember me
                        </label>
                        <p>
                         
                            <Link to="/forgotpassword">Forgot password?</Link>
                        </p>

                        <button className="btn btn-block">Login</button>
                    </form>

                </div>

            </div>

        </>
    )
}