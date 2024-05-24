
import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import { Button } from "../button/Button";
import closeIcon from "assests/icons/closeIcon.svg"



interface Props {
  open: boolean;
  title: string | JSX.Element;
  subTitle?: string;
  className?: string;
  showActionButtons?: boolean;
  confirmLabel?: string;
  cancelLabel?: string;
  loading?:boolean
  children: ReactNode;
  onClose: () => void;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export const Modal: React.FC<Props> = ({
  open,
  title,
  subTitle,
  className,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  showActionButtons = true,
  loading=false,
  onConfirm,
  onCancel,
  onClose,
  children,
}) => {
  if (!open) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="fixed z-50 inset-0 flex items-center justify-center">
      <div className="fixed inset-0 backdrop-filter backdrop-blur-0 bg-opacity-50 bg-black"></div>
      <div className={`z-10 bg-white rounded-md py-4 px-3 ${className}`}>
        <div className="flex justify-between items-center w-full">
          <div>
            <div className="text-lg font-bold">{title}</div>
            <div className="text-sm text-[#6D6D6D]">{subTitle}</div>
          </div>
          <img
            src={closeIcon}
            height={13}
            width={13}
            alt="lockIcon"
            className="iconButton"
            onClick={onClose}
          />
        </div>
        <div className="mt-2 mb-4 overflow-y-auto">{children}</div>
        {showActionButtons && (
          <div className="flex gap-4">
            <Button
              title={confirmLabel}
              onClick={onConfirm}
              className="w-full"
              isLoading={loading}
            />
            <Button
              title={cancelLabel}
              onClick={onClose}
              variant="teritary"
              className="w-full"
            />
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};
