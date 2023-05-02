import axios from 'axios';
import joi from 'joi';
import React, { useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login({saveUserData}) {

    
  useEffect(() => {
    document.title='login'
   }, [])
   

    // console.log(props);

    const [user, setUser] = useState({
        'email': '',
        'password': ''
    });

    const [errorMsg, setErrorMsg] = useState('');
    const [errorsList, setErrorsList] = useState([]);
    let navigate = useNavigate();

    let goToHome = () => {
        navigate('/')
        
    };


    let submitFormData = async (eventInfo) => {
        eventInfo.preventDefault();
        let validationResponse = validateFormData();

        // console.log(validationResponse);
        // console.log(validationResponse.error.details);

        if (validationResponse.error) {
            setErrorsList(validationResponse.error.details);
        }
        else {
            let { data } = await axios.post('https://sticky-note-fe.vercel.app/signin', user);
            if (data.message === 'success') {
                localStorage.setItem('token' , data.token);
                // call saveUserData in login
                saveUserData();
                goToHome();
            }
            else {
                setErrorMsg(data.message)
            }
        };
    };

    let validateFormData = () => {
        const schema = joi.object({
            email: joi.string().required().email({ tlds: { allow: ['com', 'net'] } }),
            password: joi.string().required().pattern(new RegExp(/^[a-z][0-9]{3}$/)),
        })
        return schema.validate(user, { abortEarly: false });
    }


    let getInputValue = (e) => {
        let myUser = { ...user };
        myUser[e.target.name] = e.target.value;
        setUser(myUser);
    };

    return (
        <>

            <div className="w-75 m-auto">

                <h2 className='text-center my-4'>Login Form</h2>

                {errorsList.map((error, index) =>
                    <div key={index} className='alert alert-danger p-2'>{error.message}</div>
                )}

                {errorMsg ? <div className='alert alert-danger p-2'>{errorMsg}</div> : ''}

                <form onSubmit={submitFormData}>

                    <label htmlFor="email" className='mb-2'>Email</label>
                    <input type="email" onChange={getInputValue} className='form-control mb-3' id='email' name='email' />

                    <label htmlFor="password" className='mb-2'>Password</label>
                    <input type="password" onChange={getInputValue} className='form-control mb-3' id='password' name='password' />

                    <button className='btn btn-info my-4 float-end'>Login</button>
                    <div className="clear-fix"></div>

                </form>
            </div>
        </>
    )
}
