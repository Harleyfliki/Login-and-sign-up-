export default function SingUp() {
  return (
    <div className="flex justify-center items-center min-w-min min-h-screen bg-custombg sm:bg-white">
      {/*log in container*/}
      <div className="flex flex-col bg-custombg shadow-sm w-full min-h-screen max-w-md sm:shadow-lg sm:rounded-md sm:min-h-0 sm:h-auto px-10 lg:px-8 sm:py-8">
        <h2 className="text-customtxt text-bold text-4xl py-2 mt-8 sm:mt-6">
          Sign up
        </h2>
        <p className="text-customtxt text-sm py-2 mt-2">Create your account</p>
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
          Sign up with google
        </button>
        {/* Section divider*/}
        <div className="mt-4 grid grid-cols-3 items-center text-customtxt">
          <hr className="border-customtxt" />
          <p className="text-center text-sm">OR</p>
          <hr className="border-customtxt" />
        </div>
        <form className="flex flex-col">
          {/*Email input box*/}
          <input
            className="mt-4 p-2 bg-transparent border-2 border-customtxt focus:border-primary focus:outline-none"
            type="email"
            placeholder="Email Adress"
            name="mail"
            required
            autocomplete="email"
          />
        </form>
      </div>
    </div>
  );
}
