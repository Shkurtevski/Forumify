import { NextPage } from "next";

const ForumPost: NextPage<ForumPost> = ({
  title,
  category,
  description,
  hashtags,
}) => {
  return (
    <div className="forum-post">
      <div className="forum-post-inner">
        <div className="main-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="hashtags">
          {hashtags.map((hashtag, index) => (
            <span key={index}>{hashtag}</span>
          ))}
        </div>
        <div className="category">
          <p>{category}</p>
        </div>
      </div>
    </div>
  );
};

export default ForumPost;
