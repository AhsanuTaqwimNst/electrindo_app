import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import { FaUser } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <div className="relative lg:flex h-[100vh] ">
        <div className="lg:w-[60%] bg-black pt-8">
          <div>
            <div className="w-[500px] h-[250px] mx-auto relative lg:mt-16">
              <img
                className="absolute lg:mt-28 mx-auto inset-x-0 z-10 "
                src={logo3}
              />
              <img className="absolute inset-x-0 mx-auto" src={logo2} />
            </div>
          </div>
          <div>
            <h1 className="text-7xl text-white text-center font-bold lg:mt-4">
              Digitalization
            </h1>
            <h1 className="text-7xl text-white text-center font-bold mt-4">
              {" "}
              Assembly Frame Plant 6
            </h1>
          </div>
        </div>
        <div className="lg:w-[40%] p-12 bg-gray-600">
          <div className="bg-white pt-14 pb-6 px-8">
            <div className="flex justify-center">
              <FaUser size={70} />
            </div>
            <div>
              <h1 className="text-center font-bold text-2xl mt-3">Login</h1>
            </div>
            <div>
              <p className="text-center mt-4">
                Enter your email and password below
              </p>
              <form>
                <label htmlFor="email">EMAIL</label>
                <input
                  id="email"
                  type="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:outline-green-500 w-full px-4 py-2 mb-3"
                  placeholder="Email address"
                />
                <div className="flex justify-between mt-8">
                  <label htmlFor="password">PASSWORD</label>
                  <p>Forgot password?</p>
                </div>
                <input
                  id="password"
                  type="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:outline-green-500 w-full px-4 py-2 mb-3"
                  placeholder="password"
                />
                <button className="text-center w-full px-14 py-4 bg-blue-500 rounded-md font-bold text-white">
                  Log In
                </button>
                <p className="text-center my-5">
                  Don't have an account?{" "}
                  <span className="text-blue-500">Sign up</span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
