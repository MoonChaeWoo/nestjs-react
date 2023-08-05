import React from 'react';
import { io } from 'socket.io-client';
import { useEffect } from 'react';
import { useState } from 'react';

const socketDiv = (msg : any) => {
    return(
        <div className='text-9xl'>{msg}</div>
    );
}

export default function Weather(){
        
    const [jsxWebSocketDiv, setJsxWebSocketDiv] = useState(<div>No Message</div>);
    //socket.emit('reqMsg', { react : 'react' });
    //socket.on('resMsg', (data) => console.log(data));
    //{ transports: ["websocket"] }을 넣어줘야 cors 해결 가능
    const socket = io('http://127.0.0.1:3002',{ transports: ["websocket"] });
    useEffect(() => {
      //socket.emit('reqMsg', 'React socket');
  
      return () => {
        socket.disconnect();
      };
    }, []);

    socket.on('broadcastReactResMsg', (resData) => {
        const {data} = resData;
        setJsxWebSocketDiv(socketDiv(data));
    });

    return(
        <div className='h-9/10'>
            <div>weather</div>
            <div>WebSocketMsg</div>
            <div>{jsxWebSocketDiv}</div>
        </div>
    )
}