
import { useContext } from "react";
import { AuthContext } from "../Contex/authProvider";



const useAuth = () => {
    return useContext(AuthContext)
}
export default useAuth;