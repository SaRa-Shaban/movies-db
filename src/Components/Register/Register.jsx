import axios from 'axios';
import joi from 'joi';
import React, { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom';



export default function Register() {
  
  useEffect(() => {
    document.title='register'
   }, [])
   
  // ////////////////////get input data
  const [user, setUser] = useState({
    'first_name': '',
    'last_name': '',
    'age': '',
    'email': '',
    'password': ''
  });

  // console.log(user);


  let getInputValue = (e) => {
    // console.log(e.target);
    // console.log(e.target.value );
    // let myUser = user;  // shallow copy (user and my user variables are pointers ---point at same index or same address) 
    let myUser = { ...user };  //deep copy
    // myUser.first_name = e.target.value;   //get only first name
    myUser[e.target.name] = e.target.value;   //get any name attribute
    setUser(myUser);
    // console.log(myUser);
  };


  // //////////////////validateinput data
  let navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState('');
  const [errorsList, setErrorsList] = useState([]);


  let validateFormData = () => {
    const schema = joi.object({
      first_name: joi.string().alphanum().required().min(2).max(10),
      last_name: joi.string().alphanum().required().min(2).max(10),
      age: joi.number().required().min(20).max(80),
      // tlds  >>> top level domain
      email: joi.string().required().email({ tlds: { allow: ['com', 'net'] } }),
      password: joi.string().required().pattern(new RegExp(/^[a-z][0-9]{3}$/)),
    })

    // console.log(user);
    return schema.validate(user, { abortEarly: false });
  }


  let goToLogin = () => {
    navigate('/login')
  };

  let submitFormData = async (eventInfo) => {
    eventInfo.preventDefault();
    let validationResponse = validateFormData();

    // console.log(validationResponse);
    // console.log(validationResponse.error.details);

    if (validationResponse.error) {
      // there is a problem 
      setErrorsList(validationResponse.error.details);
    }
    else {
      // api is alawys request an response ///old base url https://route-egypt-api.herokuapp.com/
      let { data } = await axios.post('https://sticky-note-fe.vercel.app/signup', user);
      // console.log(data);
      if (data.message === 'success') {
        goToLogin();
      }
      else {
        setErrorMsg(data.message)
      }
    };
  };

  return (
    <>

      <div className="w-75 m-auto">

        <h2 className='text-center my-4'>Registeration Form</h2>

        {errorsList.map((error, index) =>
          <div key={index} className='alert alert-danger p-2'>{error.message}</div>
        )}

        {/* //ternary operator to prevent error at first */}
        {errorMsg ? <div className='alert alert-danger p-2'>{errorMsg}</div> : ''} 

        <form onSubmit={submitFormData}>
          <label htmlFor="f-name" className='mb-2'>First Name</label>
          <input type="text" onChange={getInputValue} className='form-control mb-3' id='f-name' name='first_name' />

          <label htmlFor="l-name" className='mb-2'>Last Name</label>
          <input type="text" onChange={getInputValue} className='form-control mb-3' id='l-name' name='last_name' />

          <label htmlFor="age" className='mb-2'>Age</label>
          <input type="number" onChange={getInputValue} className='form-control mb-3' id='age' name='age' />

          <label htmlFor="email" className='mb-2'>Email</label>
          <input type="email" onChange={getInputValue} className='form-control mb-3' id='email' name='email' />

          <label htmlFor="password" className='mb-2'>Password</label>
          <input type="password" onChange={getInputValue} className='form-control mb-3' id='password' name='password' />

          <button className='btn btn-info my-4 float-end'>Rgister</button>
          <div className="clear-fix"></div>

        </form>
      </div>

    </>
  )
}
