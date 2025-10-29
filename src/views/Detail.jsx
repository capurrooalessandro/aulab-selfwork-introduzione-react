import { useEffect, useState } from "react";
import { useParams } from "react-router"

export default function postsDetail() {
    const {id} = useParams();
    const [postsDetail, setPostsDetail] = useState();

    const getPostsDetail = async () => {
        const promise = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const json = await promise.json();
        setPostsDetail(json);
    }

    useEffect(() => {
        getPostsDetail();
    }, [])

    return(
        <>
            <h1 className="main-title">Details page</h1>
            <h2>Id: {id}</h2>
            {
                postsDetail &&
                <>
                    <p>Title: {postsDetail.title}</p>
                    <p>Body: {postsDetail.body}</p>
                </>
            }
        </>
    )
    
}