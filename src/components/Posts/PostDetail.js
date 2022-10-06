// import { useContext } from 'react';
// import { Redirect } from 'react-router-dom';
// import { UserContext } from '../context/UserContext';

export default function PostDetail({ title, description }) {

  // const { user } = useContext(UserContext);
  // if (!user) {
  //   return <Redirect to="/auth" />;
  // }

  // if (user === user.id) {
  //   return (
  //     <>
  //       <div>
  //         <h2>{title}</h2>
  //         <p>{description}</p> 
  //         <button className="edit-post">Edit This Post</button>
  //       </div>
  //     </>
  //   );
  // }

  return (
    <>
      <div>
        <h2>{title}</h2>
        <p>{description}</p> 
      </div>
    </>
  );
}