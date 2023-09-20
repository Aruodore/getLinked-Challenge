import { NavLink } from "react-router-dom";

function NavTab({link}: {link: string}) {
    return (
      <>
        <li>
          <NavLink to={"/"+link.toLowerCase()} className={({isActive})=>(isActive?'navLink isActive': 'navLink')}>{link}</NavLink>
        </li>
      </>
    );
}

export default function () {
    return (
        <div className="flex gap-12 items-center md:mr-10 max-md:flex-col max-md:absolute max-md:top-full max-md:bg-secondary max-md:right-0">
        <nav>
          <ul className="flex gap-8 max-md:gap-2 max-md:flex-col">
            {["Timeline", "Overview", "FAQs", "Contact"].map((el) => (
              <NavTab link={el} />
            ))}
          </ul>
        </nav>
        <div>
          <NavLink
            to={"/register"}
            className={({ isActive }) =>
              isActive ? "registerNav isActive" : "registerNav"
            }
          >
            Register
          </NavLink>
        </div>
      </div>
    );
}