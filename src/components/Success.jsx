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
            <h2 className="text-xl font-semibold text-black mb-2">Congratulations</h2>
            <p className="text-center text-gray-600 mb-6">
                Your budget has been submitted<br />
                successfully.
            </p>
            <button
                onClick={() => navigate('/')}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
                Ok
            </button>
        </div>
    );
};

export default Success;
