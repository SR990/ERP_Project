import { useNavigate } from 'react-router-dom';

export default function CreateTaxDefinition() {
  const navigate = useNavigate();

  return (
    <div className="flex-1 p-6">
      <button onClick={() => navigate(-1)} className="text-blue-600 hover:brightness-150 cursor-pointer mb-4 hover:underline">
        ← Back
      </button>

      {/* Tabs */}
      

      <h1 className="text-xl font-bold mb-4">Create Tax Definition</h1>

      {/* Tax Definition Form */}
      <div className="bg-white p-6 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-3 gap-4">
        
        <div>
          <label className="block mb-1 font-medium">Tax Type</label>
          <input className="w-full border rounded-lg px-3 py-2" placeholder="Enter Tax name" />
        </div>
        <div>
          <label className="block mb-1 font-medium">% Value</label>
          <input className="w-full border rounded-lg px-3 py-2" placeholder="Enter % value" />
        </div>
      </div>
      <div className="flex items-end">
          <button className="w-60 ml-6 mt-4 bg-gradient-to-r cursor-pointer hover:brightness-150 from-blue-500 to-indigo-600 text-white px-6 py-2 rounded">
            Create
          </button>
        </div>
    </div>
  );
}
