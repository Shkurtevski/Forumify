import { NextPage } from "next";

const Register: NextPage = () => {
  return (
    <form className="register-form">
      <input
        type="text"
        name="username"
        id="username"
        placeholder="Your Email"
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Set Password"
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Repeat Password"
      />
      <div className="login-button">
        <button className="btn btn-font-size-medium">Register</button>
      </div>
    </form>
  );
};

export default Register;
