import { Route, Routes } from "react-router-dom";
import register from '../Pages/registrationPage';
import RegistrationPage from "../Pages/registrationPage";
import LoginPage from "../Pages/loginPage"
import HomePage from "../Pages/HomePage";
import PropertyListing from "../Component/PropertyListing";
import ContactUs from "../Pages/ContactUs";
import PropertyDetails from "../Component/PropertyDetails";


const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Register" element={<RegistrationPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/PropertListing" element={<PropertyListing />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/" element={<PropertyListing />} />
        <Route path="/property/:id" element={<PropertyDetails />} />

    </Routes>
);

export default AppRoutes;