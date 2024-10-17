const Post = ({post}) => {
    console.log(post);
    const {title, userId, id, body} = post;
    return (
        <div className="box">
            <h2>Title: {title}</h2>
            <p><small>userId: {userId}</small></p>
            <p><small>postId: {id}</small></p>
            <p>{body}</p>
        </div>
    );
};

export default Post;