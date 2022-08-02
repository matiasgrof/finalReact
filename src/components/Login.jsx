import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import '../index.css';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { error, login, googleLogin, resetPassword } = useAuth();

  const handleChange = ({ target: { name, value } }) => {
    // console.log(name, value);
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(user.email, user.password);
  };

  const handleResetPassword = async () => {
    if (!user.email) return;
    try {
      await resetPassword(user.email);
      alert('We sent you an email. Please check your inbox');
    } catch (error) {
      console.log(error);
    }
  };

  // return (
  //   <div>
  //     {error.loginError && <p>{error.loginError}</p>}
  //     <form onSubmit={handleSubmit}>
  //       <label htmlFor="email">Email</label>
  //       <input type="text" name="email" placeholder="youremail@company.com" onChange={handleChange} />
  //       <label htmlFor="password">Password</label>
  //       <input type="password" name="password" placeholder="**************" onChange={handleChange} />
  //       <button>Login</button>
  //     </form>
  //     <button onClick={googleLogin}>Login with Google</button>
  //     <button onClick={handleResetPassword}>Forgot password?</button>
  //   </div>
  // );
  return (
    <div className="w-full max-w-xs m-auto">
      {error.loginError && <p>{error.loginError}</p>}

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input type="email" name="email" id="email" onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="youremail@company.tld" />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input type="password" name="password" id="password" onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="*************" />
        </div>

        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Sign In
          </button>
          <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#!" onClick={handleResetPassword}>
            Forgot Password?
          </a>
        </div>
      </form>
      <button onClick={googleLogin} className="bg-slate-50 hover:bg-slate-200 text-black  shadow rounded border-2 border-gray-300 py-2 px-4 w-full">
        Google login
      </button>
      <p className="my-4 text-sm flex justify-between px-3">
        Don't have an account?
        <Link to="/register" className="text-blue-700 hover:text-blue-900">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
