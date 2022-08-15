import { useEffect, useState } from "react";

const useLoginUser = () => {
    const [loginUser, setLoginUser] = useState([]);
    useEffect(() => {
        fetch("https://knot-business-solution-server.herokuapp.com/loginuser")
            .then((res) => res.json())
            .then((data) => setLoginUser(data.reverse()));
    }, []);
    return [loginUser, setLoginUser];
};

export default useLoginUser;
