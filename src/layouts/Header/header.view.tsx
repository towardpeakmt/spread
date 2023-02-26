import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "@/store";
import { logOut } from "@/store/slices/authSlice/authSlice";
import Search from "@components/elements/Search";
import NavBar from "@components/elements/NavBar";
import Logo from "@assets/svg/system/Logo";

const HeaderView: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onLogOutClick = () => {
    dispatch(logOut());
    navigate("/login");
  };

  return (
    <header className="max-w-full bg-blue-700 h-16 flex items-center text-white">
      <div className="w-24 h-12 mx-4 my-2 align-items flex">
        <button
          onClick={onLogOutClick}
          className="flex justify-between items-center mx-4 my-2"
        >
          EXIT
          {/* <Logo /> */}
        </button>
      </div>
      {/*<Search />*/}
      <NavBar />
    </header>
  );
};

export default HeaderView;
