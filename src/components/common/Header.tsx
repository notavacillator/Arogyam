import { Link } from "react-router-dom"

export const Header = () => {

  
  return (
    <>
      <header className="relative z-[999] bg-white">
        <nav className=" fixed top-[1.5rem] left-1/2 h-12 -translate-x-1/2  
                    sm:top-[1rem] sm:h-[initial]  lg:w-[60%] w-[60%] mx-auto  sm:rounded-full rounded-none
                  sm:clay-card  sm:py-[0.2rem] ">
          <ul className="flex justify-around items-center text-delft_blue-500 text-lg py-[0.5rem]">
            <li className="clay-button text-floral_white-900 font-robo py-2 px-3">Home</li>
            <li className="font-robo py-2 px-3">About</li>
            <li className="font-robo py-2 px-3">Contact</li>
            <li className="font-robo py-2 px-3">
              <Link to="/dashboard/profile">Profile</Link>
            </li>
            <li className="font-robo py-2 px-3">
              <Link to="/sign-up">Register</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
