import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();


function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoding] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("http://localhost:8080/user",{ credentials:"include",});
        const data = await res.json();
        if (data.authenticated) {
            console.log("From AuthProvider i have the data that is send form backend" ,data.user.username)
          setUser(data.user);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoding(false);
      }
    };
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user,loading,setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
