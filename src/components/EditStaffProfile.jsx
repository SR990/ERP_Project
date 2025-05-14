import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function EditStaffProfile() {
  const navigate = useNavigate();
  const location = useLocation();
  const initialData = location.state || {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    gender: '',
    staffID: '',
    designation: '',
    officialEmail: '',
  };

  const [formData, setFormData] = useState(initialData);
  const [isEditing, setIsEditing] = useState(false);
  const [showRoleModal, setShowRoleModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log('Profile updated:', formData);
    setIsEditing(false);
  };

  const handleRoleSubmit = () => {
    setShowRoleModal(true);
  };

  return (
    <div className="p-6">
      <button
        onClick={() => navigate('/add-staff')}
        className="text-blue-600 hover:underline hover:brightness-150 cursor-pointer mb-4"
      >
        ← Back
      </button>

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-lg font-bold">Staff Profile</h1>
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:brightness-110"
          >
            Edit
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="bg-green-600 text-white px-4 py-2 rounded hover:brightness-110"
          >
            Save
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col items-center">
          <div className="w-36 h-36 mt-10 border-1 border-dotted border-gray-400 rounded-full flex items-center justify-center">
            <div className="w-32 h-32 border-2 border-gray-200 rounded-full flex items-center justify-center bg-gray-200">
              <span className="text-gray-500">Update Photo</span>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-4">Allowed format:</p>
          <p className="text-sm text-gray-900">JPG, JPEG, and PNG</p>
          <p className="text-sm text-gray-500  mt-4">Max file size:</p>
          <p className="text-sm text-gray-900">2MB</p>
        </div>

        <div className="col-span-2 grid grid-cols-2 gap-4">
          <InputField
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            disabled={!isEditing}
          />
          <InputField
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            disabled={!isEditing}
          />
          <InputField
            label="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            disabled={!isEditing}
          />
          <InputField
            label="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            disabled={!isEditing}
          />
          <SelectField
            label="Gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            disabled={!isEditing}
            options={['Male', 'Female']}
          />
          <InputField
            label="Staff ID"
            name="staffID"
            value={formData.staffID}
            readOnly
            disabled
          />
          <SelectField
            label="Designation"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            disabled={!isEditing}
            options={['Manager', 'Developer']}
          />
          <InputField
            label="Official Email"
            name="officialEmail"
            value={formData.officialEmail}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-lg font-bold mb-4">Assign Role</h2>
        <div className="grid grid-cols-3 gap-4 items-center">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">User ID</label>
            <input
              value="0221AD"
              readOnly
              className="border rounded-md bg-gray-200 px-3 py-2 w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Role</label>
            <select className="border rounded-md px-3 py-2 w-full">
              <option>Select role</option>
              <option>Admin</option>
              <option>IT</option>
              <option>HR</option>
            </select>
          </div>
          <div className="flex items-end">
            <button
              onClick={handleRoleSubmit}
              className="bg-gradient-to-r mt-6 hover:brightness-150 cursor-pointer from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-md w-full"
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      {showRoleModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm w-full">
            <img
              src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
              alt="Success"
              className="w-16 h-16 mx-auto mb-4"
            />
            <h2 className="text-lg font-bold mb-2">Congratulations</h2>
            <p className="mb-6">You have successfully assigned a role to {formData.firstName} {formData.lastName}</p>
            <button
              onClick={() => setShowRoleModal(false)}
              className="bg-gradient-to-r hover:brightness-150 cursor-pointer from-blue-500 to-indigo-600 text-white px-6 py-2 rounded"
            >
              Ok
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Reusable InputField component
function InputField({ label, name, value, onChange, disabled, readOnly = false }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2 text-gray-700">{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        readOnly={readOnly}
        className={`border rounded-md px-3 py-2 w-full ${disabled ? 'bg-gray-100' : ''}`}
        placeholder={label}
      />
    </div>
  );
}

// Reusable SelectField component
function SelectField({ label, name, value, onChange, disabled, options = [] }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2 text-gray-700">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`border rounded-md px-3 py-2 w-full ${disabled ? 'bg-gray-100' : ''}`}
      >
        <option value="">Select {label.toLowerCase()}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}
