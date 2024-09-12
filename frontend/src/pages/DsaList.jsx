import React, { useEffect, useState } from 'react'
import DsaCard from '../components/DsaCard'
import axios from 'axios';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material';

const DsaList = () => {
    const navigate = useNavigate();
    const [questions, setQuestions] = useState([]);

    const fetchQuestionList = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/data`);
            console.log(response.data);
            setQuestions(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const logout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }

    useEffect(() => {
        fetchQuestionList();
    }, []);

    return (
        <div className='w-full md:p-10 p-2 flex justify-center'>
            <div className='md:w-[70%] w-full'>


                {
                    questions.map((question, index) =>
                        <div>
                            <DsaCard item={question} key={index} />
                        </div>
                    )
                }

            </div>

            <Tooltip title="Logout" onClick={logout} className='cursor-pointer'>
                <LogoutIcon className='fixed right-10 bottom-10 text-[#0073e6]' fontSize='large' />
            </Tooltip>
        </div>
    )
}

export default DsaList