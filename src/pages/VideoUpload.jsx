import React, { useState } from 'react';
import axios from 'axios';

const VideoUpload = ({ onVideoUpload }) => {
  const [title, setTitle] = useState('');
  const [hours, setHours] = useState('');
  const [company, setCompany] = useState('');
  const [instructor, setInstructor] = useState('');
  const [lastUpdated, setLastUpdated] = useState('');
  const [rating, setRating] = useState('');
  const [reviews, setReviews] = useState('');
  const [price, setPrice] = useState('');
  const [originalPrice, setOriginalPrice] = useState('');
  const [requirements, setRequirements] = useState('');
  const [description, setDescription] = useState('');
  const [audience, setAudience] = useState('');
  const [videoFile, setVideoFile] = useState(null);
  const [image, setimage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !videoFile || !image) {
      alert('Please fill out the title, upload a video file, and a image.');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('hours', hours);
    formData.append('company', company);
    formData.append('instructor', instructor);
    formData.append('lastUpdated', lastUpdated);
    formData.append('rating', rating);
    formData.append('reviews', reviews);
    formData.append('price', price);
    formData.append('originalPrice', originalPrice);
    formData.append('requirements', requirements.split(',').map(item => item.trim()));
    formData.append('description', description);
    formData.append('audience', audience.split(',').map(item => item.trim()));
    formData.append('video', videoFile);
    formData.append('image', image);

    try {
      const response = await axios.post('http://localhost:8000/api/upload/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      onVideoUpload(response.data);
    } catch (error) {
      console.error('Error uploading video:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-6 bg-white rounded shadow-md space-y-4">
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">Hours:</label>
        <input
          type="text"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">Company:</label>
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">Instructor:</label>
        <input
          type="text"
          value={instructor}
          onChange={(e) => setInstructor(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">Last Updated:</label>
        <input
          type="text"
          value={lastUpdated}
          onChange={(e) => setLastUpdated(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">Rating:</label>
        <input
          type="text"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">Reviews:</label>
        <input
          type="number"
          value={reviews}
          onChange={(e) => setReviews(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">Price:</label>
        <input
          type="number"
          step="0.01"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">Original Price:</label>
        <input
          type="number"
          step="0.01"
          value={originalPrice}
          onChange={(e) => setOriginalPrice(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">Requirements (comma separated):</label>
        <input
          type="text"
          value={requirements}
          onChange={(e) => setRequirements(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        ></textarea>
      </div>
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">Audience (comma separated):</label>
        <input
          type="text"
          value={audience}
          onChange={(e) => setAudience(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">Upload Video:</label>
        <input
          type="file"
          accept="video/*"
          onChange={(e) => setVideoFile(e.target.files[0])}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">Upload image:</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setimage(e.target.files[0])}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Upload Video
      </button>
    </form>
  );
};

export default VideoUpload;
