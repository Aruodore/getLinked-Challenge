import { Link, NavLink } from "react-router-dom";
import Nav from "./Nav";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import NavIcon from "./UI/NavIcon";

export default function () {
  const [navIsShown, SetNavIsShown] = useState(false);
  function HandleShown() {
    SetNavIsShown(prev=>!navIsShown)
  }
  const isMd = useMediaQuery({ query: "(min-width: 768px)" });
    return (
      <>
        <header className="px-10 py-8 fixed left-0 top-0 right-0 z-10 bg-secondary relative">
          <div className="container mx-auto flex justify-between">
            <div className="md:ml-20">
              <h2 className=" text-4xl tracking-tighter font-bold">
                <span>get</span>
                <span className=" text-uni">linked</span>
              </h2>
            </div>
       
              {!isMd&& <button onClick={HandleShown}><NavIcon/></button>}
              {(isMd || navIsShown) &&<><Nav/> </>}
             
          
          </div>
        </header>
      </>
    );
}