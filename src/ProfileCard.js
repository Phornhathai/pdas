function ProfileCard(props) {
  // props = {title : '...' , handle : '...'}
  // Destructuring เพื่อให้มีลักษณะคล้าย object
  // ส่วนใหญ่การทำงานจริง จะทำวิธี destructuring
  const { title, handle, image, description } = props;

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt="ProfileCardImage" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-5">{handle}</p>
        </div>
        <div className="content">{description}</div>
      </div>
    </div>
  );
}

export default ProfileCard;
