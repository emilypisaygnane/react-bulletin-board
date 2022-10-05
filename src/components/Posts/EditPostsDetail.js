export default function EditPostDetail(title, description) {
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