import { useState, useRef, useEffect } from 'react';
import { FiMoreVertical } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const initialNotifications = {
  today: [
    { id: 1, time: '3min ago', read: false },
    { id: 2, time: '10min ago', read: false },
    { id: 3, time: '1hr ago', read: false },
    { id: 4, time: '5hr ago', read: true },
  ],
  yesterday: [
    { id: 5, time: '1day ago', read: true },
    { id: 6, time: '1day ago', read: true },
    { id: 7, time: '1day ago', read: true },
  ],
};

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [checkedIds, setCheckedIds] = useState(new Set());
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [selectedActions, setSelectedActions] = useState({});
  const [isMarkedAll, setIsMarkedAll] = useState(false);
  const dropdownRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdownId(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMarkAll = () => {
    if (isMarkedAll) {
      // Unmark all
      setNotifications(initialNotifications);
      setCheckedIds(new Set());
      setIsMarkedAll(false);
    } else {
      // Mark all as read and check all
      const updated = {};
      const allIds = new Set();

      for (let key in notifications) {
        updated[key] = notifications[key].map((n) => {
          allIds.add(n.id);
          return { ...n, read: true };
        });
      }

      setNotifications(updated);
      setCheckedIds(allIds);
      setIsMarkedAll(true);
    }
  };

  const toggleDropdown = (id) => {
    setOpenDropdownId((prev) => (prev === id ? null : id));
  };

  const handleCheckboxChange = (id) => {
    setCheckedIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const handleDropdownAction = (notificationId, action) => {
    setSelectedActions((prev) => ({
      ...prev,
      [notificationId]: action,
    }));

    setNotifications((prev) => {
      const updated = { ...prev };

      for (let group in updated) {
        updated[group] = updated[group].filter((item) => {
          if (item.id === notificationId) {
            if (action === 'Delete') {
              checkedIds.delete(item.id);
              return false;
            }
            if (action === 'Mark as read') {
              item.read = true;
              checkedIds.add(item.id);
            }
          }
          return true;
        });
      }

      return updated;
    });

    setCheckedIds(new Set(checkedIds));
    setOpenDropdownId(null);
  };

  const NotificationItem = ({ item }) => {
    const selectedAction = selectedActions[item.id];

    return (
      <div
        className={`flex flex-col gap-2 px-4 py-3 rounded-lg relative cursor-pointer ${
          !item.read ? 'bg-blue-50' : 'bg-white'
        }`}
        onClick={() => {
          if (item.id === 1) navigate('/hr-notification');
        }}
      >
        <div className="flex justify-between items-start">
          <div className="flex gap-3 items-start">
            <input
              type="checkbox"
              checked={checkedIds.has(item.id)}
              onChange={(e) => {
                e.stopPropagation();
                handleCheckboxChange(item.id);
              }}
              className="mt-2"
            />
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="avatar"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-sm text-gray-800">
                {item.id === 1
                  ? 'New HR notifications available. Click to view.'
                  : 'Your payment invoice request has been approved by Admin'}
              </p>
              <p className="text-xs text-gray-400">{item.time}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 relative" ref={dropdownRef}>
            {!item.read && <span className="w-2 h-2 bg-blue-500 rounded-full"></span>}
            <FiMoreVertical
              className="text-gray-500 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                toggleDropdown(item.id);
              }}
            />
            {openDropdownId === item.id && (
              <div className="absolute right-0 top-8 w-40 bg-white border border-gray-200 rounded shadow z-50">
                <ul className="py-1 text-sm text-gray-700">
                  {['Mark as read', 'Select', 'Delete'].map((action) => (
                    <li
                      key={action}
                      className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                        selectedAction === action
                          ? 'bg-blue-100 font-medium text-blue-700'
                          : ''
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDropdownAction(item.id, action);
                      }}
                    >
                      {action}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {selectedAction && (
          <div className="text-xs text-blue-700 bg-blue-100 px-2 py-1 rounded w-max">
            Selected Action: {selectedAction}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 ml-4 mr-4 mt-4">
        <h1 className="text-xl font-semibold flex items-center gap-2">🔔 Notifications</h1>
        <button
          className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-400 rounded-md"
          onClick={toggleMarkAll}
        >
          {isMarkedAll ? 'Unmark All' : 'Mark All As Read'}
        </button>
      </div>

      {/* Scrollable Notifications Section */}
      <div className="bg-white rounded-xl ml-4 mr-4 mt-4 p-4 shadow-sm space-y-4 max-h-[600px] overflow-y-auto">
        <h2 className="text-base font-semibold text-gray-800">
          Notifications ({Object.values(notifications).flat().filter(n => !n.read).length} unread)
        </h2>

        {/* Today */}
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span className="font-medium">Today</span>
        </div>

        <div className="space-y-2">
          {notifications.today.map((item) => (
            <NotificationItem key={item.id} item={item} />
          ))}
        </div>

        {/* Yesterday */}
        <div className="mt-6">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span className="font-medium">Yesterday 18th November, 2022</span>
          </div>

          <div className="space-y-2 mt-2">
            {notifications.yesterday.map((item) => (
              <NotificationItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-400 mt-10">
        Copyright © 2022 Relia Energy. All Rights Reserved
      </footer>
    </div>
  );
}
