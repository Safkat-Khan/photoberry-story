import { motion } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import bg from "../../Assets/Backgounds/blob-scene-haikei (1).svg";
import { AuthContext } from "../../ConetextProvider/ContextProvider";
import { updateProfile } from "firebase/auth";
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
import Aos from "aos";
import "aos/dist/aos.css";
 

let imgs = [];
const specialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;

const Register = () => {
const images = useLoaderData();
imgs = images;
const navigate = useNavigate()
const { state } = useLocation();
const { emailSignUp , googleSignIn , facebookSignIn } = useContext(AuthContext);
const [show,setShow] = useState(false)
const [err,setErr] = useState(null);

useEffect(() => {
  Aos.init();
}, []);


  const handleSubmit = (e) => {
   
    e.preventDefault();
    setErr(null)
    // const email = e.target.email.value;
    // const password = e.target.password.value;
    const form = new FormData(e.currentTarget);
    const displayName = form.get("name");
    const photoURL = form.get("photoUrl");
    const email = form.get("email");
    const password = form.get("password");

    if(password.length < 6) {
       setErr('Password must be at least 6 characters!')
        return;
    }


    if(!/[A-Z]/.test(password)){
        setErr('Password must contain at least 1 upper case letter!')
        return;
    }

    if(!specialCharacter.test(password)){
         setErr("Password should have at least 1 special character!");
        return;
    }

    if(!/\d/.test(password)){
         setErr("Password must contain at least 1 number!");
        return;
    }
    
    emailSignUp(email, password)
    .then(res=> {
       updateProfile(res.user, {
        displayName,photoURL
       })
        navigate(state ? state : "/");
        toast.success(`We are honored ${displayName}!`, {
          position: "bottom-center",
        });
    })
    .catch(err=> {
        console.log(err.message);
        setErr(`${err.message.slice(22, 42)}!`);
    })



  };
const socialSignUp = (media) => {
    media()
    .then(res=> {
        console.log(res.user)
         navigate(state ? state : "/");
         
          toast.success(`We are honored ${res.user.displayName}!`, {
            position: "bottom-center",
          });
    })
    .catch(err => {
        console.log(err)
    })
}
  

  return (
    <section className="relative bg-black  bg-opacity-60 py-20">
      <Helmet>
        <title>Photoberry | Register</title>
      </Helmet>
      <div>
        <div
          data-aos="zoom-out-up"
          className="max-w-md relative z-10  py-10 px-12 mx-auto space-y-8  bg-black text-white bg-opacity-50 backdrop-blur-md rounded-md"
        >
          <h2 className="font-semibold text-3xl">Register Account</h2>
          <hr />
          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="font-semibold">Your Name</p>
            <input
              required
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered w-full bg-gray-100 text-black"
            />
            <p className="font-semibold">Your Photo</p>
            <input
              type="url"
              name="photoUrl"
              placeholder="Your photo url"
              className="input input-bordered w-full bg-gray-100 text-black"
            />
            <p className="font-semibold">Your Email</p>
            <input
              required
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full bg-gray-100 text-black"
            />
            <p className="font-semibold">Set Password</p>
            <div className="relative">
              <input
                id="password"
                required
                type={`${show ? "text" : "password"}`}
                name="password"
                placeholder="Password must be at-least 6 characters"
                className="input input-bordered w-full bg-gray-100 text-black"
              />
              <div
                className="hover:cursor-pointer absolute right-3 bottom-3 text-black text-xl"
                onClick={() => {
                  setShow(!show);
                }}
              >
                {!show ? <AiFillEyeInvisible /> : <AiFillEye />}
              </div>
            </div>
            {err && (
              <div className="text-red-500 rounded-lg p-2 bg-white font-serif font-light">
                <p>{err}</p>
              </div>
            )}
            <div className="space-y-8">
              <div className="flex items-center gap-2">
                <input
                  required
                  type="checkbox"
                  className="checkbox checkbox-sm bg-white"
                  name=""
                  id=""
                />
                <label>
                  Accept{" "}
                  <a className="hover:underline" href="">
                    Terms & Conditions
                  </a>
                </label>
              </div>
              <input
                type="submit"
                value="Register"
                className="btn btn-neutral outline outline-white bg-black text-white w-full"
              />
            </div>
          </form>
          <div>
            <div className="mt-3">
              <div className="flex justify-center gap-5 items-center mb-2">
                <div className="w-16 h-[1px] bg-white"></div>
                <h2 className="text-xl font-bold ">or</h2>
                <div className="w-16 h-[1px] bg-white"></div>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => socialSignUp(googleSignIn)}
                  className="btn w-full bg-white btn-outline"
                >
                  <FcGoogle className="text-2xl" /> SignUp with Google
                </button>
                <button
                  onClick={() => socialSignUp(facebookSignIn)}
                  className="btn w-full bg-white btn-outline"
                >
                  {" "}
                  <BsFacebook className="text-2xl" /> SignUp with Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute top-0 w-full h-full object-cover opacity-50"
        src={bg}
        alt=""
      />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const generateSquares = () => {
  return shuffle(imgs).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default Register;
