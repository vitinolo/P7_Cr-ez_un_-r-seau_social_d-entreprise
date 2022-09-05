import "../styles/style.css";
import Comment from"./Comment";
import CommentsPublisher from "./CommentsPublisher";
import axios from "axios";
import React, { useState, useEffect } from 'react';

const Comments = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/comments')
      .then((res) => setData(res.data));   
  },[]);
      
  console.log({data})

  return (
    <div className="comments">{data.map((comment, index) => (
      <Comment key={index} comment={comment} />))}
      <CommentsPublisher />
    </div>
  );
}

export default Comments;
