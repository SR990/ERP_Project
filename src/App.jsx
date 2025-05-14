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
import CapacityDashboard from './pages/CapacityDashboard';
import CapacityPage from './components/CapacityPage';
import Success2 from './components/Success2';
import TrainingDetails from './components/TrainingDetails';
import StocksInventoryPage from './pages/StocksInventoryPage';
import UpdateStockForm from './components/UpdateStockForm';





const App = () => {
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


          <Route path="/logistics" element={<LogisticsList />} />
          <Route path="/logistics/request" element={<LogisticsForm />} />
          <Route path="/success" element={<Success1 />} />
          <Route path="/capacitydashboard" element={<CapacityDashboard />} />
          <Route path="/training-request" element={<CapacityPage />} />
          <Route path="/success2" element={<Success2 />} />
          <Route path="/training-details" element={<TrainingDetails />} />
          <Route path="/inventory" element={<StocksInventoryPage />} />
          <Route path="/update-stock" element={<UpdateStockForm />} />
          

        </Routes>
      </div>
    </div>
  );
};

export default App;
