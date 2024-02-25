import { NextPage } from "next";

const Login: NextPage = () => {
  return (
    <form className="login-form">
      <input type="text" name="username" id="username" placeholder="Email" />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
      />
      <div className="login-button">
        <button className="btn btn-font-size-medium">Login</button>
      </div>
    </form>
  );
};

export default Login;
