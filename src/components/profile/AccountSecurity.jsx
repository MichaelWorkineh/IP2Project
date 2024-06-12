import React, { useState } from 'react';

const AccountSettings = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChangePassword = () => {
    // Handle change password logic
  };

  return (
    <div className="max-w-2xl flex-col justify-center">
      <div className='border-b pt-4 px-4 flex-col justify-center'>
        <h1 className="text-3xl font-bold mb-4 flex justify-center">Account</h1>
        <p className="mb-8 flex justify-center">Edit your account settings and change your password here.</p>
      </div>
      <div className="pt-4 px-4 flex-col justify-center ml-28">
        <label className="block font-bold mb-2">Email:</label>
        <div className="flex items-center justify-between border border-gray-300 p-3 rounded-sm">
          <input type="text" placeholder='michaelgetu@gmail.com'/>
          <button className="text-xl">✎</button>
        </div>
        <div className="mb-8">
        <label className="block font-bold mb-2">Password:</label>
        <input 
          type="password" 
          placeholder="Enter current password" 
          value={currentPassword} 
          onChange={(e) => setCurrentPassword(e.target.value)} 
          className="w-full p-2 mb-4 border border-gray-300 rounded-sm"
        />
        <input 
          type="password" 
          placeholder="Enter new password" 
          value={newPassword} 
          onChange={(e) => setNewPassword(e.target.value)} 
          className="w-full p-2 mb-4 border border-gray-300 rounded-sm"
        />
        <input 
          type="password" 
          placeholder="Re-type new password" 
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)} 
          className="w-full p-2 mb-4 border border-gray-300 rounded-sm"
        />
        <button className="bg-black text-white py-2 px-4 rounded-sm font-bold" onClick={handleChangePassword}>Change password</button>
      </div>

      </div>

     
      <div className="border-t border-gray-300 pt-4 pl-32">
        <h2 className="text-xl font-bold mb-2">Multi-factor Authentication</h2>
        <p className="mb-4">
          Increase your account security by requiring that a code emailed to you be entered when you log in.
          For more information on how multi-factor authentication works, refer to our 
          <a href="https://helpcenter.example.com" className="text-blue-500" target="_blank" rel="noopener noreferrer"> Help Center article</a>.
        </p>
        <button className="w-full bg-black text-white py-2 rounded">Enable</button>
      </div>
    </div>
  );
};

export default AccountSettings;
