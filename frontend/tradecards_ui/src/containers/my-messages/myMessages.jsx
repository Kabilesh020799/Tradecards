import React, { useContext, useEffect, useState } from 'react';
import { AuthorizationContext } from '../../context/AuthorizationContext';
import { ChatContext } from '../../context/chatContext';
import {
  Timestamp,
  arrayUnion,
  // arrayUnion, collection,
  doc,
  //  getDoc, getDocs,
  onSnapshot,
  // query, serverTimestamp, setDoc,
  updateDoc
  //  where
} from 'firebase/firestore';
import { db } from '../../firebase';
// import { getStorage } from '../../common-utils';
import { v4 as uuid } from 'uuid';
import { Avatar, Button, TextField, Typography } from '@mui/material';
import ChatInterface from '../coupon-detail/chat-modal/chat-interface';
import NavBar from '../../components/nav-bar';

const MyMessages = () => {
  const { user, } = useContext(AuthorizationContext);
  const { data, dispatch, } = useContext(ChatContext);
  const [chats, setChats,] = useState([]);
  const [messages, setMessages,] = useState([]);
  // const [receiverDetails, setReceiverDetails,] = useState({});
  const [newChat, setNewChat,] = useState('');
  console.log(chats, messages);
  const [selectedReceiver, setSelectedReceiver,] = useState([]);

  // const handleChats = async (receiverDetail) => {
  //   const chatID = user?.uid > receiverDetail?.uid
  //     ? user?.uid + receiverDetail?.uid
  //     : receiverDetail?.uid + user?.uid;
  //   try {
  //     const res = await getDoc(doc(db, 'chats', chatID));
  //     if (!res.exists()) {
  //       await setDoc(doc(db, 'chats', chatID), { messages: [], });
  //       await updateDoc(doc(db, 'userChats', user?.uid), {
  //         [chatID + '.userInfo']: {
  //           uid: receiverDetail?.uid,
  //           firstName: receiverDetail?.firstName,
  //           emailID: receiver?.emailID,
  //         },
  //         [chatID + '.date']: serverTimestamp(),
  //       });
  //       await updateDoc(doc(db, 'userChats', receiverDetail?.uid), {
  //         [chatID + '.userInfo']: {
  //           uid: user?.uid,
  //           firstName: user?.displayName || JSON.parse(getStorage('userInfo')).firstName,
  //           emailID: user?.email || JSON.parse(getStorage('userInfo')).emailID,
  //         },
  //         [chatID + '.date']: serverTimestamp(),
  //       });
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const getReceiverDetails = async () => {
  //   const qry = query(
  //     collection(db, 'users'),
  //     where('email', '==', receiver?.emailID)
  //   );
  //   try {
  //     const qrySnap = await getDocs(qry);
  //     let receiverDetail = null;
  //     qrySnap.forEach((doc) => {
  //       receiverDetail = doc.data();
  //       setReceiverDetails(doc.data());
  //     });
  //     handleChats(receiverDetail);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, 'userChats', user.uid), (doc) => {
        setChats(doc.data());
      });
      return () => {
        unsub();
      };
    };
    user?.uid && getChats();
  }, [user?.uid,]);

  useEffect(() => {
    if (Object.entries(chats)?.length) dispatch({ type: 'CHANGE_USER', payload: Object.entries(chats)?.[0]?.[1]?.userInfo, });
  }, [chats,]);

  // useEffect(() => {
  //   if (Object.keys(receiver).length !== 0) {
  //     getReceiverDetails();
  //   }
  // }, [receiver,]);

  useEffect(() => {
    if (selectedReceiver?.length) {
      const unSub = onSnapshot(doc(db, 'chats', selectedReceiver?.[0]), (doc) => {
        console.log(doc.data());
        doc.exists() && setMessages(doc.data().messages);
      });
      return () => {
        if (selectedReceiver?.length) unSub();
      };
    }
  }, [selectedReceiver,]);

  const getFirstLetter = (name) => {
    return name?.[0];
  };
  const onSendMsg = async () => {
    await updateDoc(doc(db, 'chats', data.chatId), {
      messages: arrayUnion({
        id: uuid(),
        text: newChat,
        senderId: user?.uid,
        date: Timestamp.now(),
      }),
    });
    setNewChat('');
  };

  return (
    <>
    <NavBar />
    <div className='my-messages'>
      <div className='left-container'>
        {
          Object.entries(chats)?.map((chatItem) => (
            <div
              className='left-container-user'
              key={chatItem?.[0]}
              onClick={() => setSelectedReceiver(chatItem)}
            >
              <Avatar>{getFirstLetter(chatItem?.[1]?.userInfo?.firstName)}</Avatar>
              <div>{chatItem?.[1]?.userInfo?.firstName}</div>
            </div>
          ))
        }
      </div>
      <div className='right-container'>
        <div className='chat-modal-header'>
          <Avatar>{getFirstLetter(selectedReceiver?.[1]?.userInfo?.firstName)}</Avatar>
          <Typography
            className='chat-modal-header-title'
            variant="h6"
            component="h2"
          >
            {selectedReceiver?.[1]?.userInfo?.firstName}
          </Typography>
        </div>
        <Typography
          sx={{ mt: 2, }}
          className='chat-modal-description'
        >
          <ChatInterface
            messages={messages}
            receiver={selectedReceiver?.[1]?.userInfo}
            sender={user}
          />
        </Typography>
        <div className='chat-modal-sender'>
          <TextField
            type='text'
            onChange={(e) => setNewChat(e.target.value)}
            value={newChat}
            className='chat-modal-sender-input'
            onKeyDown={(e) => { if (e.key === 'Enter') onSendMsg(); }}
          />
          <Button onClick={onSendMsg}><i className="fa-solid fa-paper-plane"></i></Button>
        </div>
        </div>
    </div>
    </>
  );
};

export default MyMessages;
