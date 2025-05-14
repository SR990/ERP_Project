export default function Header() {
  return (
    <div className="flex justify-between items-center w-300 mt-8 ml-8 mb-8">
      <div>
        <h2 className="text-xl font-semibold text-gray-800 flex items-center">
          👥 Payroll Dashboard
        </h2>
        <p className="text-sm text-gray-500">Overview of payroll performance and statistics</p>
      </div>
      <div className="flex items-center gap-4">
        <img
          src="https://ui-avatars.com/api/?name=Otor+John"
          alt="User"
          className="w-10 h-10 rounded-full"
        />
        <div className="text-right text-sm">
          <p className="font-semibold text-gray-700">Otor John</p>
          <p className="text-gray-500">HR Office</p>
        </div>
      </div>
    </div>
  );
}
