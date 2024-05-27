import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../contexts/AuthProvider';

const VideoUpload = () => {
  const { currentUser } = useAuth();
  const userId = currentUser ? currentUser.uid : null;

  const [formData, setFormData] = useState({
    title: '',
    hours: '',
    company: '',
    rating: '',
    reviews: '',
    price: '',
    originalPrice: '',
    requirements: '',
    description: '',
    WhatYouLearn: '',
    audience: '',
    category: '',
    video: null
  });
  const categories = ['Programming Languages', 'Frontend Development', 'Backend Development', 'Web Development', 'Mobile Development'];


  const [videoDescription, setVideoDescription] = useState({
    chapters: [],
    description: ''
  });

  const [currentChapter, setCurrentChapter] = useState({
    timestamp: '',
    title: '',
    description: ''
  });

  const instructor = {
    userId: currentUser.uid,
    userEmail: currentUser.email
  };

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

  const handleVideoDescriptionChange = (e) => {
    const { name, value } = e.target;
    setVideoDescription({
      ...videoDescription,
      [name]: value
    });
  };

  const handleChapterChange = (e) => {
    const { name, value } = e.target;
    setCurrentChapter({
      ...currentChapter,
      [name]: value
    });
  };

  const addChapter = () => {
    setVideoDescription({
      ...videoDescription,
      chapters: [...videoDescription.chapters, currentChapter]
    });
    setCurrentChapter({ timestamp: '', title: '', description: '' });
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
      // Add video description and instructor details to form data
      data.append('videoDescription', JSON.stringify(videoDescription));
      data.append('instructor', JSON.stringify(instructor));

      const token = localStorage.getItem('firebaseToken'); // Assuming you store the auth token in local storage
      const response = await axios.post('http://localhost:5000/courses', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response.data);
      alert("Course uploaded successfully");
    } catch (error) {
      console.error(error);
      alert("Error uploading course");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded-lg shadow-lg bg-white">
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-bold mb-2">Title:</label>
        <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400" />
      </div>

      <div className="mb-4">
        <label htmlFor="hours" className="block text-sm font-bold mb-2">Hours:</label>
        <input type="number" id="hours" name="hours" value={formData.hours} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400" />
      </div>

      <div className="mb-4">
        <label htmlFor="company" className="block text-sm font-bold mb-2">Company:</label>
        <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400" />
      </div>

      <div className="mb-4">
        <label htmlFor="rating" className="block text-sm font-bold mb-2">Rating:</label>
        <input type="number" step="0.1" id="rating" name="rating" value={formData.rating} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400" />
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
        <label htmlFor="videoDescription" className="block text-sm font-bold mb-2">Video Description:</label>
        <textarea id="videoDescription" name="description" value={videoDescription.description} onChange={handleVideoDescriptionChange} required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"></textarea>
        <div>
          {videoDescription.chapters.map((chapter, index) => (
            <div key={index} className="mb-2">
              <h4 className="font-bold">Chapter {index + 1}</h4>
              <p>Timestamp: {chapter.timestamp}</p>
              <p>Title: {chapter.title}</p>
              <p>Description: {chapter.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <label htmlFor="timestamp" className="block text-sm font-bold mb-2">Chapter Timestamp:</label>
          <input type="text" id="timestamp" name="timestamp" value={currentChapter.timestamp} onChange={handleChapterChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400" />
        </div>
        <div className="mt-4">
          <label htmlFor="chapterTitle" className="block text-sm font-bold mb-2">Chapter Title:</label>
          <input type="text" id="chapterTitle" name="title" value={currentChapter.title} onChange={handleChapterChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400" />
        </div>
        <div className="mt-4">
          <label htmlFor="chapterDescription" className="block text-sm font-bold mb-2">Chapter Description:</label>
          <textarea id="chapterDescription" name="description" value={currentChapter.description} onChange={handleChapterChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400"></textarea>
        </div>
        <div className="mt-4 text-center">
          <button type="button" onClick={addChapter} className="py-2 px-4 bg-green-500 text-white rounded-md focus:outline-none hover:bg-green-600">Add Chapter</button>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="video" className="block text-sm font-bold mb-2">Video:</label>
        <input type="file" id="video" name="video" onChange={handleFileChange} required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400" />
      </div>
      <div className="mb-4">
        <label htmlFor="category" className="block text-sm font-bold mb-2">Category:</label>
        <select id="category" name="category" value={formData.category} onChange={handleChange} required className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-400">
          <option value="">Select Category</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className="text-center">
        <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded-md focus:outline-none hover:bg-blue-600">Upload Course</button>
      </div>
    </form>
  );
};

export default VideoUpload;
