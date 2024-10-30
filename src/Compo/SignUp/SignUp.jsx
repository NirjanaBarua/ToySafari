import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUpPage = () => {
  const navigate = useNavigate();
  const { createUser, signInWithGoogle } = useContext(AuthContext);

  const [signuperror, setSignUpError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSignUpbtn = event => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log(name, email, password);

    if (password.length < 6) {
      setSignUpError('Password should be at least 6 characters or longer');
      return;
    }

    setSignUpError('');
    setSuccess('');

    createUser(email, password)
      .then(result => {
        console.log(result.user);

        toast.success("Account created successfully!", {
          position: "top-center",

        });
      })
      .catch(error => {
        console.log(error);
        setSignUpError(error.message);
        toast.error("Failed to create account", {
          position: "top-center",

        });
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(result => {
        console.log(result.user);
        navigate('/login')
      })
      .catch(error => {
        console.log(error);
      })
  }

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-xl p-6 bg-gray rounded-lg mt-8 mb-8">
        <h2 className="text-3xl font-bold text-center mb-2">Welcome to ToySafari</h2>

        {/* Panda image */}
        <div className="flex justify-center mb-4">
          <img
            src="/images/doraemon.jpg"
            alt="Panda"
            className="w-36 h-36 rounded-full"
          />
        </div>

        <form onSubmit={handleSignUpbtn} className="space-y-6">
          <div>
            <label className="block text-sm font-medium">Name*</label>
            <input
              type="text"
              required
              name="name"
              placeholder="Full Name"
              className="mt-1 block w-full px-4 py-2 border rounded-lg bg-gray-50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Email address*</label>
            <input
              type="email"
              required
              name="email"
              placeholder="username@site.com"
              className="mt-1 block w-full px-4 py-2 border rounded-lg bg-gray-50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Password*</label>
            <input
              type="password"
              required
              name="password"
              placeholder="Enter password"
              className="mt-1 block w-full px-4 py-2 border rounded-lg bg-gray-50"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Confirm Password*</label>
            <input
              type="password"
              required
              name="confirmPassword"
              placeholder="Confirm your password"
              className="mt-1 block w-full px-4 py-2 border rounded-lg bg-gray-50"
            />
          </div>

          <button
            type="submit"
            className="w-full font-bold py-2 px-4 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
          >
            Sign Up
          </button>

          <div className="text-center">
            <p className="text-sm">
              Already have an account?{" "}
              <a href="#" className="text-purple-600 hover:underline" onClick={handleLogin}>
                Login
              </a>
            </p>
          </div>
        </form>

        {/* {signuperror && <p className="text-red-500">{signuperror}</p>}
        {success && <p className="text-green-500">{success}</p>} */}

        <div className="relative flex py-4 items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-500">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <div className="space-y-3">
          <button onClick={handleGoogleSignIn}
            type="button"
            className="w-full py-2 px-4 border rounded-lg flex items-center justify-center space-x-3 bg-gray-50 hover:bg-purple-200"
          >
            <img
              src="/images/googlelogo.png"
              alt="Google"
              className="w-8 h-8"
            />
            <span>Continue with Google</span>
          </button>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default SignUpPage;
