import { NavLink } from "react-router-dom";

const Login = () => {
    return(
        <div>
            <h1>Login</h1>
            <form action="/">
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email"
                    id="email"
                    placeholder="Enter your email"
                    name="email"
                    required
                    />
                </div>
                
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password"
                    id="password"
                    placeholder="Enter your password"
                    name="password"
                    required
                    />
                </div>

                <button>Login</button>
            </form>
            <p>Create an account <NavLink to={'/signup'} className='underline'>Sign Up</NavLink>
            </p>
        </div>
    )
}

export default Login;