const Photo = ({ photos }) => {
    const { id, title, url, thumbnailUrl } = photos
    return (
        <div className="box">
            <h2>Id: {id}</h2>
            <h2>Title: {title}</h2>
            <h2>Url: {url}</h2>
            <h2>ThumbnailUrl: {thumbnailUrl}</h2>
        </div>
    );
};

export default Photo;