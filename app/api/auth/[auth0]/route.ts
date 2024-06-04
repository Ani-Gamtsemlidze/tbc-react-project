import { handleAuth, handleLogin, handleLogout } from '@auth0/nextjs-auth0';

  
export const GET = handleAuth({
    login: handleLogin({
      returnTo: "/api/handle-login",
      authorizationParams: {
        prompt: "login" 
      }
    }),
    logout: handleLogout({
      returnTo: "/" 
    })
  });