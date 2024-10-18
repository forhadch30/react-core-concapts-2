import { useEffect, useState } from "react";
import Post from "./post";
const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    return (
        <div className="box">
            <h2>Posts: {posts.slice(0,50).length}</h2>
            {
                posts.slice(0,50).map(post =><Post post={post}></Post>)
            }
        </div>
    );
};

export default Posts;