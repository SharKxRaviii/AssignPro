import { NavLink } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <h1>Sign Up</h1>
      <form action="/">
      <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            name="name"
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            name="email"
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            name="password"
            required
          />
        </div>

        <button>Sign Up</button>
      </form>
      <p>
        Already have account <NavLink to={"/login"} className="underline">Login</NavLink>
      </p>
    </div>
  );
};

export default SignUp;
