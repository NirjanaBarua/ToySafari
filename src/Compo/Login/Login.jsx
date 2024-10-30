import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const LoginPage = () => {
    const navigate = useNavigate();
    const { loginUser, signInWithGoogle } = useContext(AuthContext)
// sign in with email pass
    const handleContinuebtn = event => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(email, password);

        loginUser(email, password)
            .then(result => {
                console.log(result.user);
                navigate("/");
            })
            .catch(error => {
                console.log(error);
                alert('Incorrect email or password');
            })
    }
    //sign in with google
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                navigate("/");
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleSignUp = () => {
        navigate('/signup');
    }
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-gray rounded-lg ">
                <h2 className="text-3xl font-bold text-center mb-2">ToySafari</h2>


                <div className="flex justify-center mb-4">
                    <img
                        src="/images/doraemon.jpg"
                        alt="Teddy Bear"
                        className="w-36 h-36 rounded-full"
                    />
                </div>

                <form onSubmit={handleContinuebtn} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium">
                            Email address*
                        </label>
                        <input
                            type="email"
                            required name="email"
                            placeholder="username@site.com"
                            className="mt-1 block w-full px-4 py-2 border rounded-lg bg-gray-50"
                        />
                    </div>
                    <div >
                        <label className="block text-sm font-medium">
                            Password*
                        </label>
                        <input
                            type="password"
                            required name="password"
                            placeholder="Enter password"
                            className="mt-1 block w-full px-4 py-2 border rounded-lg bg-gray-50"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full font-bold py-2 px-4 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
                    >
                        Continue
                    </button>
                    <div className="text-center">
                        <p className="text-sm">
                            Don't have an account?{" "}
                            <a href="#" className="text-purple-600 hover:underline" onClick={handleSignUp}>
                                SignUp
                            </a>
                        </p>
                    </div>
                </form>

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
        </div>
    );
};

export default LoginPage;
