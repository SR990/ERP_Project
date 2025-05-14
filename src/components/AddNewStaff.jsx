// src/pages/AddNewStaff.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddNewStaff() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    gender: '',
    staffID: '',
    designation: '',
    officialEmail: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddStaff = () => {
    navigate('/edit-staff-profile', { state: formData });
  };

  return (
    <div className="p-6">
      <button
        onClick={() => navigate('/staff')}
        className="text-blue-600 mr-280 hover:underline hover:brightness-150 cursor-pointer mb-4"
      >
        ← Back
      </button>      <h1 className="text-lg font-bold mb-6">Add a New Staff</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col items-center">
          <div className="w-36 h-36 mt-16 border-1 border-dotted border-gray-400 rounded-full flex items-center justify-center">
            <div className="w-32 h-32 border-2 border-gray-200 rounded-full flex items-center justify-center bg-gray-200">
              <span className="text-gray-500">Upload photo</span>
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-4">Allowed format: </p>
          <p className="text-sm text-black mb-4">JPG, JPEG, and PNG</p>

          <p className="text-sm text-gray-500">Max file size: </p>
          <p className="text-sm text-black">2MB</p>

        </div>

        <div className="col-span-2 grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2  text-gray-700">First Name</label>
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="border rounded-md border-gray-400 text-gray-500 px-3 w-80 py-2"
              placeholder="First name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Last Name</label>
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="border rounded-md border-gray-400 text-gray-500 px-3 w-80 py-2"
              placeholder="Last name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Email Address</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border rounded-md border-gray-400 text-gray-500 px-3 w-80 py-2"
              placeholder="Email address"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Phone Number</label>
            <input
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="border rounded-md  px-3 border-gray-400 text-gray-500 w-80 py-2"
              placeholder="Phone number"
            />
          </div>
          <div> 
            <label className="block text-sm font-medium mb-2 text-gray-700">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="border border-gray-400 text-gray-500 rounded-md px-3 w-80 py-2"
            >
              <option>Select gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="border rounded-md border-gray-400 text-gray-500 px-3 w-80 py-2"
            >
              <option>Select role</option>
              <option>Admin</option>
              <option>IT</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Designation</label>
            <select
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              className="border rounded-md border-gray-400 text-gray-500 px-3 w-80 py-2"
            >
              <option>Select designation</option>
              <option>Manager</option>
              <option>Developer</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Staff ID</label>
            <input
              name="staffID"
              value={formData.staffID}
              onChange={handleChange}
              className="border rounded-md bg-gray-200 border-gray-400 text-black px-3 w-80 py-2"
              placeholder="Staff ID"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Official Email</label>
            <input
              name="officialEmail"
              value={formData.officialEmail}
              onChange={handleChange}
              className="border rounded-md bg-gray-200 border-gray-400 text-black px-3 w-80 py-2"
              placeholder="Official email"
            />
          </div>
        </div>
      </div>

      <button
        onClick={handleAddStaff}
        className="mt-6 bg-gradient-to-r w-80 ml-8 cursor-pointer hover:brightness-150 from-blue-500 to-indigo-600 text-white px-6 py-2 rounded"
      >
        Add Staff
      </button>
    </div>
  );
}
