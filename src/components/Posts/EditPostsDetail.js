// import React, { useContext } from 'react';
// import { UserContext } from '../context/UserContext';

import { useState } from 'react';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { updatePost } from '../../services/fetchUtils';
import { usePost, useUpdatePost } from '../hooks/usePosts';



export default function EditPostDetail() {
  const { id } = useParams();
  const { postDetail } = usePost(id);
  // console.log(postDetail.title);
  const [titleInput, setTitleInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  // const temp = useUpdatePost({ id, titleInput, descriptionInput });
  // console.log(temp);
  const history = useHistory();

  const handleSubmit = async () => {
    await updatePost(id, titleInput, descriptionInput);
    setTitleInput('');
    setDescriptionInput('');
    history.push(`/post/detail/${id}`);
  };

  return (
    <>
      <div>
        <h2>{postDetail.title}</h2>
        <input type="text" value={titleInput} onChange={(e) => setTitleInput(e.target.value)} />
        <p>{postDetail.description}</p>
        <input type="text" value={descriptionInput} onChange={(e) => setDescriptionInput(e.target.value)}/>
        <button className="edit-post" onClick={() => handleSubmit({ id, titleInput, descriptionInput })}>Save This Post</button>
        <button className="delete-post">Delete This Post</button>
      </div>
    </>
  );
}

// import { useParams } from 'react-router-dom';
// import { usePost } from '../../hooks/usePost';
// import { updatePost } from '../../services/posts';

// export default function EditPost() {
//   const { id } = useParams();
//   const { postDetail, setPostDetail } = usePost(id);

//   const handleSubmit = async () => {
//       await updatePost(postDetail.id, postDetail.title, postDetail.description);
//     }
//   };

//   return (
//     <div>
//       <label>Title</label>
//       <input type="text" value={postDetail.title} onChange={(e) => setPostDetail((prevPost) => ({ ...prevPost, title: e.target.value }))} />
//       <label>Description</label>
//       <input type="text" value={postDetail.description} onChange={(e) => setPostDetail((prevPost) => ({ ...prevPost, description: e.target.value }))} />
//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// }