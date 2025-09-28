import { ThreeDots } from "react-loader-spinner";

function Loader() {
  return (
    <ThreeDots
      visible={true}
      height="45"
      width="45"
      color="primary"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{ margin: "auto" }}
      wrapperClass=""
    />
  );
}

export default Loader;
