import React from "react";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Success2 = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
            <div className="bg-green-100 rounded-full p-4 mb-4">
                <div className="bg-green-500 p-3 rounded-full shadow-lg">
                    <CheckCircle className="text-white w-8 h-8" />
                </div>
            </div>
            <h2 className="text-2xl font-semibold text-green-500 mb-4">Congratulations</h2>
            <p>Your training request has been submitted successfully.</p>
            <button
                onClick={() => navigate("/capacitydashboard")} // Navigate back to logistics page
                className="bg-blue-600 text-white mt-5 px-6 py-3 rounded hover:bg-blue-700"
            >
                Go Back 
            </button>
        </div>
    );
}

export default Success2;
