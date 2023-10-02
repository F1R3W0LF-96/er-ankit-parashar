import React, { useEffect, useState } from "react";
import Navbar from "../me/Navbar";
import styles from "@/styles/ImageGallery.module.css";
import ImageListing from "./ImageListing";
import GalleryFilters from "./GalleryFilters";
import getConfig from "next/config";
import axios from "axios";

function ImageGallery() {
  const { publicRuntimeConfig } = getConfig();
  const [images, setImages] = useState([]);
  const [filters, setFilters] = useState({
    image_type: "",
    orientation: "",
    category: "",
    colors: "",
    order: "",
  });
  useEffect(() => {
    fetchImages();
  }, [filters]);

  const fetchImages = () => {
    // Define the Pixabay API endpoint URL
    const image_base_url = publicRuntimeConfig.PIXABAY_BASE_URL;
    const image_key = publicRuntimeConfig.PIXABAY_SECRET_KEY;

    const queryParams = [];

    // Check each filter and add it to the query parameters if it has a value
    if (filters.image_type) {
      queryParams.push(`image_type=${filters.image_type}`);
    }

    if (filters.orientation) {
      queryParams.push(`orientation=${filters.orientation}`);
    }

    if (filters.category) {
      queryParams.push(`category=${filters.category}`);
    }

    if (filters.colors) {
      queryParams.push(`colors=${filters.colors}`);
    }

    if (filters.order) {
      queryParams.push(`order=${filters.order}`);
    }

    // Combine all query parameters into a single string
    const queryString = queryParams.join("&");

    // Add the query string to the API URL
    const apiUrl = `${image_base_url}?key=${image_key}${`&${queryString}`}`;
    // Make a GET request using Axios
    axios
      .get(apiUrl)
      .then((response) => {
        // Handle the successful response here
        let responseData = mapPixabayData(response.data.hits);
        setImages(responseData);
        console.log("Response Data:", response.data);
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error:", error);
      });
  };
  function mapPixabayData(pixabayDataArray) {
    return pixabayDataArray.map((pixabayData) => {
      return {
        src: pixabayData.webformatURL,
        width: pixabayData.webformatWidth,
        height: pixabayData.webformatHeight,
        // isSelected: false, // You can set this value as needed
        caption: pixabayData.tags,
        tags: mapTags(pixabayData.tags),
        alt: pixabayData.tags,
      };
    });
  }
  function mapTags(tagsString) {
    const tagsArray = tagsString.split(", ");
    return tagsArray.map((tag) => {
      return {
        value: tag,
        title: tag,
      };
    });
  }
  return (
    <div className="bg-grey-500 mt-20 overflow-y-hidden" id="image-gal">
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-1">
          <div className="h-[100vh] overflow-y-auto">
            <GalleryFilters setFilters={setFilters} filters={filters} />
          </div>
        </div>
        <div className="md:col-span-3">
          <div className="h-[100vh] overflow-y-auto">
            <ImageListing imagesList={images} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;
