
import request from "superagent";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await request.post("http://localhost:5000/logout");

      if (response.body.error === false) {
        toast.success("Logged out successfully");
        // Redirect the user to the login page
        navigate("/login");
      } else {
        toast.error("Logout failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during logout");
    }
  };

};

export default Logout;
