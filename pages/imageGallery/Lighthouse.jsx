import React, { useEffect, useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#image-gal"); // Set the root element for the modal

function Lighthouse({ imageSrc, setSelectedImage }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [rotatedImage, setRotatedImage] = useState("");
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (imageSrc) {
      urlToBase64(imageSrc, function (base64Data) {
        console.log("Base64 image:", base64Data);
        // You can use the base64Data as needed, such as displaying it in an <img> element
        setRotatedImage(base64Data);
      });
    }
  }, [imageSrc]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setRotation(0); // Reset rotation when closing the modal
    setSelectedImage(null);
  };

  function urlToBase64(url, callback) {
    const img = new Image();
    img.crossOrigin = "Anonymous"; // Set crossOrigin to handle potential CORS issues
    img.onload = function () {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, img.width, img.height);
      const base64Data = canvas.toDataURL("image/png"); // Convert canvas to base64 data URL
      callback(base64Data);
    };
    img.src = url;
  }

  const rotateImage = () => {
    setRotation((prevRotation) => prevRotation + 90);

    // Rotate the image by converting it to a canvas and back to base64
    const img = new Image();
    img.src = rotatedImage;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.height;
      canvas.height = img.width;
      const ctx = canvas.getContext("2d");
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate((rotation * Math.PI) / 180);
      ctx.drawImage(img, -img.width / 2, -img.height / 2);
      const rotatedBase64 = canvas.toDataURL("image/jpeg");
      setRotatedImage(rotatedBase64);
    };
  };

  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = rotatedImage;
    link.download = "image.jpg";
    link.click();
  };

  return (
    <div>
      {/* <button onClick={openModal}>Open Modal</button> */}
      <Modal
        isOpen={true}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Image Modal"
      >
        <div className="mb-4 h-[450px] w-[500px]">
          {/* <button
            className="bg-red-500 text-white px-4 py-2 mt-4 mb-6 rounded-lg flex flex-col-reverse"
            onClick={closeModal}
          >
            Close Modal
          </button> */}
          <img
            src={rotatedImage}
            alt="Image"
            // style={{ transform: `rotate(${rotation}deg)` }}
            className="max-w-full h-auto"
          />
        </div>
        <div className="flex justify-center space-x-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            onClick={rotateImage}
          >
            Rotate
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
            onClick={downloadImage}
          >
            Download
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default Lighthouse;
