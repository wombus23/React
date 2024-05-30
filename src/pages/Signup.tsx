import { DefaultLayout } from "@/layouts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Loader } from "@/components/ui/loader";
import { Link, useNavigate } from "react-router-dom";
import signup from "@/assets/images/Signup/signup.png";

const Signup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const _onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      setLoading(true);

      const formData = new FormData(event.currentTarget);
      const email = formData.get("email");
      const password = formData.get("password");

      const response = await fetch("http://127.0.0.1:8000/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        setMessage("Signup successful");
        setError("");
        navigate("/login"); // Redirect to login page
      } else {
        const data = await response.json();
        setMessage("");
        setError(data.error || "Signup failed");
      }

      setLoading(false);
    } catch (error: any) {
      console.error("Error:", error);
      setMessage("");
      setError("Internal server error");
      setLoading(false);
    }
  };

  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 py-10 max-w-screen-lg min-h-[calc(100dvh-72px)] flex flex-col lg:flex-row items-center lg:justify-between gap-10 lg:gap-1 relative z-10">
        <img src={signup} alt="Login" className="max-w-[280px] lg:max-w-[487px]" />
        <form
          onSubmit={_onSubmit}
          className="flex flex-col gap-4 w-full max-w-[320px] p-[24px] rounded-lg bg-[#122941]"
          method="POST"
        >
          <h1 className="text-[20px]">Sign Up</h1>
          <p className="font-medium text-[10px] opacity-40">
            Welcome To Qanoon Bot. Register to become a member.
          </p>
          <Input
            required
            disabled={loading}
            type="text"
            name="email"
            placeholder="Email..."
            className="bg-[#224066] border-border"
          />
          <Input
            required
            disabled={loading}
            type="password"
            name="password"
            placeholder="Password..."
            className="bg-[#224066] border-border"
          />
          <Button variant={"dark"} type="submit" className="uppercase">
            {loading ? <Loader className="w-[18px] h-[18px]" /> : "Sign Up"}
          </Button>
          <p className="text-center text-[13px] uppercase">
            Already have an account?{" "}
            <Link
              className="text-primary-foreground py-1 px-2 font-bold rounded-full hover:bg-blue-800/10"
              to="/login"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
      <div className="blur-box w-[1130px] h-[508px] absolute blur-[306px] -right-[200px] -bottom-[200px] lg:-left-[500px] lg:bottom-0 bg-[#5550BC] lg:bg-[#62A283] z-0" />
    </DefaultLayout>
  );
};

export default Signup;
