import React from "react";

const ImageList = (props) => {
    const images = props.images.map(({ id, description, urls }) => <li key={id}><img alt={description} src={urls.regular} /></li>);
    return <ul>{images}</ul>
}

export default ImageList;