import './App.css';
import AdminLanding from './AdminLanding';
import { Routes, Route } from 'react-router-dom';
import UserLandingView from './UserLandingView';
import UserShopAll from './UserShopAll';
import UserNewArrivals from './UserNewArrivals';

function App() {

  return (
    <div className="App">
     {/* <UserLandingView /> */}
     <Routes>
        <Route path="/" element={<UserLandingView />} />
        <Route path="/products" element={<UserShopAll />} />
        <Route path="/newArrivals" element={<UserNewArrivals />} />
        <Route path="/admin" element={<AdminLanding />} />
     </Routes>
    </div>
  );
}

export default App;
