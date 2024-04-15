import ProfileForm from "@/components/profileForm/ProfileForm";

export default function Profile() {
    const inputData = [
        {type:"text", id:"username", placeholder:"Username"},
        {type:"text", id:"surname", placeholder:"Surname"},
        {type:"text", id:"email", placeholder:"Email"},
        {type:"password", id:"password", placeholder:"New Password"},
        {type:"password", id:"confirmPassword", placeholder:"Confirm New Password"},
      ]
  
        return (
          <section className='flex flex-1 bg-gray-200 justify-center p-4'>
            <form className='flex flex-col bg-cyan-600 w-96 p-4 gap-2' >
              {inputData.map((input) => (
               <ProfileForm  key={input.id} type={input.type} id={input.id} placeholder={input.placeholder} />
              ))}
  
            <button className=' hover:bg-slate-300 bg-slate-200 transition px-4 py-2  mx-auto mt-8' type='submit'>Save Changes</button>
            </form>
          </section>
        );
}
