import React, { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lighthouse from "./Lighthouse";

function ImageListing({ imagesList }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageClick = (index) => {
    setSelectedImage(imagesList[index]);
  };
  return (
    <>
      <Gallery images={imagesList} onClick={(data) => handleImageClick(data)} />
      {selectedImage && (
        <Lighthouse
          imageSrc={selectedImage.src}
          setSelectedImage={setSelectedImage}
        />
      )}
    </>
  );
}

export default ImageListing;
