import { useState } from 'react';
import { useHistory, useParams, Redirect } from 'react-router-dom';
import { updatePost } from '../../services/fetchUtils';
import { usePost } from '../hooks/usePosts';
import { useUser } from '../context/UserContext';

export default function EditPostDetail() {
  const { id } = useParams();
  const { postDetail } = usePost(id);
  const [titleInput, setTitleInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const history = useHistory();

  const { userM } = useUser();
  if (!userM) {
    return <Redirect to="/auth" />;
  }
  
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
