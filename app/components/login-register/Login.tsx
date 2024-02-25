import { NextPage } from "next";

const Login: NextPage = () => {
  return (
    <form>
      <input type="text" name="username" id="username" placeholder="Email" />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
      />
    </form>
  );
};

export default Login;
