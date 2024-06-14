import React, { useState,useEffect } from 'react';
import { useAuth } from '../contexts/AuthProvider';
import { fetchUserData } from '../firebase/auth';

const PaymentForm = ({payPrice, courses}) => {
  const {currentUser} = useAuth();
  const userId = currentUser ? currentUser.uid : null;
  const [userData,setUserData] = useState([]);
  let firstName = '';
  let lastName = '';

  useEffect(() => {
    if (currentUser) {
      fetchUserData(currentUser.uid)
        .then((data) => {
          setUserData(data);
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        });
    }
  }, [currentUser]);

  
  if (userData && userData.displayName) {
    const nameParts = userData.displayName.split(' ');
    if (nameParts.length > 0) {
      firstName = nameParts[0]; // First letter of first name
      if (nameParts.length > 1) {
        lastName = nameParts[1]; // Last letter of last name
      }
    }
  }

  console.log(payPrice);
  const [formData, setFormData] = useState({
    amount: payPrice,
    currency: 'ETB',
    email: currentUser.email,
    first_name: firstName,
    last_name: lastName,
    phone_number: '',
    tx_ref: '',
    callback_url: 'https://webhook.site/077164d6-29cb-40df-ba29-8a00e59a7e60',
    return_url: 'https://www.google.com/',
    customization: {
      title: 'Payment for my favourite merchant',
      description: 'I love online payments'
    }
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const token = localStorage.getItem('firebaseToken');
      const response = await fetch('http://localhost:5000/payments/initialize', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      console.log(result);
      // Handle the response accordingly (e.g., redirect to the payment page)
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col m-8 p-6 w-[80%] '>
      <h1 className='font-bold text-purple-500 text-2xl p-3'>Chappa</h1>
      <div className='flex flex-col'>
        <input type="text" name="amount"   value={formData.amount}  onChange={handleChange} placeholder="Amount" required  className='hidde'/>
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required  className='hidde'/>
        <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} placeholder="First Name" required  className='hidde'/>
        <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} placeholder="Last Name" required  className='hidde'/>
        <input type="text" name="phone_number" value={formData.phone_number} onChange={handleChange} placeholder="Phone Number" required className="w-[50%]  p-4 border rounded-sm shadow-lg bg-white mb-2"/>
        <input type="text" name="tx_ref" value={formData.tx_ref} onChange={handleChange} placeholder="Transaction Reference" required className="w-[50%] p-4 border rounded-sm shadow-lg bg-white mb-2"/>
      </div>
      <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded-md focus:outline-none hover:bg-blue-600">Pay</button>
    </form>
  );
};

export default PaymentForm;
