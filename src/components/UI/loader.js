import { createPortal } from "react-dom";
export const Backdrop = (props) => {
  console.log(props)
  const handleClick = () => {
    console.log("..");
    if (props.onClose) {
      props.OnClose();
    }
  };
  return (
    <>
      <div onClick={handleClick} className="loader-overlay"></div>
    </>
  );
};
const Loader = () => {
  return createPortal(
    <>
      <div className="loader-overlay"></div>
      <div className="loading-dots">
        <div>Loading</div>
        <div className="loading-dots--dot"></div>
        <div className="loading-dots--dot"></div>
        <div className="loading-dots--dot"></div>
      </div>
    </>,
    document.getElementById("loader-root")
  );
};

export default Loader;
