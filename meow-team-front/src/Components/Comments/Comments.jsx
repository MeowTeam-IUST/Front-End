import React from 'react'
// import styles  from '../../Pages/ProductPage/ProductPage.module.scss'
import { useParams } from 'react-router-dom';
import styles from "./Comments.module.scss"
import { useState,useEffect } from 'react';
import Requests from '../../API/Requests';
export function Comment({logo, name, date, text, imageURL}) {
    return (
      <div className={styles.Comment}>
        <div className={styles.CommentHeaderSection}>
          <div className={styles.CommentHeaderProfileAndDate}>
            <div className={styles.CommentHeaderProfile}>
              <div className={styles.CommentProfilePic}>  
                <img src={imageURL} alt="User" /></div>
              <div className={styles.CommentName}>{name}</div>
            </div>
            <div className={styles.CommentDate}>{date}</div>
          </div>
          <button className={styles.replyButton}>
            <text className={styles.ReplyText}>پاسخ</text>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none"
            >
              <path
                d="M0.227189 4.64639L5.0398 0.490549C5.46106 0.126745 6.125 0.422089 6.125 0.987213V3.17617C10.5172 3.22646 14 4.10675 14 8.26917C14 9.9492 12.9177 11.6136 11.7214 12.4837C11.348 12.7553 10.816 12.4145 10.9536 11.9743C12.1935 8.00914 10.3655 6.95645 6.125 6.89541V9.29935C6.125 9.86537 5.46056 10.1594 5.0398 9.79601L0.227189 5.63975C-0.0755195 5.37829 -0.0759395 4.90822 0.227189 4.64639Z"
                fill="#E52A49"
              />
            </svg>
          </button>
        </div>
        <div className={styles.CommentText}>{text}</div>
      </div>
    );
}

export function UserBox({userlogo, usertext, onCommentSubmit}) {
    const [text, setText] = useState('');

    const [rating, setRating] = useState(0);
    const id = 1;

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
        <div className={styles.userlogo}>{userlogo}</div>
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

  return (
    <div className={styles.AllComments}>
      <div className={styles.CommentsList}>
        {comments.map((comment, index) => (
          <Comment 
            key={index} 
            text={comment.description}
            imageURL={comment.imageURL} 
            // include other fields as needed
          />
        ))}
      </div>

      <UserBox {...userbox} onCommentSubmit={handleCommentSubmit} />
    </div>
  );
}