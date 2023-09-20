import FormBg from "../components/UI/FormBg"
import { AiOutlineInstagram } from "react-icons/ai";
import {RiTwitterXFill} from "react-icons/ri"
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { useMediaQuery } from 'react-responsive';

export default function () {
    const isMd = useMediaQuery({ query: "(min-width: 768px)" });
    return (
      <>
        <section className="container px-8 mx-auto mt-36 mb-16">
          <div className="flex-col  flex md:flex-row lg:px-16 gap-7">
            <div className="md:w-[35%] md:ml-24 flex flex-col gap-4">
              <h2 className="text-uni text-4xl font-semibold">Get in touch</h2>
              <p className="leading-4">
                Contact <br></br> <span>Information</span>
              </p>
              <p className=" leading-4">
                27,Alara Street<br></br> Yaba 100012<br></br> Lagos State
              </p>
              <div>
                <span>Call Us: </span>
                <a href="tel:+2347067981819">07067981819</a>
              </div>
              <div>
                <p className=" leading-4">
                  we are open from Monday-Friday <br></br> 08:00am - 05:00pm
                </p>
              </div>
              {isMd && (
                <div>
                  <h4 className="text-uni mb-4">Share on</h4>
                  <div className="flex gap-2 [&>svg]:w-6 [&>svg]:h-6">
                    <AiOutlineInstagram />
                    <RiTwitterXFill />
                    <BiLogoFacebook />
                    <BiLogoLinkedin />
                  </div>
                </div>
              )}
            </div>
            <FormBg className="p-8 md:px-20 grow md:mr-28">
              <h2 className="text-uni font-semibold text-xl">
                Questions or need assistance?
                <span className="block"> Let us know about it!</span>
              </h2>
              <form className="flex flex-col gap-8 mt-8">
                <div className="relative flex flex-col">
                  <input type="text" id="" className="contactInput" />
                  <span className="absolute left-4 top-2 duration-200">
                    First Name
                  </span>
                </div>
                <div className="relative flex flex-col">
                  <input type="text" id="" className="contactInput" />
                  <span className="absolute left-4 top-2 duration-200">
                    Name
                  </span>
                </div>
                <div className="relative flex flex-col">
                  <textarea id="" className="contactInput resize-none" />
                  <span className="absolute left-4 top-2 duration-200">
                    Message
                  </span>
                </div>
                <button className=" self-center px-8 py-2 bg-gradient-primary md:col-span-2 rounded">
                  Submit
                </button>
              </form>
            </FormBg>
            {!isMd && (
              <div className="self-center">
                <h4 className="text-uni mb-4">Share on</h4>
                <div className="flex gap-2 [&>svg]:w-6 [&>svg]:h-6">
                  <AiOutlineInstagram />
                  <RiTwitterXFill />
                  <BiLogoFacebook />
                  <BiLogoLinkedin />
                </div>
              </div>
            )}
          </div>
        </section>
      </>
    );
}