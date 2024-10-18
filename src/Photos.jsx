import { useEffect } from "react";
import { useState } from "react";
import Photo from "./Photo";
const Photos = () => {
    const [photos, setPhotos] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos`)
            .then(res => res.json())
            .then(data => setPhotos(data))
    }, [])
    return (
        <div className="box">
            <h2>Photos: {photos.slice(0, 10).length}</h2>
            {
                photos.slice(0, 10).map(photos => <Photo photos={photos}></Photo>)
            }
        </div>
    );
};

export default Photos;