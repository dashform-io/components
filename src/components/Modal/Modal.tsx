import React from "react";
import Button from "../Button/Button";
import { Header, Text } from "../Text/Text";
import { IoMdClose } from "react-icons/io";
import "./Modal.scss";

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  show: boolean;
  onClose: () => void;
}

const Modal = ({ children, show, onClose }: ModalProps) => {
  return (
    <div
      className={`--modal-overlay --modal-${show}`}
      onClick={(e) => {
        onClose();
      }}
    >
      <div className="--modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="--modal-header">
          <Header is="h4">New application</Header>
          <Button onClick={onClose} variant="icon">
            <IoMdClose />
          </Button>
        </div>
        <div className="--modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
