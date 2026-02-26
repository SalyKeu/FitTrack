import { useNavigate } from "react-router-dom";
import google from "../assets/google.png";
import { useState } from "react";
import { useAuth } from "../context/AuthProvider";

function RegisterWithEmail() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { handleSignUp, loading } = useAuth();


  const handleClose = () => {
    navigate("/Homepage");
  };
  const navigateLogin = () => {
    navigate("/login");
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (userName.trim() === "" || email.trim() === ""){
      setError("Please fill in all fields");
      return;
    }
    if (password.length < 6 || confirmPassword.length < 6 || password !== confirmPassword){
      setError("Password must be at least 6 characters and match the confirmation password")
      return;
    }
   setIsLoading(true);

   const result = await handleSignUp(email, password, userName);
   if (result === "Sign up successful") {
    alert("account created sucessfully");
    navigate("/login");
   }
   else {
    setError(result);
    setIsLoading(false);
    return
   }
   setIsLoading(false);
   navigate("/home");
      
  };
  return (
    <div className="bg-white/40 backdrop-blur-[3px] fixed inset-0 items-center justify-center flex z-50">
      <div className="bg-white w-100 max-h-[90vh] space-y-4 task-container rounded-lg p-4 relative">
        <button
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-2xl font-bold text-black hover:text-gray-300 transition-colors duration-150"
          onClick={handleClose}
        >
          ×
        </button>
        <div className="flex flex-col">
          <h2 className="text-xl font-bold text-black font-sans">
            Create your account
          </h2>
          <p>Enter your details below to create your account</p>
        </div>
        <div>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}
          <form className="space-y-2" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label className="text-black text-sm font-sans font-bold">
                User Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full p-2 border-black border-2 rounded"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-black text-sm font-sans font-bold">
                Email
              </label>
              <input
                type="email"
                placeholder="m@example.com"
                className="w-full p-2 border-black border-2 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex justify-between items-center mt-8">
              <label className="text-black text-sm font-sans font-bold">
                Password
              </label>
            </div>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-2 border-black border-2 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex flex-col gap-2">
              <label className="text-black text-sm font-sans font-bold">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full p-2 border-black border-2 rounded"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              disabled={isLoading || loading}
              className="w-full mt-4 py-2 bg-primary text-white font-bold rounded hover:bg-primary-dark transition-colors duration-150 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isLoading || loading ? "Creating account..." : "Sign Up"}
            </button>
            <p className="text-center mt-8 text-md font-sans">
              ━━━━━━━ Or continue with ━━━━━━━
            </p>
            <div className="w-full border-2 border-black rounded hover:bg-gray-300 transition-colors duration-150">
              <button className="w-full flex items-center justify-center gap-2 py-2 px-4 font-bold transition-colors duration-150"
              type="button">
                <img src={google} alt="google" />
                {/* <google className="text-xl text-[#DB4437]" /> */}
                Continue with Google
              </button>
            </div>
            <button className="w-full flex justify-center items-center mt-6 py-2 hover:underline"
            type="button"onClick={navigateLogin}>
                Already have an account?
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterWithEmail;
