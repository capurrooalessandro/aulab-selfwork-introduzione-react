import { useEffect, useState } from "react"

export default function LoadingData() {
    const [userData, setUserData] = useState();
    const [isClicked, setIsClicked] = useState(false);

    const getUserData = async () => {
        const promise = await fetch("https://jsonplaceholder.typicode.com/users");
        const json = await promise.json();
        setUserData(json);
    }
    
    const handleClick = () => {
        setIsClicked(true);
    }

    useEffect(() => {
        if (isClicked) {
            getUserData();
        }
    }, [isClicked]);

    return(
        <>
            {isClicked && userData && userData.map((user) => {
                return (
                    <ul key={user.id}>
                        <li>Name: {user.name}</li>
                        <li>Email: {user.email}</li> 
                    </ul>
                )
            })}
            <button type="button" className="btn btn-submit" onClick={handleClick}>Cliccami!</button>
        </>
    )
}