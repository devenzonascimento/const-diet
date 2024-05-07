import { useState } from "react";

const useModalSate = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const toggleModal = () => setIsOpen(!isOpen);
  return { isOpen, openModal, closeModal, toggleModal };
};

export default useModalSate;
