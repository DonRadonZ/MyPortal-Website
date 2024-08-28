import { useNavigate } from "react-router-dom";

export function useLogout() {
    const navigate = useNavigate();
    const logout = navigate("/login");

    return { logout };
}