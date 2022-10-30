import { useNavigate } from "react-router-dom";
import "./Signup.scss";

export const Signup = () => {
  const navigate = useNavigate();
  return (
    <section className="signup">
      <div className="card">
        <section className="left"></section>
        <section className="right">
          <h1>Signup</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Signup</button>
          </form>

          <hr className="divider" />
          <div className="sub">
            <p>Already have an account?</p>

            <button onClick={() => navigate("/login")}>Login</button>
          </div>
        </section>
      </div>
    </section>
  );
};
