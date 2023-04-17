
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthenticationContex } from '../../provider/AuthContex';

const Login = () => {
    const navigate=useNavigate()
    const location=useLocation()
    const { setUser, loginUser, googleLogin } = useContext(AuthenticationContex)
    const from= location.state?.from?.pathname || "/"
    const handelLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        loginUser(email,password)
        .then(result=>{
            console.log(result.user);
            navigate(from,{replace:true})
        })
        .catch(error=>{
            console.log(error);
        })
        form.reset()

    }
    const googleLoginHandel=()=>{
        googleLogin()
        .then(result=>{
            console.log(result.user);
            navigate(from, { replace: true })
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div className=' h-[600px] bg-red md:w-[450px] bg-gray-100 mx-auto my-9 rounded-lg'>
            <h1 className='text-4xl text-center font-bold py-5 '>Login Now !</h1>
            <form onSubmit={handelLogin} className=' card-body'>
                <label className='text-xl' htmlFor="Email">Email:
                    <input name='email' className='h-12 w-[100%] rounded-lg outline-none ' type="email" required />
                </label>
                <label className='text-xl' htmlFor="password">Password:
                    <input name='password' className='h-12 w-[100%] rounded-lg px-6 outline-none' type="password" required />
                </label>
                <button className='btn mt-6 text-black font-bold bg-[#ff99008a] text-2xl border-none hover:bg-[#ff9900c4]'> login</button>
                <p className='text-center text-xl'><small>New to Ema-john? <Link to={"/registar"} className='text-[#704300] hover:underline'> Create New Account </Link> </small></p>
            </form>
            <div className='flex gap-5 items-center mx-10'>
                <div className='w-[45%] h-[1px] bg-black'></div>
                <small className='font-bold text-xl'> Or </small>
                <div className='w-[45%] h-[1px] bg-black'></div>
            </div>
            <div className='my-5'>
                <button onClick={googleLoginHandel} className="btn text-black w-[90%]  bg-transparent btn-outline block mx-auto hover:bg-transparent hover:text-black font-bold text-2xl ">
                    <div className='flex justify-center gap-2 items-center'>
                        <img className='w-[28px] h-[28px] rounded' src="https://i.ibb.co/R4zMX8b/vecteezy-colourful-google-logo-on-white-background-10353285.jpg" alt="" border="0" /> <small>Google</small>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Login;