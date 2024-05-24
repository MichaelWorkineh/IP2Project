import React, { useState } from 'react';
import axios from 'axios';

const VideoUpload = () => {
  const [formData, setFormData] = useState({
    title: '',
    hours: '',
    company: '',
    instructor: '',
    lastUpdated: '',
    rating: '',
    reviews: '',
    price: '',
    originalPrice: '',
    requirements: '',
    description: '',
    WhatYouLearn: '',
    audience: '',
    videoDescription: '',
    video: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      video: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      for (let key in formData) {
        if (key === 'video' && formData.video) {
          data.append('video', formData.video);
        } else {
          data.append(key, formData[key]);
        }
      }
      const response = await axios.post('http://localhost:5000/courses', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
      alert("Course uploaded successfully");
    } catch (error) {
      console.error(error);
      alert("Error uploading course");
    }
  };


  console.log(formData);

  return (
<form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded-lg shadow-lg bg-white">
  <div className="mb-4">
    <label htmlFor="title" className="block text-sm font-bold mb-2">Title:</label>
    <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400" />
  </div>

  <div className="mb-4">
    <label htmlFor="hours" className="block text-sm font-bold mb-2">Hours:</label>
    <input type="text" id="hours" name="hours" value={formData.hours} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400" />
  </div>

  <div className="mb-4">
    <label htmlFor="company" className="block text-sm font-bold mb-2">Company:</label>
    <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400" />
  </div>

  <div className="mb-4">
    <label htmlFor="instructor" className="block text-sm font-bold mb-2">Instructor:</label>
    <input type="text" id="instructor" name="instructor" value={formData.instructor} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400" />
  </div>

  <div className="mb-4">
    <label htmlFor="lastUpdated" className="block text-sm font-bold mb-2">Last Updated:</label>
    <input type="text" id="lastUpdated" name="lastUpdated" value={formData.lastUpdated} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400" />
  </div>

  <div className="mb-4">
    <label htmlFor="rating" className="block text-sm font-bold mb-2">Rating:</label>
    <input type="text" id="rating" name="rating" value={formData.rating} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400" />
  </div>

  <div className="mb-4">
    <label htmlFor="reviews" className="block text-sm font-bold mb-2">Reviews:</label>
    <input type="number" id="reviews" name="reviews" value={formData.reviews} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400" />
  </div>

  <div className="mb-4">
    <label htmlFor="price" className="block text-sm font-bold mb-2">Price:</label>
    <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400" />
  </div>

  <div className="mb-4">
    <label htmlFor="originalPrice" className="block text-sm font-bold mb-2">Original Price:</label>
    <input type="number" id="originalPrice" name="originalPrice" value={formData.originalPrice} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400" />
  </div>

  <div className="mb-4">
    <label htmlFor="requirements" className="block text-sm font-bold mb-2">Requirements:</label>
    <textarea id="requirements" name="requirements" value={formData.requirements} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"></textarea>
  </div>

  <div className="mb-4">
    <label htmlFor="description" className="block text-sm font-bold mb-2">Description:</label>
    <textarea id="description" name="description" value={formData.description} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"></textarea>
  </div>

  <div className="mb-4">
    <label htmlFor="WhatYouLearn" className="block text-sm font-bold mb-2">What You'll Learn:</label>
    <textarea id="WhatYouLearn" name="WhatYouLearn" value={formData.WhatYouLearn} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"></textarea>
  </div>

  <div className="mb-4">
    <label htmlFor="audience" className="block text-sm font-bold mb-2">Audience:</label>
    <textarea id="audience" name="audience" value={formData.audience} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"></textarea>
  </div>

  <div className="mb-4">
    <label htmlFor="videoDescription" className="block text-sm font-bold mb-2">Video Description (JSON format):</label>
    <textarea id="videoDescription" name="videoDescription" value={formData.videoDescription} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"></textarea>
  </div>

  <div className="mb-4">
    <label htmlFor="video" className="block text-sm font-bold mb-2">Thumbnail:</label>
    <input type="file" id="video" name="video" onChange={handleFileChange} required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400" />
  </div>

  <div className="text-center">
    <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded-md focus:outline-none hover:bg-blue-600">Upload Course</button>
  </div>
</form>

  );
};

export default VideoUpload;
