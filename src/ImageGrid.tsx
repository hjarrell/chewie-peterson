import React from 'react';

interface IImageGrid {
    hoverClass: string;
    images: string[];
    title: string;
}

const CHUNK_NUM = 3;

const ImageGrid: React.FunctionComponent<IImageGrid> = ({ hoverClass, images, title }) => {

    const chunked_images = [];
    let index = 0;
    while (index < images.length) {
        chunked_images.push(images.slice(index, CHUNK_NUM + index));
        index += CHUNK_NUM;
    }

    return (
        <>
            <h1 className="display-2 text-center choice-title">{title}</h1>
            <div className="container-fluid">
                {chunked_images.map((image_chunk) => {
                    return (
                        <div className="row justify-content-center image-grid-row">
                            {image_chunk.map((image) => {
                                return (
                                    <div className={"col-lg-2 col-md-4"}>
                                        <div className={`card ${hoverClass}`}>
                                            <img src={image} className="card-img" alt="Just Chewie" />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default ImageGrid;
