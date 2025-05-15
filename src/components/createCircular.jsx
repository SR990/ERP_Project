import React, { useState } from 'react';
import { ChevronDown, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CreateCircular = () => {
    const navigate = useNavigate();

    // State for the date input
    const [date, setDate] = useState('');

    const handleSendCircular = () => {
        navigate('/success', { state: { message: 'Your circular has been sent successfully.' } });
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="mb-6">
                <button
                    className="text-blue-600 text-sm flex items-center gap-1 hover:underline"
                    onClick={() => navigate('/circulars')}
                >
                    &larr; Back
                </button>
                <h1 className="text-xl font-semibold mt-2">Create Circular</h1>
                <p className="text-sm text-gray-500">Create and send circulars to designated offices.</p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Circular title</label>
                        <input
                            type="text"
                            placeholder="Enter title"
                            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Sent from</label>
                        <input
                            type="text"
                            value="Otor John"
                            readOnly
                            className="w-full bg-gray-100 border rounded px-4 py-2"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Sent to</label>
                        <div className="relative">
                            <select className="w-full border rounded px-4 py-2 appearance-none pr-10">
                                <option>Select option</option>
                                <option>All Staff</option>
                                <option>Operations Staffs</option>
                                <option>HR Staffs</option>
                                <option>Finance Department</option>
                                <option>IT Department</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-2.5 text-gray-500 w-4 h-4" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block text-sm font-medium mb-1"></label>
                        <div className="relative">
                            <input
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="w-full border rounded px-4 py-2 pr-2 bg-white"
                            />

                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-2">
                        <label className="block text-sm font-medium mb-1">Circular message</label>
                        <textarea
                            rows="4"
                            placeholder="Enter message..."
                            className="w-full border rounded px-4 py-2 resize-none focus:outline-none focus:ring focus:border-blue-300"
                        ></textarea>
                    </div>
                </div>

                <button
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-md font-medium"
                    onClick={handleSendCircular}
                >
                    Send Circular
                </button>
            </div>

            <footer className="mt-8 text-center text-xs text-gray-500">
                Copyright © 2022 Relia Energy. All Rights Reserved
            </footer>
        </div>
    );
};

export default CreateCircular;
