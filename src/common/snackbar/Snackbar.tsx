import { useContext } from "react";
import ReactDOM from "react-dom";
import { SnackbarContext } from "./SnackbarContext";
import deleteImageIcon from "assests/icons/deleteImageIcon.svg"

const Snackbar: React.FC = () => {
  const snackbarCtx = useContext(SnackbarContext);
  if (!snackbarCtx.open) {
    return null;
  }

  return ReactDOM.createPortal(
    <>
      {snackbarCtx.open && (
        <div
          className={`top-0 fixed z-50 w-screen flex items-center justify-center`}
        >
          <div
            id="toast-success"
            className="flex items-center max-w-full md:max-w-[70%] min-w-[30%] text-white text-sm rounded-md shadow-md relative mt-[2%]"
            role="alert"
          >
            {snackbarCtx?.message && snackbarCtx?.message.type === "success" ? (
              <div className=" bg-primary w-full rounded-md p-3">
                {snackbarCtx?.message?.message}
              </div>
            ) : (
              <div className="bg-warning w-full rounded-md p-3">
                {snackbarCtx?.message?.message}
              </div>
            )}
            <img
              height={16}
              width={16}
              src={deleteImageIcon}
              alt="close"
              onClick={snackbarCtx?.onClose}
              className="absolute right-[5%] cursor-pointer"
            />
          </div>
        </div>
      )}
    </>,
    document.body
  );
};

export default Snackbar;
