import { Link } from "react-router-dom";
import {useRef} from "react";
import axiosClient from "../axios-client";
import logo from '../../Logo/Square-LightBG.png';
import { useStateContext } from "../contexts/ContextProvider";
export default function ForgotPassword() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();
 
    const{setUser,setToken} = useStateContext();

    const onSubmit = (ev) => {
        ev.preventDefault()
        const payload = {
            email: emailRef.current.value,
            password:passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value
        }
        axiosClient.post('/forgotpassword',payload)
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
                        <input ref={emailRef} type="text" placeholder="Email Address" />
                        <input ref={passwordRef} type="password" placeholder="New Password" />
                        <input ref={passwordConfirmationRef} type="password" placeholder="Confirm Password" />
                        <button className="btn btn-block"><Link to="/login">Confirm</Link></button>
                    </form>

                </div>

            </div>

        </>
    )
}