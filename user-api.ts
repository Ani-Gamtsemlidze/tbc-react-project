"use server"
export interface User {
  id:number;
  age:number;
  name:string;
  email:string;
}

// const BASE_URL = "http://localhost:3000"

export async function getUsers(){
  
  // console.log(BASE_URL)
  console.log("url", process.env.BASE_URL)
    const response = await fetch(`${process.env.BASE_URL}/api/get-users` );
    const {users} = await response.json()

    return users?.rows;
}

export async function createUser(name:string, email:string, age:number) {

    const response =  await fetch(`${process.env.BASE_URL}/api/create-users`, {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          age
        }),
      }); 

      const data = await response.json()

      return data;
}

export async function deleteUser (id:number) {

    const response =  await fetch(`${process.env.BASE_URL}/api/delete-users/${id}`, {
        method: "DELETE",
      }); 

      return response.json()
}