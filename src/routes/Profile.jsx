import React, { useEffect, useState } from 'react';
import axios from '../api';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Проверка наличия токена в localStorage
    const token = localStorage.getItem('token');
    if (!token) {
      // Если токен отсутствует, перенаправляем на страницу входа
      navigate('/login');
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await axios.get('/users/2');
        setUserData(response.data);
      } catch (error) {
        console.error('Error:', error.response?.data || error.message);
        setError('Failed to load user data');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  if (loading) {
    return <div className="text-center text-white">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="bg-gray-900 min-h-screen p-8 text-white">
      <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Profile</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Personal Information</h2>
            <p><span className="font-semibold">Name:</span> {userData.name.firstname} {userData.name.lastname}</p>
            <p><span className="font-semibold">Username:</span> {userData.username}</p>
            <p><span className="font-semibold">Email:</span> {userData.email}</p>
            <p><span className="font-semibold">Phone:</span> {userData.phone}</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Address</h2>
            <p><span className="font-semibold">Street:</span> {userData.address.street}</p>
            <p><span className="font-semibold">City:</span> {userData.address.city}</p>
            <p><span className="font-semibold">Zipcode:</span> {userData.address.zipcode}</p>
            <p><span className="font-semibold">Number:</span> {userData.address.number}</p>
            <p><span className="font-semibold">Geolocation:</span> Lat: {userData.address.geolocation.lat}, Long: {userData.address.geolocation.long}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
