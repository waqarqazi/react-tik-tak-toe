import { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAppState } from "../../redux/features/appStateSlice";

type Props = {
  state?: string;
  children: ReactNode;
  displayText?: string;
};

const PageWrapper = (props: Props) => {
  const dispatch = useDispatch();
  console.log("props==>", props);

  useEffect(() => {
    if (props.state) {
      dispatch(setAppState(props.state));
    }
  }, [dispatch, props]);
  // useEffect(() => {
  //   if (props.displayText) {
  //     dispatch(setAppState(props.displayText));
  //   }
  // }, [dispatch, props]);

  return <>{props.children}</>;
};

export default PageWrapper;
