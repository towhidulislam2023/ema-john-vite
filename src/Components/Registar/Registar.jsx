import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthenticationContex } from '../../provider/AuthContex';

const Registar = () => {
    const { createUser, setUser, googleLogin } = useContext(AuthenticationContex)
    const handelRegistar = (e) => {
        e.preventDefault()
        const from = e.target
        const email = from.email.value
        const password = from.password.value
        const confirmPassword = from.ConfirmPassword.value
        console.log(email, password, confirmPassword);
        if (password !== confirmPassword) {
            alert("Give Same Password")
            return
        }
        else if (!/(?=.*?[A-Z])/.test(password)) {
            alert("At least one upper case English letter")
            return
        }
        else if (!/(?=.*?[a-z])/.test(password)) {
            alert("At least one lower case English letter")
            return
        }
        else if (!/(?=.*?[0-9])/.test(password)) {
            alert("At least one digit")
            return
        }
        else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
            alert("At least one special character")
            return
        }
        else if (!/.{8,}/.test(password)) {
            alert("Minimum eight in length")
            return
        }
        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
        from.reset()

    }
    const handelregistarwithgoogle=()=>{
        googleLogin()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error)
            })

    }
    return (
        <div className=' h-[620px] bg-red md:w-[450px] bg-gray-100 mx-auto my-9 rounded-lg'>
            <h1 className='text-4xl text-center font-bold py-5 '>Registar Now !</h1>
            <form onSubmit={handelRegistar} className=' card-body'>
                <label className='text-xl' htmlFor="Email">Email:
                    <input name='email' className=' px-5 h-12 w-[100%] rounded-lg outline-none ' type="email" required />
                </label>
                <label className='text-xl' htmlFor="password">Password:
                    <input name='password' className='h-12 w-[100%] rounded-lg px-6 outline-none' type="password" required />
                </label>
                <label className='text-xl' htmlFor="password">Confirm Password:
                    <input name='ConfirmPassword' className='h-12 w-[100%] rounded-lg px-6 outline-none' type="password" required />
                </label>
                <button className='btn mt-6 text-black font-bold bg-[#ff99008a] text-2xl border-none hover:bg-[#ff9900c4]'> Registar</button>
                <p className='text-center text-xl'><small>Already have an account? <Link to={"/login"} className='text-[#704300] hover:underline'> Login  </Link> </small></p>
            </form>
            <div className='flex gap-5 items-center mx-10'>
                <div className='w-[45%] h-[1px] bg-black'></div>
                <small className='font-bold text-xl'> Or </small>
                <div className='w-[45%] h-[1px] bg-black'></div>
            </div>
            <div className='my-5'>
                <button onClick={handelregistarwithgoogle} className="btn text-black w-[90%]  bg-transparent btn-outline block mx-auto hover:bg-transparent hover:text-black font-bold text-2xl ">
                    <div className='flex justify-center gap-2 items-center'>
                        <img className='w-[28px] h-[28px] rounded' src="https://i.ibb.co/R4zMX8b/vecteezy-colourful-google-logo-on-white-background-10353285.jpg" alt="" border="0" /> <small>Google</small>
                    </div>
                </button>

            </div>

        </div>
    );
};

export default Registar;