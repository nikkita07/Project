 export const checkValidData = (email,password) =>{
  const isEmailValid = /[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/.test(email);
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

if(!isEmailValid) return `Email ID is not valid`;
if(!isPasswordValid) return `Password is not valid`;

return null ;

}
