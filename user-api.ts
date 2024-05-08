
export const BASE_URL = "http://localhost:3000"

export interface User {
    id:number;
    age:number;
    name:string;
    email:string;
}

export async function getUsers(){
    const response = await fetch(BASE_URL + "/api/get-users");
    const {users} = await response.json()

    return users.rows;
}

export async function createUser(name:string, email:string, age:number) {
    const response =  await fetch(BASE_URL + "/api/create-users", {
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