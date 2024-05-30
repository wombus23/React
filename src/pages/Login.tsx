import { DefaultLayout } from "@/layouts";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Loader } from "@/components/ui/loader";
import { Link, useNavigate } from "react-router-dom";

import login from "@/assets/images/Login/login.png";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleClose = () => {
    setMessage("");
    setError("");
  };

  const _onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      setLoading(true);

      const formData = new FormData(event.currentTarget);
      const email = formData.get("email");
      const password = formData.get("password");

      const response = await fetch("http://127.0.0.1:8000/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Login successful");
        setError("");
        return navigate("/dashboard/chat"); // Redirect to chats page
      }

      setMessage("");
      setError(data.error || "Login failed");
    } catch (error: any) {
      console.error(error);
      setMessage("");
      setError("Internal server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 py-10 max-w-screen-lg min-h-[calc(100dvh-72px)] flex flex-col lg:flex-row items-center lg:justify-between gap-10 lg:gap-1 relative z-10">
        <img src={login} alt="Login" className="max-w-[280px] lg:max-w-[487px]" />
        <form
          onSubmit={_onSubmit}
          className="flex flex-col gap-4 w-full max-w-[320px] bg-[#141846] p-[24px] rounded-lg"
          method="POST"
        >
          <h1 className="text-[20px]">Login into Account</h1>
          <Input
            disabled={loading}
            type="text"
            name="email"
            placeholder="Email..."
            className="bg-[#24306A] border-border"
          />
          <Input
            disabled={loading}
            type="password"
            name="password"
            placeholder="Password..."
            className="bg-[#24306A] border-border"
          />
          <Button variant={"default"} type="submit" className="uppercase">
            {loading ? <Loader className="w-[18px] h-[18px]" /> : "Login"}
          </Button>
          <p className="text-center text-[13px] uppercase">
            Don't have an account?{" "}
            <Link
              className="text-primary-foreground py-1 px-2 font-bold rounded-full hover:bg-blue-800/10"
              to="/signup"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
      {/* Modal for displaying messages */}
      {message && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
          <div className="bg-white p-4 rounded shadow-md">
            <p className="text-green-500">{message}</p>
            <button
              onClick={handleClose}
              className="text-blue-500 mt-2 underline cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
      {error && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
          <div className="bg-white p-4 rounded shadow-md">
            <p className="text-red-500">{error}</p>
            <button
              onClick={handleClose}
              className="text-blue-500 mt-2 underline cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div className="blur-box w-[1130px] h-[508px] absolute blur-[306px] -right-[200px] -bottom-[200px] lg:-left-[500px] lg:bottom-0 bg-[#428DFC] lg:bg-[#7A8886] z-0" />
    </DefaultLayout>
  );
};

export default Login;
