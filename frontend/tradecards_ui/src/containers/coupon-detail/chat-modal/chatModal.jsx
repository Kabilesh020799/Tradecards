import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Box, Button, Modal, TextField, Typography } from '@mui/material';
import { modalStyle } from './constant';
import './style.scss';

const ChatModal = (props) => {
  const {
    receiver,
    isOpen,
    onClose,
  } = props;

  // const [chats, setChats,] = useState([]);

  const getFirstLetter = (name) => {
    return name?.[0];
  };
  console.log(receiver);

  return (
    <Modal
      className='chat-modal'
      open={isOpen}
      onClose={onClose}
    >
      <Box sx={modalStyle}>
        <div className='chat-modal-header'>
          <Avatar>{getFirstLetter(receiver?.firstName)}</Avatar>
          <Typography
            className='chat-modal-header-title'
            variant="h6"
            component="h2"
          >
            {receiver?.firstName}
          </Typography>
        </div>
        <Typography
          sx={{ mt: 2, }}
          className='chat-modal-description'
        >
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
        <div className='chat-modal-sender'>
          <TextField
            type='text'
            onChange={null}
          />
          <Button><i className="fa-solid fa-paper-plane"></i></Button>
        </div>
      </Box>
    </Modal>
  );
};

ChatModal.propTypes = {
  receiver: PropTypes.shape({ firstName: PropTypes.string, }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ChatModal;
