import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isPassVsbl, setIsPassVsbl] = useState(false);
    const [isConfPassVsbl, setIsConfPassVsbl] = useState(false);

    const signUp = async () => {
        try {
            const data = {
                "email": email,
                "password": password
              }
            const response = await axios.post('http://localhost:5000/api/users/signup',data);
            if (response.status == 201){
                localStorage.setItem('token', response.data.token);
                navigate('/');
            }
        } catch (error) {
            console.log(error);
        }
        
    }

    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(token) navigate('/');
    },[]);

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className='w-[300px] md:w-[40%] lg:w-[30%]'>
                <h2 className="text-5xl text-white font-bold">Welcome to EduHub</h2>
                <h6 className="text-lg mt-3 text-[#efc88d]">Create an account</h6>
                <div className=''>
                    <form className="my-10">
                        <div>
                            <label htmlFor="email" className="text-[#839baf]">E-mail</label>
                            <div className='relative flex items-center'>
                                <input 
                                    id="email" 
                                    type="text" 
                                    placeholder='Email' 
                                    className="w-full bg-transparent outline-none border-b border-[#30373e] py-3 mt-1 text-white" 
                                    value={email}
                                    onChange={(event) =>setEmail(event.target.value)}    
                                />
                                <AlternateEmailIcon className='text-white absolute right-2' fontSize='medium'/>
                            </div>
                        </div>

                        <div className="mt-8">
                            <label htmlFor="password" className="text-[#839baf]">Password</label>
                            <div className='relative flex items-center'>
                                <input 
                                    id="password" 
                                    type={isPassVsbl ? "text" : "password"} 
                                    placeholder='password' 
                                    className="w-full bg-transparent outline-none border-b border-[#30373e] py-3 mt-1 text-white" 
                                    value={password}
                                    onChange={(event) =>setPassword(event.target.value)}
                                />
                                {
                                    isPassVsbl ? 
                                        <VisibilityOffIcon className='text-white absolute right-2' onClick={() => setIsPassVsbl(false)}/> 
                                        : <RemoveRedEyeIcon className='text-white absolute right-2' onClick={() => setIsPassVsbl(true)}/>
                                }
                            </div>
                        </div>

                        <div className="mt-8">
                            <label htmlFor="password" className="text-[#839baf]">Retype Password</label>
                            <div className='relative flex items-center'>
                                <input 
                                    id="password" 
                                    type={isConfPassVsbl ? "text" : "password"} 
                                    placeholder='password' 
                                    className="w-full bg-transparent outline-none border-b border-[#30373e] py-3 mt-1 text-white" 
                                    value={confirmPassword}
                                    onChange={(event) =>setConfirmPassword(event.target.value)}
                                />
                                {
                                    isConfPassVsbl ? 
                                        <VisibilityOffIcon className='text-white absolute right-2' onClick={() => setIsConfPassVsbl(false)}/> 
                                        : <RemoveRedEyeIcon className='text-white absolute right-2' onClick={() => setIsConfPassVsbl(true)}/>
                                }
                            </div>
                        </div>
                    </form>

                    <button 
                        className="w-full py-3 text-[#1a1b26] font-bold text-xl bg-[#efc88d] hover:bg-[#ffce85]"
                        onClick={signUp}
                    >
                        Create an account
                    </button>
                </div>
                <p className='text-[#839baf] mt-20'>Already have an account ? <span className='text-[#efc88d] cursor-pointer' onClick={() => navigate('/login')} >Login</span></p>

            </div>
        </div>
    )
}

export default Signup;