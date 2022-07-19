import { Box, Modal as MuiModal, IconButton, Typography } from '@mui/material/';
import Calendar from 'components/single/Calendar/Calendar.jsx';
import {
  ModalWrapper,
  ExitIconBtn,
  Header,
} from 'components/single/Modal/styled';

export default function Modal({ open, handleClose, service }) {
  const handleClick = () => {
    handleClose();
  };

  return (
    <div>
      <MuiModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalWrapper>
          <ExitIconBtn onClick={handleClick} />
          <Header title={service} />
          <Calendar service={service} />
        </ModalWrapper>
      </MuiModal>
    </div>
  );
}
