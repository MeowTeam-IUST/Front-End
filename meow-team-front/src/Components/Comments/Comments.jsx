import React from 'react'
// import styles  from '../../Pages/ProductPage/ProductPage.module.scss'
import { useParams } from 'react-router-dom';
import styles from "./Comments.module.scss"
import { useState,useEffect } from 'react';
import Requests from '../../API/Requests';
export function Comment({ name, date, text, onDelete, imageUrl}) {
    return (
      <div className={styles.Comment}>
        <div className={styles.CommentHeaderSection}>
          <div className={styles.CommentHeaderProfileAndDate}>
            <div className={styles.CommentHeaderProfile}>  
            <div className={styles.CommentProfilePic} style={{backgroundImage: `url(${imageUrl || 'https://avatar.iran.liara.run/public/62'})`}}>
              
            </div>
              <div className={styles.CommentName}>{name}</div>
            </div>
            <div className={styles.CommentDate}>{date}</div>
          </div>
          <button className={styles.replyButton} onClick={onDelete}>
            <text className={styles.ReplyText}>حذف</text>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                 d="M20 7v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7H2V5h20v2h-2zm-9 3v7h2v-7h-2zM7 2h10v2H7V2z"
                fill="#E52A49"
              />
            </svg>
          </button>
        </div>
        <div className={styles.CommentText}>{text}</div>
      </div>
    );
}

export function UserBox({userlogo, usertext, onCommentSubmit,id}) {
    const [text, setText] = useState('');

    const [rating, setRating] = useState(0);
    // const id = id;
   

    const handleRating = (rate) => {
        setRating(rate);
    };

    const handleSubmit = () => {
        onCommentSubmit(text, rating, id);
        setText('');
        setRating(0);
    };
  
    return (
      <div className={styles.SendSection}>
        
        {/* <div className={styles.userlogo}></div> */}
        {/* {imageUrl ? (
                <div className={styles.userlogo} style={{backgroundImage: `url(${imageUrl})`}} />
                // <img src={imageURL} alt="User" />
              ) : (
                <img className={styles.userlogo} src="https://avatar.iran.liara.run/public/62" alt="Placeholder" />

              )} */}

        <textarea
          className={styles.InputText}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={usertext}
        />
        <div className={styles.SendButtonAndRateSection}>
          <button className={styles.SendButton} onClick={handleSubmit}>
            {" "}
            ار سال
          </button>
          <div>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={styles.star}
                onClick={() => handleRating(star)}
              >
                {star <= rating ? "★" : "☆"}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
}

export function CommentsSection({userbox, id}) {
  const [comments, setComments] = useState([]);
  
  const fetchComments = async () => {
    const commentsData = await Requests().getComments(id);
    setComments(commentsData);
    
  };
  useEffect(() => {
    fetchComments();
  }, [id]);

 
  const handleCommentSubmit = async (text, rating) => {
   
    const comment = {
      id: null, // You'll need to replace this with the actual ID
      categoryID: id, // And this with the actual category ID
     
      description: text
    };
    
    
    await Requests().postComment(comment);
    fetchComments(); // Fetch comments again after a new comment is posted
  };
  const handleCommentDelete = async (commentId) => {
  await Requests().deleteComment(commentId);
  fetchComments(); // Fetch comments again after a comment is deleted
};
  
  return (
    <div className={styles.AllComments}>
      <div className={styles.CommentsList}>
        {comments.map((comment, index) => (
          
          <Comment 
            key={index} 
            name={comment.userName}
            text={comment.description} 
            imageUrl={`https://45.147.99.177:9001/${comment.imageUrl}`}
            onDelete={() => handleCommentDelete(comment.id)}
            // include other fields as needed
          />
        ))}
      </div>

      <UserBox {...userbox}  onCommentSubmit={handleCommentSubmit} />
    </div>
  );
}