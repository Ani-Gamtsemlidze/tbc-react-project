import React, { useState } from 'react'

function ProfileForm({type, id, placeholder }) {
    const [userProfile, setUserProfile] = useState("")

    const handleProfile = (e) => {
      setUserProfile(e.target.value)
    }
    
  return (
    <> 
    <label htmlFor={id}>Name</label>
        <input className='py-2 pl-2 bg-cyan-500 placeholder:text-white text-white outline-none'
        autoComplete='off'
        id={id} type={type} 
        value={userProfile} 
        placeholder={placeholder} 
        onChange={handleProfile}
     />
    </>
  )
}

export default ProfileForm