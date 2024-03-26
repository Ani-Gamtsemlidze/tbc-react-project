import React from 'react'

function Profile() {
  const userProfile = 

    {
      name: "John",
      surname: "Doe",
      email: "johndoe@example.com"
    }

    return (
      <section className='flex flex-1 bg-gray-100 justify-center p-4'>
        <div className='bg-gray-200 p-4 '>

        <div >Name
          <p className='text-base ml-4'>{userProfile.name}</p> 
        </div>
        <div>Surname
        <p className='text-base ml-4'>{userProfile.surname}</p>
        </div>
        <div>Email
          <p className='text-base ml-4'>{userProfile.email}</p>
        </div>
        </div>
        <div className='flex flex-col bg-cyan-600 w-96 p-4 gap-2' >
          <label htmlFor='password'>New Password</label>
          <input className='py-2 pl-2 bg-cyan-500 text-white outline-none' id='password' type='password' placeholder='New Password' />
          <label htmlFor='confirmPassword'>Confirm New Password</label>
          <input className='py-2 pl-2 bg-cyan-500 text-white outline-none'  id='confirmPassword' type='password' placeholder='Confirm New Password'  />
          <button className=' hover:bg-slate-300 bg-slate-200 transition px-4 py-2 w-38 mx-auto mt-6 rounded' type='submit'>Save Changes</button>
        </div>
      </section>
    );
}

export default Profile