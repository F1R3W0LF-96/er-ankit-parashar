import React from "react";

function GalleryFilters({ setFilters, filters }) {
  return (
    <>
      <section className="filters p-4 bg-gray-100 min-vh-100 h-100">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>
        <div className="grid grid-cols-2 gap-4">
          {/* Image Type */}
          <div className="filter">
            <label className="block mb-2">Image Type:</label>
            <div className="space-x-2">
              <button
                className="rounded-lg bg-blue-500 text-white font-semibold px-4 py-2  mb-2 hover:shadow-md hover:bg-blue-600 transition duration-300 mx-2"
                onClick={() => {
                  setFilters({ ...filters, image_type: "all" });
                }}
              >
                All
              </button>
              <button
                className="rounded-lg bg-green-500 text-white font-semibold px-4 py-2  mb-2 hover:shadow-md hover:bg-green-600 transition duration-300 mx-2"
                onClick={() => {
                  setFilters({ ...filters, image_type: "photo" });
                }}
              >
                Photo
              </button>
              <button
                className="rounded-lg bg-purple-500 text-white font-semibold px-4 py-2  mb-2 hover:shadow-md hover:bg-purple-600 transition duration-300 mx-2"
                onClick={() => {
                  setFilters({ ...filters, image_type: "illustration" });
                }}
              >
                Illustration
              </button>
              <button
                className="rounded-lg bg-yellow-500 text-white font-semibold px-4 py-2  mb-2 hover:shadow-md hover:bg-yellow-600 transition duration-300 mx-2"
                onClick={() => {
                  setFilters({ ...filters, image_type: "vector" });
                }}
              >
                Vector
              </button>
            </div>
          </div>

          {/* Orientation */}
          <div className="filter">
            <label className="block mb-2">Orientation:</label>
            <div className="space-x-2">
              <button
                className="rounded-lg bg-blue-500 text-white font-semibold px-4 py-2  mb-2 hover:shadow-md hover:bg-blue-600 transition duration-300 mx-2"
                onClick={() => {
                  setFilters({ ...filters, orientation: "all", category: "" });
                }}
              >
                All
              </button>
              <button
                className="rounded-lg bg-green-500 text-white font-semibold px-4 py-2  mb-2 hover:shadow-md hover:bg-green-600 transition duration-300 mx-2"
                onClick={() => {
                  setFilters({
                    ...filters,
                    orientation: "horizontal",
                    category: "",
                  });
                }}
              >
                Horizontal
              </button>
              <button
                className="rounded-lg bg-purple-500 text-white font-semibold px-4 py-2  mb-2 hover:shadow-md hover:bg-purple-600 transition duration-300 mx-2"
                onClick={() => {
                  setFilters({
                    ...filters,
                    orientation: "vertical",
                    category: "",
                  });
                }}
              >
                Vertical
              </button>
            </div>
          </div>

          {/* Add more sections with buttons similarly */}
          <div className="filter">
            <label className="block mb-2">Category:</label>
            <div className="space-x-2">
              <button
                className="rounded-lg bg-blue-500 text-white font-semibold px-4 py-2  mb-2 hover:shadow-md hover:bg-blue-600 transition duration-300 mx-2"
                onClick={() => {
                  setFilters({ ...filters, image_type: "", category: "all" });
                }}
              >
                All
              </button>
              <button
                className="rounded-lg bg-green-500 text-white font-semibold px-4 py-2  mb-2 hover:shadow-md hover:bg-green-600 transition duration-300 mx-2"
                onClick={() => {
                  setFilters({
                    ...filters,
                    image_type: "",
                    category: "Backgrounds",
                  });
                }}
              >
                Backgrounds
              </button>
              <button
                className="rounded-lg bg-purple-500 text-white font-semibold px-4 py-2  mb-2 hover:shadow-md hover:bg-purple-600 transition duration-300 mx-2"
                onClick={() => {
                  setFilters({
                    ...filters,
                    image_type: "",
                    category: "Fashion",
                  });
                }}
              >
                Fashion
              </button>
              <button
                className="rounded-lg bg-green-500 text-white font-semibold px-4 py-2  mb-2 hover:shadow-md hover:bg-green-600 transition duration-300 mx-2"
                onClick={() => {
                  setFilters({
                    ...filters,
                    image_type: "",
                    category: "nature",
                  });
                }}
              >
                nature
              </button>
              <button
                className="rounded-lg bg-purple-500 text-white font-semibold px-4 py-2  mb-2 hover:shadow-md hover:bg-purple-600 transition duration-300 mx-2"
                onClick={() => {
                  setFilters({
                    ...filters,
                    image_type: "",
                    category: "science",
                  });
                }}
              >
                science
              </button>
              <button
                className="rounded-lg bg-green-500 text-white font-semibold px-4 py-2  mb-2 hover:shadow-md hover:bg-green-600 transition duration-300 mx-2"
                onClick={() => {
                  setFilters({
                    ...filters,
                    image_type: "",
                    category: "education",
                  });
                }}
              >
                education
              </button>
              <button
                className="rounded-lg bg-purple-500 text-white font-semibold px-4 py-2  mb-2 hover:shadow-md hover:bg-purple-600 transition duration-300 mx-2"
                onClick={() => {
                  setFilters({
                    ...filters,
                    image_type: "",
                    category: "feelings",
                  });
                }}
              >
                feelings
              </button>
              <button
                className="rounded-lg bg-green-500 text-white font-semibold px-4 py-2  mb-2 hover:shadow-md hover:bg-green-600 transition duration-300 mx-2"
                onClick={() => {
                  setFilters({
                    ...filters,
                    image_type: "",
                    category: "health",
                  });
                }}
              >
                health
              </button>
              <button
                className="rounded-lg bg-purple-500 text-white font-semibold px-4 py-2  mb-2 hover:shadow-md hover:bg-purple-600 transition duration-300 mx-2"
                onClick={() => {
                  setFilters({
                    ...filters,
                    image_type: "",
                    category: "people",
                  });
                }}
              >
                people
              </button>
              <button
                className="rounded-lg bg-green-500 text-white font-semibold px-4 py-2  mb-2 hover:shadow-md hover:bg-green-600 transition duration-300 mx-2"
                onClick={() => {
                  setFilters({
                    ...filters,
                    image_type: "",
                    category: "religion",
                  });
                }}
              >
                religion
              </button>
              <button
                className="rounded-lg bg-purple-500 text-white font-semibold px-4 py-2  mb-2 hover:shadow-md hover:bg-purple-600 transition duration-300 mx-2"
                onClick={() => {
                  setFilters({
                    ...filters,
                    image_type: "",
                    category: "places",
                  });
                }}
              >
                places
              </button>
              <button
                className="rounded-lg bg-green-500 text-white font-semibold px-4 py-2  mb-2 hover:shadow-md hover:bg-green-600 transition duration-300 mx-2"
                onClick={() => {
                  setFilters({
                    ...filters,
                    image_type: "",
                    category: "animals",
                  });
                }}
              >
                animals
              </button>
              <button
                className="rounded-lg bg-purple-500 text-white font-semibold px-4 py-2  mb-2 hover:shadow-md hover:bg-purple-600 transition duration-300 mx-2"
                onClick={() => {
                  setFilters({
                    ...filters,
                    image_type: "",
                    category: "industry",
                  });
                }}
              >
                industry
              </button>
              <button
                className="rounded-lg bg-green-500 text-white font-semibold px-4 py-2  mb-2 hover:shadow-md hover:bg-green-600 transition duration-300 mx-2"
                onClick={() => {
                  setFilters({
                    ...filters,
                    image_type: "",
                    category: "computer",
                  });
                }}
              >
                computer
              </button>
              <button
                className="rounded-lg bg-purple-500 text-white font-semibold px-4 py-2  mb-2 hover:shadow-md hover:bg-purple-600 transition duration-300 mx-2"
                onClick={() => {
                  setFilters({ ...filters, image_type: "", category: "food" });
                }}
              >
                food
              </button>
              <button
                className="rounded-lg bg-green-500 text-white font-semibold px-4 py-2  mb-2 hover:shadow-md hover:bg-green-600 transition duration-300 mx-2"
                onClick={() => {
                  setFilters({
                    ...filters,
                    image_type: "",
                    category: "sports",
                  });
                }}
              >
                sports
              </button>
              <button
                className="rounded-lg bg-purple-500 text-white font-semibold px-4 py-2  mb-2 hover:shadow-md hover:bg-purple-600 transition duration-300 mx-2"
                onClick={() => {
                  setFilters({
                    ...filters,
                    image_type: "",
                    category: "transportation",
                  });
                }}
              >
                transportation
              </button>
              <button
                className="rounded-lg bg-green-500 text-white font-semibold px-4 py-2  mb-2 hover:shadow-md hover:bg-green-600 transition duration-300 mx-2"
                onClick={() => {
                  setFilters({
                    ...filters,
                    image_type: "",
                    category: "travel",
                  });
                }}
              >
                travel
              </button>
              <button
                className="rounded-lg bg-purple-500 text-white font-semibold px-4 py-2  mb-2 hover:shadow-md hover:bg-purple-600 transition duration-300 mx-2"
                onClick={() => {
                  setFilters({
                    ...filters,
                    image_type: "",
                    category: "buildings",
                  });
                }}
              >
                buildings
              </button>
              <button
                className="rounded-lg bg-green-500 text-white font-semibold px-4 py-2  mb-2 hover:shadow-md hover:bg-green-600 transition duration-300 mx-2"
                onClick={() => {
                  setFilters({
                    ...filters,
                    image_type: "",
                    category: "business",
                  });
                }}
              >
                business
              </button>
              <button
                className="rounded-lg bg-purple-500 text-white font-semibold px-4 py-2  mb-2 hover:shadow-md hover:bg-purple-600 transition duration-300 mx-2"
                onClick={() => {
                  setFilters({ ...filters, image_type: "", category: "music" });
                }}
              >
                music
              </button>
              {/* Add more buttons for categories */}
            </div>
          </div>

          {/* Color */}
          <div className="filter">
            <label className="block mb-2">Color:</label>
            <div className="space-x-2">
              <button
                className="rounded-lg bg-blue-500 text-white font-semibold px-4 py-2  mb-2 hover:shadow-md hover:bg-blue-600 transition duration-300 mx-2"
                onClick={() => {
                  setFilters({
                    ...filters,
                    colors: "all",
                  });
                }}
              >
                All
              </button>
              <button
                className="rounded-lg bg-blue-500 text-white font-semibold px-4 py-2 mb-2 hover:shadow-md hover:bg-blue-600 transition duration-300 mx-2"
                onClick={() => {
                  setFilters({
                    ...filters,
                    colors: "bue",
                  });
                }}
              >
                Blue
              </button>
              <button
                className="rounded-lg bg-green-500 text-white font-semibold px-4 py-2 mb-2 hover:shadow-md hover:bg-green-600 transition duration-300 mx-2"
                onClick={() => {
                  setFilters({
                    ...filters,
                    colors: "green",
                  });
                }}
              >
                Green
              </button>
              <button
                className="rounded-lg bg-purple-500 text-white font-semibold px-4 py-2 mb-2 hover:shadow-md hover:bg-purple-600 transition duration-300 mx-2"
                onClick={() => {
                  setFilters({
                    ...filters,
                    colors: "purple",
                  });
                }}
              >
                Purple
              </button>
              <button
                className="rounded-lg bg-yellow-500 text-white font-semibold px-4 py-2 mb-2 hover:shadow-md hover:bg-yellow-600 transition duration-300 mx-2"
                onClick={() => {
                  setFilters({
                    ...filters,
                    colors: "tellow",
                  });
                }}
              >
                Yellow
              </button>
              <button
                className="rounded-lg bg-red-500 text-white font-semibold px-4 py-2 mb-2 hover:shadow-md hover:bg-red-600 transition duration-300 mx-2"
                onClick={() => {
                  setFilters({
                    ...filters,
                    colors: "red",
                  });
                }}
              >
                Red
              </button>
              <button
                className="rounded-lg bg-orange-500 text-white font-semibold px-4 py-2 mb-2 hover:shadow-md hover:bg-orange-600 transition duration-300 mx-2"
                onClick={() => {
                  setFilters({
                    ...filters,
                    colors: "orange",
                  });
                }}
              >
                Orange
              </button>
              <button
                className="rounded-lg bg-blue-300 text-white font-semibold px-4 py-2 mb-2 hover:shadow-md hover:bg-blue-400 transition duration-300 mx-2"
                onClick={() => {
                  setFilters({
                    ...filters,
                    colors: "turquoise",
                  });
                }}
              >
                Turquoise
              </button>
              <button
                className="rounded-lg bg-lime-500 text-white font-semibold px-4 py-2 mb-2 hover:shadow-md hover:bg-lime-600 transition duration-300 mx-2"
                onClick={() => {
                  setFilters({
                    ...filters,
                    colors: "lilac",
                  });
                }}
              >
                Lilac
              </button>
              <button
                className="rounded-lg bg-pink-500 text-white font-semibold px-4 py-2 mb-2 hover:shadow-md hover:bg-pink-600 transition duration-300 mx-2"
                onClick={() => {
                  setFilters({
                    ...filters,
                    colors: "pink",
                  });
                }}
              >
                Pink
              </button>
              <button
                className="rounded-lg bg-white text-black font-semibold px-4 py-2 mb-2 hover:shadow-md hover:bg-gray-200 transition duration-300 mx-2"
                onClick={() => {
                  setFilters({
                    ...filters,
                    colors: "white",
                  });
                }}
              >
                White
              </button>
              <button
                className="rounded-lg bg-gray-500 text-white font-semibold px-4 py-2 mb-2 hover:shadow-md hover:bg-gray-600 transition duration-300 mx-2"
                onClick={() => {
                  setFilters({
                    ...filters,
                    colors: "gray",
                  });
                }}
              >
                Gray
              </button>
              <button
                className="rounded-lg bg-black text-white font-semibold px-4 py-2 mb-2 hover:shadow-md hover:bg-black transition duration-300 mx-2"
                onClick={() => {
                  setFilters({
                    ...filters,
                    colors: "black",
                  });
                }}
              >
                Black
              </button>
              <button
                className="rounded-lg bg-red-950 text-white font-semibold px-4 py-2 mb-2 hover:shadow-md hover:bg-red-900 transition duration-300 mx-2"
                onClick={() => {
                  setFilters({
                    ...filters,
                    colors: "brown",
                  });
                }}
              >
                Brown
              </button>
              {/* Add more buttons for colors */}
            </div>
          </div>

          {/* Order */}
          <div className="filter">
            <label className="block mb-2">Order:</label>
            <div className="space-x-2">
              <button
                className="rounded-lg bg-blue-500 text-white font-semibold px-4 py-2  mb-2 hover:shadow-md hover:bg-blue-600 transition duration-300 mx-2"
                onClick={() => {
                  setFilters({
                    ...filters,
                    image_type: "",
                    orientation: "",
                    order: "popular",
                  });
                }}
              >
                Popular
              </button>
              <button
                className="rounded-lg bg-green-500 text-white font-semibold px-4 py-2  mb-2 hover:shadow-md hover:bg-green-600 transition duration-300 mx-2"
                onClick={() => {
                  setFilters({
                    ...filters,
                    image_type: "",
                    orientation: "",
                    order: "latest",
                  });
                }}
              >
                Latest
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default GalleryFilters;
