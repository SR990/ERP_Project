import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import LogisticsList from './pages/LogisticsList';
import LogisticsForm from './components/LogisticsForm';
import Success1 from './components/Success1';

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Dashboard />} />



          <Route path="/logistics" element={<LogisticsList />} />
          <Route path="/logistics/request" element={<LogisticsForm />} />
          <Route path="/success" element={<Success1 />} />
          
        </Routes>
      </div>
    </div>
  );
};

export default App;
