import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  
  useEffect(() => {
    const name = user?.user?.displayName;
    const email = user?.user?.email;
    const photo = user?.user?.photoURL;
    const currentUser = { email: email, name: name, photo: photo};
    if (email) {
      fetch(`http://localhost:5000/user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(currentUser)
      })
        .then((res) => res.json())
        .then((data) => { 
          const accessToken = data.token;
          localStorage.setItem('accessToken', accessToken);
          setToken(accessToken);
        });
    }
  }, [token, user ]);
  return [token];
};

export default useToken;
