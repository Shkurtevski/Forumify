import React from "react";

async function getForumPosts() {
  const usersApiUrl = "https://forum-app-z6fe.onrender.com/forumPost";
  const res = await fetch(usersApiUrl, {
    cache: "no-store",
  });
  return res.json();
}

const ForumContainer = async () => {
  const forumPosts = await getForumPosts();
  console.log(forumPosts);
  return (
    <main>
      <div className="forum-container">
        {forumPosts.map((forumPost: ForumPost) => (
          <p key={forumPost.id}>{forumPost.title}</p>
        ))}
      </div>
    </main>
  );
};

export default ForumContainer;
