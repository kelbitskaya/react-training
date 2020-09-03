import React,  { useState } from 'react';
import Button from '../common/button/Button';
import ModalWindow from '../modalWindow/ModalWindow';
import AddMovie from '../addMovie/AddMovie';

export default function AddButton() {
  const [isOpen, isShowPopup] = useState(false);

  const showPopup = () => {
    isShowPopup(!isOpen);
  };

  const hidePopup = () => {
    isShowPopup(false);
  };

  return (
    <div className="App">
      <Button
        className="button"
        title="+ Add movie"
        handleClick={showPopup}
      />
      <ModalWindow
        isOpen={isOpen}
        openModal={showPopup}
        modalContent={<AddMovie  handleClose={hidePopup} />}
      />
    </div>
  );
}
