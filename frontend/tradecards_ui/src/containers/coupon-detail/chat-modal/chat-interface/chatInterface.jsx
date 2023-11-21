import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from '@mui/material';

const Chat = (props) => {
  const {
    message,
    receiver,
    sender,
  } = props;
  const getInitial = (name) => name?.[0];

  if (message?.senderId === receiver?.uid) {
    return (
      <div className='receiver-chat'>
        <Avatar>{getInitial(receiver?.firstName)}</Avatar>
        <div className='receiver-chat-msg'>{message?.text}</div>
      </div>
    );
  } else if (message?.senderId === sender?.uid) {
    return (
      <div className='sender-chat'>
        <Avatar>{getInitial(receiver?.firstName)}</Avatar>
        <div className='sender-chat-msg'>{message?.text}</div>
      </div>
    );
  }
};

Chat.propTypes = {
  message: PropTypes.shape({
    senderId: PropTypes.string,
    text: PropTypes.string,
  }),
  receiver: PropTypes.shape({
    uid: PropTypes.string,
    firstName: PropTypes.string,
  }),
  sender: PropTypes.shape({
    uid: PropTypes.string,
    firstName: PropTypes.string,
  }),
};

Chat.defaultProps = {
  messages: [],
  receiver: {},
  sender: {},
};

const ChatInterface = (props) => {
  const {
    messages,
    receiver,
    sender,
  } = props;

  return (
    <div className='chat-interface'>
      {
        messages?.map((message) => (
          <div key={message?.id}>
            <Chat
              message={message}
              receiver={receiver}
              sender={sender}
            />
          </div>
        ))
      }
    </div>
  );
};

ChatInterface.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({})),
  receiver: PropTypes.shape({
    uid: PropTypes.string,
    firstName: PropTypes.string,
  }),
  sender: PropTypes.shape({
    uid: PropTypes.string,
    firstName: PropTypes.string,
  }),
};

ChatInterface.defaultProps = {
  messages: [],
  receiver: {},
  sender: {},
};

export default ChatInterface;
