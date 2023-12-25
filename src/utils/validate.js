export const validation = (email, password,fullName) => {
     
    const isEmailvalid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordvalid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isFullNamevalid = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(fullName)
    
    if (!isEmailvalid) return "Email is not a valid email"
    if (!isPasswordvalid) return "Password is not a valid password"
    if(!isFullNamevalid) return "Full name is not a valid full name"
    return null
    
}