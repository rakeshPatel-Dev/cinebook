import { Clapperboard } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "react-toastify";

// import your custom auth functions
import { registerUser, loginUser, googleSignIn } from "../firebase/auth";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [activeTab, setActiveTab] = useState<"Login" | "Sign Up">("Login");

  const formref = useRef<HTMLFormElement>(null);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  // ------------------------------------
  // SIGN UP
  // ------------------------------------
  const handleSignUp = async (evt: any) => {
    evt.preventDefault();

    if (password !== confirmPassword)
      return toast.error("Passwords do not match!");

    try {
      await registerUser(fullName, email, password);

      toast.success("Signup successful!");

      formref.current?.reset();
      setFullName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  // ------------------------------------
  // LOGIN
  // ------------------------------------
  const handleLogin = async (evt: any) => {
    evt.preventDefault();

    try {
      await loginUser(email, password);
      toast.success("Logged in successfully!");
      navigate("/");
    } catch (err: any) {
      toast.error(err.message);
    }
  };
  
  // ------------------------------------
  // GOOGLE LOGIN
  // ------------------------------------
  const handleGoogleLogin = async () => {
    try {
      await googleSignIn();
      toast.success("Google login successful!");
      navigate("/");
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-white dark:bg-[#121212] overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1">
          <div className="flex w-full flex-col items-center justify-center lg:flex-row">

            {/* LEFT SECTION */}
            <div className="relative hidden h-full flex-1 lg:flex">
              <div className="absolute inset-0 z-10 bg-black/50 backdrop-blur-sm" />
              <div
                className="w-full bg-center bg-no-repeat bg-cover aspect-auto flex-1"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCp19NzpFJvKjCrWrlppX2v-8kJPOLk-YIgx4ggfRX6XWQcGW8flznSeS9N4n82AzpKtr_bvJ67G3L02mzzBv2obUx_kB7nT_yuFF07E7etGV4lPBl0rVkBWGYbNPlkVuVbntNpPACLfZWQsyaezsttVxj02ALmXNuqgyCui7JRel8aAlVTs8RzjcVHJvHJyPpFwz98OXtlfk4dfEaXxLhWGs90q78H4wj2IrRRpLTVHtZHhH88Zu8cK7CyWCy9NDZNz4XjOZDcOAQ")',
                }}
              />
            </div>

            {/* RIGHT SECTION (FORM) */}
            <div className="flex w-full max-w-lg flex-col items-center justify-center p-8 lg:w-1/2 lg:shrink-0 lg:p-10">
              <div className="flex w-full max-w-sm flex-col gap-6">

                <div className="flex flex-col items-center gap-2 text-center">
                  <Clapperboard size={50} className="text-[#ec1337]" />
                  <h1 className="text-white text-3xl font-black">
                    {activeTab === "Login" ? "Welcome back!" : "Create Account"}
                  </h1>
                  <p className="text-gray-400 text-base">
                    {activeTab === "Login"
                      ? "Log in to book your next movie experience"
                      : "Sign up to start booking movies now"}
                  </p>
                </div>

                {/* FORM */}
                <form
                  ref={formref}
                  onSubmit={(e) =>
                    activeTab === "Login" ? handleLogin(e) : handleSignUp(e)
                  }
                  className="flex flex-col gap-4"
                >
                  {/* FULL NAME - Only signup */}
                  {activeTab === "Sign Up" && (
                    <label className="flex flex-col">
                      <p className="text-white text-sm pb-2">Full Name</p>
                      <input
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="form-input w-full rounded-lg border border-gray-700 bg-[#121212]/50 p-3 text-white"
                        placeholder="Enter your full name"
                        type="text"
                        required
                      />
                    </label>
                  )}

                  {/* EMAIL */}
                  <label className="flex flex-col">
                    <p className="text-white text-sm pb-2">Email</p>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-input w-full rounded-lg border border-gray-700 bg-[#121212]/50 p-3 text-white"
                      placeholder="Enter your email"
                      type="email"
                      required
                    />
                  </label>

                  {/* PASSWORD */}
                  <label className="flex flex-col">
                    <div className="flex items-center justify-between pb-2">
                      <p className="text-white text-sm">Password</p>
                      {activeTab === "Login" && (
                        <a className="text-[#ec1337] text-sm">Forgot Password?</a>
                      )}
                    </div>

                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-input w-full rounded-lg border border-gray-700 bg-[#121212]/50 p-3 text-white"
                      placeholder="Enter your password"
                      type="password"
                      required
                    />
                  </label>

                  {/* CONFIRM PASSWORD */}
                  {activeTab === "Sign Up" && (
                    <label className="flex flex-col">
                      <p className="text-white text-sm pb-2">Confirm Password</p>
                      <input
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="form-input w-full rounded-lg border border-gray-700 bg-[#121212]/50 p-3 text-white"
                        placeholder="Confirm your password"
                        type="password"
                        required
                      />
                    </label>
                  )}

                  {/* SUBMIT BUTTON */}
                  <button
                    type="submit"
                    className="flex h-12 w-full items-center justify-center rounded-lg bg-[#ec1337] text-white font-bold"
                  >
                    {activeTab === "Login" ? "Log In" : "Sign Up"}
                  </button>
                </form>

                {/* GOOGLE LOGIN */}
                <div className="flex items-center gap-4">
                  <hr className="flex-1 border-gray-700" />
                  <p className="text-gray-500 text-sm">Or continue with</p>
                  <hr className="flex-1 border-gray-700" />
                </div>

                <button
                  onClick={handleGoogleLogin}
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-gray-700 bg-[#121212]/50 text-white hover:bg-gray-800"
                >
                  <img alt="Google" src="/images/google.webp" className="h-5 w-5" />
                  <p>Google</p>
                </button>

                {/* SWITCH TABS */}
                <p className="text-center text-sm text-gray-400">
                  {activeTab === "Login"
                    ? "Don't have an account? "
                    : "Already have an account? "}
                  <span
                    onClick={() =>
                      setActiveTab(activeTab === "Login" ? "Sign Up" : "Login")
                    }
                    className="font-semibold text-[#ec1337] cursor-pointer"
                  >
                    {activeTab === "Login" ? "Sign Up" : "Log In"}
                  </span>
                </p>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
