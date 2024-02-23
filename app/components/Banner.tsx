import React from "react";

const Banner: React.FC = () => {
  return (
    <main>
      <div className="banner">
        <div className="banner-image"></div>
        <div className="banner-content">
          <h1 className="welcome-text">
            Welcome to Forumify.
          </h1>
          <p>Where IT Enthusiasts Connect & Collaborate!</p>
          <button className="btn">Proceed To Forumify.</button>
        </div>
      </div>
    </main>
  );
};

export default Banner;
