import React, { useEffect } from "react";
import Button from "../Button/Button";
import { Header, Text } from "../Text/Text";
import { IoMdClose } from "react-icons/io";
import "./Modal.scss";
import FadeIn from "react-fade-in/lib/FadeIn";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  show: boolean;
  onClose: () => void;
}

const Modal = ({ children, show, onClose }: ModalProps) => {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    // cleanup this component
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className={`--modal-overlay`}
          onClick={(e) => {
            onClose();
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.07 }}
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
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
