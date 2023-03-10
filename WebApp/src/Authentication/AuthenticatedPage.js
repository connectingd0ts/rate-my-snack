import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthenticatedPage = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('access_token');
        if (!token) {
            navigate('/login');
        }
    }, [navigate]);

    return (
        <>
            {children}
        </>
    );
};

export default AuthenticatedPage;