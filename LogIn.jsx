import PasswordInput from "./PasswordInput";

export default function LogIn() {
  return (
    <div className="bg-custombg sm:bg-white flex justify-center items-center min-h-screen min-w-min">
      {/*log in container*/}
      <div className="flex flex-col bg-custombg shadow-sm w-full min-h-screen sm:shadow-lg sm:rounded-md md:rounded-md lg:rounded-md xl:rounded-md sm:min-h-0 sm:h-auto lg:h-auto xl:h-auto max-w-md px-10 lg:px-8 xl:px-8 sm:py-8">
        <h2 className="text-customtxt font-bold text-4xl py-2 mt-8 sm:mt-4">
          Login
        </h2>
        {/*Google button */}
        <button className=" flex justify-center items-center rounded-lg text-customtxt font-medium gap-2 bg-secondary py-2 mt-14 mb-2 hover:bg-customhvr2 active:scale-95 active:shadow-none">
          {/*Google icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-google"
            viewBox="0 0 16 16"
          >
            <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
          </svg>
          Log in with google
        </button>
        {/* Section divider*/}
        <div className="mt-4 grid grid-cols-3 items-center text-customtxt">
          <hr className="border-customtxt" />
          <p className="text-center text-sm">OR</p>
          <hr className="border-customtxt" />
        </div>
        {/*Log in form ---- 2 input, 1 button */}
        <form
          method="POST"
          action=""
          autocomplete="on"
          className=" flex flex-col gap-4"
        >
          {/*Email input box*/}
          <input
            className="mt-4 p-2 bg-transparent border-2 border-customtxt focus:border-primary  focus:border-2 focus:outline-none"
            type="email"
            placeholder="Email Adress"
            name="mail"
            required
            autocomplete="email"
          />

          <PasswordInput />
          {/*Forgot link */}
          <a
            href="#"
            className="text-sm text-customtxt text-right hover:underline"
          >
            Forgot your password?
          </a>
          {/* Log in button*/}
          <button
            type="submit"
            className=" rounded-lg bg-primary shadow-md py-2 mt-2 hover:bg-customhvr1 text-customtxt font-medium
             active:scale-95 "
          >
            Login
          </button>
        </form>

        {/*Checkbox-- remember me 
        <label>
          <input type="checkbox" id="remember" className="pr-2" /> Remember me
        </label>*/}
        <hr className="border-gray-300 mt-12" />

        {/*Sign up link*/}
        <div className="flex justify-evenly items-center text-sm my-2 py-8">
          <p className="flex-1 text-customtxt">
            If you don't have an account...
          </p>
          <a
            href="/signup"
            className="rounded-lg border text-customtxt font-normal border-accent hover:border-2 px-4 py-2 whitespace-nowrap"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}
