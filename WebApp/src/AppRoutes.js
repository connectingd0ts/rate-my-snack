import { Route, Routes } from 'react-router-dom';
import Login from './Authentication/Login';
import Rate from './RateImage/RateImage';

const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Rate />} />
            <Route path="/rate" element={<Rate />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}

export default AppRoutes;