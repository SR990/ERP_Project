import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { useState } from 'react';

export default function HRNotificationDetail() {
  const navigate = useNavigate();

  const initialNotifications = [
    {
      day: 'Friday, Nov 11',
      time: '10:00am',
      messages: [
        'Lorem ipsum dolor sit amet consectetur. Aliquet nisl laoreet nunc enim dignissim pulvinar ut enim nulla. Lorem eget ultrices est tellus enim proin id.',
        'Aliquet nisl laoreet nunc enim dignissim pulvinar enim dignissim pulvinar ut enim nulla. Lorem eget ultrices est tellus enim proin id.',
      ],
    },
    {
      day: 'Saturday, Nov 12',
      time: '01:20pm',
      messages: [
        'Lorem ipsum dolor sit amet consectetur. Aliquet nisl laoreet nunc enim dignissim pulvinar ut enim nulla.',
        'Aliquet nisl laoreet nunc enim dignissim pulvinar enim dignissim pulvinar ut enim nulla.',
      ],
    },
    {
      day: 'Sunday, Nov 13',
      time: '09:20am',
      messages: [
        'Lorem ipsum dolor sit amet consectetur. Aliquet nisl laoreet nunc enim dignissim pulvinar ut enim nulla.',
      ],
    },
    {
      day: 'Monday, Nov 14',
      time: '11:45am',
      messages: [
        'New policy update released. Please review the new employee handbook.',
        'Holiday schedule for Q4 has been updated. Check your email.',
      ],
    },
    {
      day: 'Tuesday, Nov 15',
      time: '03:30pm',
      messages: [
        'Reminder: Performance review meetings start next week.',
      ],
    },
  ];

  const [notifications, setNotifications] = useState(initialNotifications);

  const handleDeleteAll = () => {
    setNotifications([]);
  };

  return (
    <div className="min-h-screen bg-white p-6 flex ml-4 mr-4 mt-4 flex-col">
      {/* Back Button */}
      <button
        onClick={() => navigate('/notifications')}
        className="text-blue-600 mr-280 hover:underline hover:brightness-150 cursor-pointer mb-4"
      >
        ← Back
      </button>

      {/* Title */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Notifications from HR</h2>
        <button
          className="bg-gradient-to-r hover:brightness-150 cursor-pointer from-blue-600 to-blue-400 text-white px-4 py-2 rounded-md"
          onClick={handleDeleteAll}
        >
          Delete All
        </button>
      </div>

      {/* Scrollable Notification List Box */}
      <div className="h-[400px] overflow-y-auto pr-2 border rounded-lg p-4 bg-gray-50">
        {notifications.length === 0 ? (
          <div className="text-gray-500 text-sm">No HR notifications found.</div>
        ) : (
          <div className="space-y-6">
            {notifications.map((section, idx) => (
              <div key={idx}>
                <p className="font-semibold text-sm text-gray-700">
                  {section.day} <span className="text-xs ml-4">{section.time}</span>
                </p>
                <div className="mt-2 space-y-2">
                  {section.messages.map((msg, i) => (
                    <div
                      key={i}
                      className="bg-white text-sm text-gray-700 p-3 rounded-lg shadow-sm"
                    >
                      {msg}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-400 mt-6">
        Copyright © 2022 Relia Energy. All Rights Reserved
      </footer>
    </div>
  );
}
