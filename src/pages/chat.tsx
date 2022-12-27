import { useEffect } from 'react';
import { Manager, io } from 'socket.io-client';
import ChatContent from '../components/pages-components/chat';

// const socket: Socket = io({
//   path: '/socket',
//   hostname: 'http://192.168.100.213' ,
//   port: 4000
// });

const Chat = () => {
  // const socket = io('http://192.168.100.213:8000/socket.io')
  // socket.connect()

  const manager = new Manager('http://192.168.100.213:8000/socket.io')

  const socket = manager.socket('/')

  manager.open((err) => {
    if (err) {
      console.log('err', err)
    } else {
      console.log('success');
    }
  })

  const sendMessage = () => {
    console.log('clicked')
    socket.emit('send', "Hehe")
  }

  socket.on('hello', (data) => {
    console.log(data);
  })

  // useEffect(() => {
  //   sendMessage()
  // }, [])

  return (
    <button onClick={sendMessage}>send</button>
    // <ChatContent />
  );
};

export default Chat;