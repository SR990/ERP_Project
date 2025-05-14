import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const TrainingDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return <div className="p-6">No training selected.</div>;
  }

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-6">
        <button
          className="text-blue-600 hover:underline mb-4"
          onClick={() => navigate(-1)}
        >
          &larr; Back
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {state.description}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-50 p-4 rounded border">
            <p className="text-sm text-gray-600 font-medium mb-1">Training Type</p>
            <p className="text-gray-800">{state.type} training</p>
          </div>

          <div className="bg-gray-50 p-4 rounded border">
            <p className="text-sm text-gray-600 font-medium mb-1">Duration</p>
            <p className="text-gray-800">{state.duration}</p>
          </div>

          <div className="bg-gray-50 p-4 rounded border">
            <p className="text-sm text-gray-600 font-medium mb-1">Mode</p>
            <p className="text-gray-800">{state.mode}</p>
          </div>

          <div className="bg-gray-50 p-4 rounded border">
            <p className="text-sm text-gray-600 font-medium mb-1">Status</p>
            <p
              className={`font-semibold ${
                state.status === 'Completed'
                  ? 'text-green-600'
                  : state.status === 'Inprogress'
                  ? 'text-orange-500'
                  : 'text-blue-500'
              }`}
            >
              {state.status}
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Participants</h3>
          <ol className="list-decimal ml-6 text-gray-800 space-y-1">
            <li>Fatima Mohammed</li>
            <li>Ibrahim Bankole</li>
            <li>Otor John Stephen</li>
            <li>Abubakar Alghazali</li>
            <li>Ransky Akab</li>
            <li>Sadiq Lukman</li>
          </ol>
        </div>

        <div className="mb-4">
          <label className="block font-semibold text-gray-700 mb-1">
            Update Status
          </label>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <select className="border border-gray-300 px-4 py-2 rounded-md text-gray-700 focus:outline-none focus:ring focus:border-blue-300">
              <option>Select option</option>
              <option>Inprogress</option>
              <option>Completed</option>
              <option>To-do</option>
            </select>
            <button className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingDetails;
