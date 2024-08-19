import React from 'react';

interface ModalProps {
  show: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, onConfirm }) => {
  if (!show) return null;

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.id === "modal") {
      onClose();
    }
  };

  return (
    <div
      id="modal"
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleClose}
    >
      <div className="p-8 rounded-md relative w-80 text-center bg-slate-400">
        <h2 className="text-2xl mb-4">New Cylinder?</h2>
        <div className="flex justify-evenly">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={onConfirm}
          >
            Yes
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded"
            onClick={onClose}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;