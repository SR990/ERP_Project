import { NavLink } from 'react-router-dom';
import {
  FaUser,
  FaFileInvoiceDollar,
  FaChartPie,
  FaMoneyBill,
  FaFileAlt,
  FaBullhorn,
  FaTools,
  FaTruck,
  FaWallet,
  FaBoxes,
  FaBell,
  FaChalkboardTeacher,
  FaShoppingCart
} from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-[250px] min-h-screen bg-white border-r px-4 py-6">
      
      <div className="flex items-center space-x-3 mb-10">
        <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">UO</div>
        <div className="text-lg font-semibold text-gray-800 leading-tight">
          <div>UiUxOtor</div>
          <div className="text-xs text-gray-500">ERP System</div>
        </div>
      </div>

      
      <nav className="flex flex-col space-y-2 text-sm font-medium">
        <NavLink to="/" className="text-gray-600 hover:bg-blue-100 px-3 py-2 rounded-md flex items-center space-x-2">
          <FaChartPie />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/staff" className="text-gray-600 hover:bg-blue-100 px-3 py-2 rounded-md flex items-center space-x-2">
          <FaUser />
          <span>Staff</span>
        </NavLink>

        <NavLink to="/payment" className="text-gray-600 hover:bg-blue-100 px-3 py-2 rounded-md flex items-center space-x-2">
          <FaFileInvoiceDollar />
          <span>Payment Voucher</span>
        </NavLink>

        <NavLink to="/payroll" className="text-gray-600 hover:bg-blue-100 px-3 py-2 rounded-md flex items-center space-x-2">
          <FaMoneyBill />
          <span>Payroll</span>
        </NavLink>

        <NavLink to="/memo" className="text-gray-600 hover:bg-blue-100 px-3 py-2 rounded-md flex items-center space-x-2">
          <FaFileAlt />
          <span>Memo</span>
        </NavLink>

        <NavLink to="/circulars" className="text-gray-600 hover:bg-blue-100 px-3 py-2 rounded-md flex items-center space-x-2">
          <FaBullhorn />
          <span>Circulars</span>
        </NavLink>

        <NavLink to="/maintenance" className="text-gray-600 hover:bg-blue-100 px-3 py-2 rounded-md flex items-center space-x-2">
          <FaTools />
          <span>Maintenance</span>
        </NavLink>

        <NavLink to="/logistics" className="text-gray-600 hover:bg-blue-100 px-3 py-2 rounded-md flex items-center space-x-2">
          <FaTruck />
          <span>Logistics</span>
        </NavLink>

        <NavLink to="/office-budget" className="text-gray-600 hover:bg-blue-100 px-3 py-2 rounded-md flex items-center space-x-2">
          <FaWallet />
          <span>Office Budget</span>
        </NavLink>

        <NavLink to="/inventory" className="text-gray-600 hover:bg-blue-100 px-3 py-2 rounded-md flex items-center space-x-2">
          <FaBoxes />
          <span>Stocks and Inventory</span>
        </NavLink>

        <NavLink to="/notifications" className="text-gray-600 hover:bg-blue-100 px-3 py-2 rounded-md flex items-center space-x-2">
          <FaBell />
          <span>Notifications</span>
        </NavLink>

        <NavLink to="/training" className="text-gray-600 hover:bg-blue-100 px-3 py-2 rounded-md flex items-center space-x-2">
          <FaChalkboardTeacher />
          <span>Capacity Building</span>
        </NavLink>

        <NavLink to="/procurements" className="text-gray-600 hover:bg-blue-100 px-3 py-2 rounded-md flex items-center space-x-2">
          <FaShoppingCart />
          <span>Procurements</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
