import { NextPage } from "next";
import React from "react";

async function getForumPosts() {
  const usersApiUrl = "https://forum-app-z6fe.onrender.com/forumPost";
  const res = await fetch(usersApiUrl, {
    cache: "no-store",
  });
  return res.json();
}

const Home: NextPage = async () => {
  const forumPosts = await getForumPosts();
  console.log(forumPosts);
  return (
    <main className="home">
      {forumPosts.map((forumPost: ForumPost) => (
        <p key={forumPost.id}>{forumPost.title}</p>
      ))}
    </main>
  );
};

export default Home;
