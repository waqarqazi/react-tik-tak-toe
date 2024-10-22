import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuthState, setOtpVerified } from "redux/features/appStateSlice";
//import { setAppState } from "redux/features/appStateSlice";

type Props = {};

const HomePage = (props: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogout = () => {
    try {
      dispatch(setAuthState(null));
      dispatch(setOtpVerified(false));
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <h1>Home</h1>
      <div onClick={onLogout}>
        <span>Logout</span>
      </div>
    </div>
  );
};

export default HomePage;
