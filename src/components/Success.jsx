import React from "react";
import { CheckCircle } from "lucide-react";
import { useLocation, useNavigate } from 'react-router-dom';

const Success = () => {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
            <div className="bg-green-100 rounded-full p-4 mb-4">
                <div className="bg-green-500 p-3 rounded-full shadow-lg">
                    <CheckCircle className="text-white w-8 h-8" />
                </div>
            </div>
            <div className=" bg-gray-50 flex flex-col items-center justify-center p-6">
                <h1 className="text-2xl font-semibold text-green-600 mb-4">Success</h1>
                <p className="text-sm text-gray-700 mb-6">{location.state?.message || 'Operation completed successfully.'}</p>
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                    onClick={() => navigate('/')}
                >
                    ok
                </button>
            </div>
        </div>
    );
};

export default Success;