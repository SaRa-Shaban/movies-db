import React, { useEffect } from 'react'



export default function Profile({ userData }) {

    
  useEffect(() => {
    document.title='profile'
   }, [])
   

    console.log(userData);

    return (
        <>

            <div className='d-flex bg-info w-75 m-auto flex-column align-items-center my-5 py-5 rounded-5  '>
                <h1 className='bg-primary p-2 rounded-4'>welcome {userData?.first_name + ' ' + userData?.last_name}</h1>
                <h2 className='py-2'><span className='text-muted'>your email is :</span> {userData?.email}</h2>
                <h3><span className='text-muted'>age is :</span> {userData?.age}</h3>
                {/* ternary operatoe ask if user data exist show data */}
            </div>

        </>
    )
}
