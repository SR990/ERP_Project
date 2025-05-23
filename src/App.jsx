import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import LogisticsList from './pages/LogisticsList';
import LogisticsForm from './components/LogisticsForm';
import Success1 from './components/Success1';
import OfficeBudget from './components/OfficeBudget';
import CreateBudget from './components/CreateBudget';
import Success from './components/Success';
import Circulars from './components/Circulars';
import CreateCircular from './components/createCircular';
import Memo from './components/Memo';
import CreateMemo from './components/CreateMemo';
import Maintenance from './components/Maintenance';
import ScheduleMaintenance from './components/ScheduleMaintenance';
import ProcurementDashboard from './components/ProcurementDashboard';
import ProcurementRequest from './components/ProcurementRequest';
import ProcurementDetail from './components/ProcurementDetail';




import CapacityDashboard from './pages/CapacityDashboard';
import CapacityPage from './components/CapacityPage';
import Success2 from './components/Success2';
import TrainingDetails from './components/TrainingDetails';
import StocksInventoryPage from './pages/StocksInventoryPage';
import UpdateStockForm from './components/UpdateStockForm';
import Header from './components/Header';
import CreateSalaryDefinition from './pages/CreateSalaryDefinition';
import CreateTaxDefinition from './pages/CreateTaxDefinition';
import CreatePayRollDefinition from './pages/CreatePayRollDefinition';
import CreatePaySlipDefinition from './pages/CreatePaySlipDefinition';
import PayslipView from './pages/PayslipView';
import SalaryChart from './components/SalaryChart';
import AllStaff from './components/AllStaff'; // ✅ Import AllStaff
import AddNewStaff from './components/AddNewStaff'; // ✅ NEW
import EditStaffProfile from './components/EditStaffProfile'; // ✅ NEW
import PaymentVoucherPage from './components/PaymentVoucherPage';
import CreatePaymentVoucher from './components/CreatePaymentVoucher';
import NotificationsPage from './components/NotificationsPage';
import HRNotificationDetail from './components/HRNotificationDetail';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/office-budget" element={<OfficeBudget />} />
          <Route path="/create-budget" element={<CreateBudget />} />
          <Route path="/success" element={<Success />} />
          <Route path="/circulars" element={<Circulars />} />
          <Route path="/create-circular" element={<CreateCircular />} />
          <Route path="/memo" element={<Memo />} />
          <Route path="/create-memo" element={<CreateMemo />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/schedule-maintenance" element={<ScheduleMaintenance />} />
          <Route path="/procurements" element={<ProcurementDashboard />} />
          <Route path="/procurement-request" element={<ProcurementRequest />} />
          <Route path="/procurement-detail" element={<ProcurementDetail />} />



          <Route path="/logistics" element={<LogisticsList />} />
          <Route path="/logistics/request" element={<LogisticsForm />} />
          <Route path="/success1" element={<Success1 />} />
          <Route path="/capacitydashboard" element={<CapacityDashboard />} />
          <Route path="/training-request" element={<CapacityPage />} />
          <Route path="/success2" element={<Success2 />} />
          <Route path="/training-details" element={<TrainingDetails />} />
          <Route path="/inventory" element={<StocksInventoryPage />} />
          <Route path="/update-stock" element={<UpdateStockForm />} />
          <Route path="/create-salary-definition" element={<CreateSalaryDefinition />} />
          <Route path="/create-tax-definition" element={<CreateTaxDefinition />} />
          <Route path="/create-payroll-definition" element={<CreatePayRollDefinition />} />
          <Route path="/create-payslip-definition" element={<CreatePaySlipDefinition />} />
          <Route path="/payslip-view" element={<PayslipView />} />
          <Route path="/payroll" element={<><Header /><SalaryChart /></>} />
          <Route path="/staff" element={<AllStaff />} /> {/* ✅ Existing */}
          <Route path="/add-staff" element={<AddNewStaff />} /> {/* ✅ New */}
          <Route path="/edit-staff-profile" element={<EditStaffProfile />} /> {/* ✅ New */}
          <Route path="/payment-voucher" element={<PaymentVoucherPage />} /> {/* ✅ New */}
          <Route path="/create-payment-voucher" element={<CreatePaymentVoucher />} /> {/* ✅ New */}
          <Route path="/notifications" element={<NotificationsPage />} /> {/* ✅ New */}
          <Route path="/hr-notification" element={<HRNotificationDetail />} /> {/* ✅ New */}
        </Routes>
      </div>
    </div>
  );
};

export default App;
