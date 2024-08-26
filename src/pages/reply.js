import React, { useState } from 'react';
import Editor from '../components/Editor';
import axios from 'axios';

const ReplyPage = ({ threadId }) => {
  const [body, setBody] = useState('');

  const handleReply = () => {
    axios.post(`/api/reply/${threadId}`, {
      from: "user@example.com",
      to: "recipient@example.com",
      subject: "Re: Your thread",
      body,
    }).then(() => {
   
    }).catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Reply to Thread</h2>
      <Editor value={body} onChange={(e) => setBody(e.target.value)} />
      <button onClick={handleReply}>Send Reply</button>
    </div>
  );
};

export default ReplyPage;
