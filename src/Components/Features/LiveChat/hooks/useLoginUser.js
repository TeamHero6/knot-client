import { useEffect, useState } from 'react';

const useLoginUser = () => {
    const [loginUser, setLoginUser] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/loginuser')
        .then(res => res.json())
        .then (data=>setLoginUser(data))
    },[])
    return [loginUser, setLoginUser];
};

export default useLoginUser;