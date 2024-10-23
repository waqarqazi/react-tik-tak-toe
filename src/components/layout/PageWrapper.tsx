import { ReactNode } from "react";

type Props = {
  state?: string;
  children: ReactNode;
  displayText?: string;
};

const PageWrapper = (props: Props) => {
  console.log("props==>", props);

  return <>{props.children}</>;
};

export default PageWrapper;
