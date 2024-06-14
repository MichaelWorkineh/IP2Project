import React, { useState } from 'react';
import { signupAndSaveUserData, updateProfileData } from '../../firebase/auth'; // Adjust the import path as needed

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    headline: '',
    website: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, headline, website, twitter, facebook, linkedin, youtube } = formData;

    try {
      const user = await signupAndSaveUserData(email, password, `${firstName} ${lastName}`);
      await updateProfileData(user.uid, {
        firstName,
        lastName,
        headline,
        website,
        twitter,
        facebook,
        linkedin,
        youtube,
      });
      console.log('Profile data saved successfully');
    } catch (error) {
      console.error('Error saving profile data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">Basics:</h1>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          onChange={handleChange}
        />
        <input
          type="text"
          name="headline"
          placeholder="Headline"
          className="w-full p-2 mb-2 border border-gray-300 rounded"
          onChange={handleChange}
        />
        <p className="text-gray-500 text-right mb-4">60</p>
        <textarea
          name="bio"
          placeholder="Add a professional headline like, 'Instructor at Udemy' or 'Architect.'"
          className="w-full p-2 mb-2 border border-gray-300 rounded h-24"
          onChange={handleChange}
        />
        <p className="text-gray-500 mb-4">Links and coupon codes are not permitted in this section.</p>
        <select className="w-full p-2 mb-4 border border-gray-300 rounded">
          <option>English (US)</option>
        </select>
      </div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">Links:</h1>
        <input
          type="text"
          name="website"
          placeholder="Website (http(s)://..)"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          onChange={handleChange}
        />
        <input
          type="text"
          name="twitter"
          placeholder="http://twitter.com/"
          className="w-full p-2 mb-2 border border-gray-300 rounded"
          onChange={handleChange}
        />
        <p className="text-gray-500 mb-4">Add your Twitter username (e.g. johnsmith).</p>
        <input
          type="text"
          name="facebook"
          placeholder="http://www.facebook.com/"
          className="w-full p-2 mb-2 border border-gray-300 rounded"
          onChange={handleChange}
        />
        <p className="text-gray-500 mb-4">Input your Facebook username (e.g. johnsmith).</p>
        <input
          type="text"
          name="linkedin"
          placeholder="http://www.linkedin.com/"
          className="w-full p-2 mb-2 border border-gray-300 rounded"
          onChange={handleChange}
        />
        <p className="text-gray-500 mb-4">Input your LinkedIn resource id (e.g. in/johnsmith).</p>
        <input
          type="text"
          name="youtube"
          placeholder="http://www.youtube.com/"
          className="w-full p-2 mb-2 border border-gray-300 rounded"
          onChange={handleChange}
        />
        <p className="text-gray-500 mb-4">Input your YouTube username (e.g. johnsmith).</p>
      </div>
      <button type="submit" className="bg-black text-white py-2 px-4 rounded">Save</button>
    </form>
  );
};

export default ProfileForm;
