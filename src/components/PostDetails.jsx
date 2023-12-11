import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './PostDetails.css';

const PostDetail = () => {
  const { objectId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const response = await axios.get(`http://hn.algolia.com/api/v1/items/${objectId}`);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post details:', error);
      }
    };

    fetchPostDetails();
  }, [objectId]);

  return (
    <div className="post-detail-container">
      {post ? (
        <div>
          <h2>{post.title}</h2>
          <p>Points: {post.points}</p>
          <ul>
            {post.children && post.children.map((comment) => (
              <li key={comment.id}>{comment.text}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <div class="d-flex justify-content-center">
          <div class="spinner-border m-5" role="status">
          <span class="visually-hidden">Loading...</span>
         </div>
         </div>
      </div>
      )}
    </div>
  );
};

export default PostDetail;
