import React from 'react';
import { useNavigate } from 'react-router-dom';

const OfficeBudget = () => {
    const navigate = useNavigate();
    const budgetHistory = [
        {
            sn: '01',
            budgetNo: '00211235',
            description: 'Purchase of 10 units, 2Hp Hisense Air Conditions',
            budgeted: '1,400,000.00',
            actual: '1,380,000.00',
            variance: '+ 20,000.00',
            date: '18/11/2022',
            positive: true,
        },
        {
            sn: '02',
            budgetNo: '36211235',
            description: 'Purchase of office equipments',
            budgeted: '400,000.00',
            actual: '500,000.00',
            variance: '- 100,000.00',
            date: '20/09/2022',
            positive: false,
        },
        {
            sn: '03',
            budgetNo: '00211235',
            description: 'Purchase of 10 units, 2Hp Hisense Air Conditions',
            budgeted: '2,000,000.00',
            actual: '1,800,000.00',
            variance: '+ 200,000.00',
            date: '01/09/2022',
            positive: true,
        },
        {
            sn: '04',
            budgetNo: '00214465',
            description: 'Purchase of 10 units, 2Hp Hisense Air Conditions',
            budgeted: '1,400,000.00',
            actual: '1,380,000.00',
            variance: '+ 20,000.00',
            date: '11/05/2022',
            positive: true,
        },
        {
            sn: '05',
            budgetNo: '36211235',
            description: 'Purchase of office equipments',
            budgeted: '400,000.00',
            actual: '500,000.00',
            variance: '- 100,000.00',
            date: '20/09/2022',
            positive: false,
        },
        {
            sn: '06',
            budgetNo: '00211235',
            description: 'Purchase of 10 units, 2Hp Hisense Air Conditions',
            budgeted: '1,400,000.00',
            actual: '1,380,000.00',
            variance: '+ 20,000.00',
            date: '18/11/2022',
            positive: true,
        },
        {
            sn: '07',
            budgetNo: '00211235',
            description: 'Purchase of 10 units, 2Hp Hisense Air Conditions',
            budgeted: '1,400,000.00',
            actual: '1,380,000.00',
            variance: '+ 20,000.00',
            date: '18/11/2022',
            positive: true,
        },
    ];

    return (
        <div className="min-h-screen flex bg-gray-100 text-sm">
            {/* Sidebar */}

            {/* Main Content */}
            <main className="flex-1 p-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-lg font-semibold">Office Budget</h1>
                        <p className="text-gray-500 text-xs">View, create and send budget request.</p>
                    </div>
                    <div className="flex items-center gap-4">

                        <div className="flex items-center gap-2">
                            <img src="https://i.pravatar.cc/40" alt="User" className="w-8 h-8 rounded-full" />
                            <div className="text-sm">
                                <div>Otor John</div>
                                <div className="text-gray-500 text-xs">HR Office</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Budget Summary Cards */}
                <div className="grid grid-cols-4 gap-4 mb-8">
                    <div className="bg-white p-4 rounded shadow">
                        <div className="text-gray-600 text-xs">Total annual budget</div>
                        <div className="text-lg font-semibold">₦23,000,000</div>
                        <div className="text-green-600 text-xs mt-1">↑ 5% more than last year</div>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <div className="text-gray-600 text-xs">Amount used, YTD</div>
                        <div className="text-lg font-semibold">₦10,000,000</div>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <div className="text-gray-600 text-xs">Total budget balance</div>
                        <div className="text-lg font-semibold">₦13,000,000</div>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <div className="text-gray-600 text-xs">Budget % used</div>
                        <div className="text-lg font-semibold">48%</div>
                    </div>
                </div>

                {/* Create Budget */}
                <div className="bg-white p-4 rounded shadow mb-6 flex justify-between items-center">
                    <h2 className="text-sm font-medium">Create a Budget</h2>
                    <button
                        className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded shadow"
                        onClick={() => navigate('/create-budget')}
                    >
                        Create Budget
                    </button>
                </div>

                {/* Budget History Table */}
                <div className="bg-white p-4 rounded shadow">
                    <h2 className="text-sm font-medium mb-4">Budget History</h2>
                    <div className="overflow-auto">
                        <table className="min-w-full text-sm text-left">
                            <thead>
                                <tr className="text-gray-500 border-b">
                                    <th className="p-2">S/N</th>
                                    <th className="p-2">Budget No.</th>
                                    <th className="p-2">Budget Description</th>
                                    <th className="p-2">Budgeted Amount (₦)</th>
                                    <th className="p-2">Actual Amount (₦)</th>
                                    <th className="p-2">Variance (₦)</th>
                                    <th className="p-2">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {budgetHistory.map((item, index) => (
                                    <tr key={index} className="border-t">
                                        <td className="p-2">{item.sn}</td>
                                        <td className="p-2">{item.budgetNo}</td>
                                        <td className="p-2">{item.description}</td>
                                        <td className="p-2">{item.budgeted}</td>
                                        <td className="p-2">{item.actual}</td>
                                        <td className={`p-2 font-medium ${item.positive ? 'text-green-600' : 'text-red-600'}`}>
                                            {item.variance}
                                        </td>
                                        <td className="p-2">{item.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Footer */}
                <p className="text-center text-xs text-gray-400 mt-10">
                    © 2022 Relia Energy. All Rights Reserved
                </p>
            </main>
        </div>
    );
};

export default OfficeBudget;
