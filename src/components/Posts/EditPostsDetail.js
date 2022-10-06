import React from 'react';

export default function EditPostDetail({ title, description }) {
  return (
    <>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <button className="edit-post">Save This Post</button>
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