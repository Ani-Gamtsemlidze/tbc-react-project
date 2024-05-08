
// export const BASE_URL = "http://localhost:3000"
const baseUrl = process.env.BASE_URL || 'http://localhost:3000';

export interface User {
    id:number;
    age:number;
    name:string;
    email:string;
}

export async function getUsers(){
    const response = await fetch(`${baseUrl}/api/get-users`);
    const {users} = await response.json()

    return users.rows;
}

export async function createUser(name:string, email:string, age:number) {
    const response =  await fetch(`${baseUrl}/api/create-users`, {
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
    const response =  await fetch(`${baseUrl}/api/delete-users/${id}`, {
        method: "DELETE",
      }); 

      return response.json()
}