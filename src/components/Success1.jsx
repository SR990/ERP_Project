import React from "react";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Success1 = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
            <div className="bg-green-100 rounded-full p-4 mb-4">
                <div className="bg-green-500 p-3 rounded-full shadow-lg">
                    <CheckCircle className="text-white w-8 h-8" />
                </div>
            </div>
            <h2 className="text-2xl font-semibold text-green-500 mb-4">Logistics Request Submitted Successfully!</h2>
            <p>Your logistics request has been submitted successfully.</p>
            <button
                onClick={() => navigate("/logistics")} // Navigate back to logistics page
                className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
            >
                Go Back to Logistics
            </button>
        </div>
    );
}

export default Success1;
