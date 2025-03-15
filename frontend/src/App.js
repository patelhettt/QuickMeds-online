import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Features from './pages/Features';
import CustomerStories from './pages/CustomerStories';
import FindExperts from './pages/FindExperts';
import ForgotPassword from './pages/Authentication/ForgotPassword';
import Integrations from './pages/Integrations';
import Login from './pages/Authentication/Login';
import Pricing from './pages/Pricing';
import Register from './pages/Authentication/Register';
import Resources from './pages/Resources';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard/Dashboard';
import DashboardSummary from './pages/Dashboard/DashboardSummary';
import Customers from './pages/Dashboard/Customers';
import Employees from './pages/Dashboard/Employees';
import Profile from './pages/User/Profile';
import Settings from './pages/User/Settings';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import PharmacyProducts from './pages/Dashboard/Products/PharmacyProducts';
import NonPharmacyProducts from './pages/Dashboard/Products/NonPharmacyProducts';
import Categories from './pages/Dashboard/Setup/Categories';
import UnitTypes from './pages/Dashboard/Setup/UnitTypes';
import Companies from './pages/Dashboard/Setup/Companies';
import PharmacyOrders from './pages/Dashboard/Orders/PharmacyOrders';
import NonPharmacyOrders from './pages/Dashboard/Orders/NonPharmacyOrders';
import PurchaseNonPharmacyProducts from './pages/Dashboard/Purchase/PurchaseNonPharmacyProducts';
import PurchasePharmacyProducts from './pages/Dashboard/Purchase/PurchasePharmacyProducts';
import NonPharmacyItems from './pages/Dashboard/RequestedItems/NonPharmacyItems';
import PharmacyItems from './pages/Dashboard/RequestedItems/PharmacyItems';
import CustomersReturns from './pages/Dashboard/Returns/CustomersReturns';
import ExpiresOrDamagesReturns from './pages/Dashboard/Returns/ExpiresOrDamagesReturns';
import SuppliersList from './pages/Dashboard/Suppliers/SuppliersList';
import SuppliersDocuments from './pages/Dashboard/Suppliers/SuppliersDocuments';
import SuppliersPayments from './pages/Dashboard/Suppliers/SuppliersPayments';
import POS from './pages/POS';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="features" element={<Features />} />
        <Route path="customer-stories" element={<CustomerStories />} />
        <Route path="find-experts" element={<FindExperts />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="integration" element={<Integrations />} />
        <Route path="login" element={<Login />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="register" element={<Register />} />
        <Route path="terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="resources" element={<Resources />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<DashboardSummary />} />
          <Route path='products/pharmacy' element={<PharmacyProducts />} />
          <Route path='products/non-pharmacy' element={<NonPharmacyProducts />} />
          <Route path='requested-items/pharmacy' element={<PharmacyItems />} />
          <Route path='requested-items/non-pharmacy' element={<NonPharmacyItems />} />
          <Route path='orders/pharmacy' element={<PharmacyOrders />} />
          <Route path='orders/non-pharmacy' element={<NonPharmacyOrders />} />
          <Route path='purchases/pharmacy' element={<PurchasePharmacyProducts />} />
          <Route path='purchases/non-pharmacy' element={<PurchaseNonPharmacyProducts />} />
          <Route path='setup/categories' element={<Categories />} />
          <Route path='setup/unit-types' element={<UnitTypes />} />
          <Route path='setup/companies' element={<Companies />} />
          <Route path='returns/customers' element={<CustomersReturns />} />
          <Route path='returns/expires-or-damages' element={<ExpiresOrDamagesReturns />} />
          <Route path='employees' element={<Employees />} />
          <Route path='customers' element={<Customers />} />
          <Route path='suppliers/lists' element={<SuppliersList />} />
          <Route path='suppliers/payments' element={<SuppliersPayments />} />
          <Route path='suppliers/documents' element={<SuppliersDocuments />} />
          <Route path='pos' element={<POS />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
