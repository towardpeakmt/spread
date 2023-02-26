import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode;
}
const ProtectedRoute: React.FC<ProtectedRouteProps> = (props) => {
  const isAuth = localStorage.getItem("access_token") || null;

  return <>{isAuth ? props.children : <Navigate to="/login" />}</>;
};
export default ProtectedRoute;

// const ProtectedRoute: React.FC<ProtectedRouteProps> = (props) => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const checkUserToken = () => {
//     // const userToken = localStorage.getItem('user-token');
//     const userToken = true;
//     if (userToken && location.pathname.includes("login")) {
//       setIsLoggedIn(true);
//       return navigate("/");
//     }

//     if (!userToken) {
//       setIsLoggedIn(false);
//       return navigate("/login");
//     }
//     setIsLoggedIn(true);
//   };

//   useEffect(() => {
//     checkUserToken();
//   }, [isLoggedIn]);
//   return <>{isLoggedIn ? props.children : null}</>;
// };
