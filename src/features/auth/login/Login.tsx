import { useNavigate } from "react-router-dom";
import "./Login.scss";

export const Login = () => {
  const navigate = useNavigate();

  return (
    <section className="login">
      <div className="card">
        <section className="left"></section>
        <section className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>

          <hr className="divider" />
          <div className="sub">
            <p>Don't have an account?</p>
            <button onClick={() => navigate("/signup")}>Signup</button>
          </div>
        </section>
      </div>
    </section>
  );
};
