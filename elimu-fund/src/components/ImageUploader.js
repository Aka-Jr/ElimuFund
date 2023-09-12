import React, { useState } from "react";
import { MdCloudUpload, MdDelete } from 'react-icons/md';
import { AiFillFileImage } from 'react-icons/ai';

const ImageUploader = ({ onImageChange }) => {
  const [image, setImage] = useState("");
  const [fileName, setFileName] = useState("No selected file");

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      // Validate image type
      if (!file.type.startsWith("image/")) {
        alert("Please select an image file.");
        return;
      }

      // Validate image size (adjust the limit as needed)
      const maxSize = 5 * 1024 * 1024; // 5MB
      if (file.size > maxSize) {
        alert("Image size exceeds the maximum allowed (5MB).");
        return;
      }

      // Set the selected image and file name
      setFileName(file.name);
      setImage(URL.createObjectURL(file));

      // Pass the selected image data to the parent component
      onImageChange(file);
    }
  };

  return (
    <div>
      <center>
        <div
          id="image-uploader-div"
          onClick={() => document.querySelector(".profile").click()}
          htmlFor="photo"
        >
          <input
            type="file"
            className="profile"
            accept="image/*"
            hidden
            required
            onChange={handleImageChange}
          />

          {image ? (
            <img src={image} width={180} height={120} alt={fileName} />
          ) : (
            <>
              <MdCloudUpload color="#43d02a" size={60} />
              <p>Browse files to upload</p>
            </>
          )}
        </div>
      </center>

      <section className="uploaded-row">
        <AiFillFileImage color="#1475cf" />
        <span className="uploaded-content">
          {fileName}
          <MdDelete
            onClick={() => {
              setFileName("No selected File");
              setImage(null);
              // Clear the image data in the parent component
              onImageChange(null);
            }}
          />
        </span>
      </section>
    </div>
  );
};

export default ImageUploader;
