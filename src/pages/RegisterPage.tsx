import { useMediaQuery } from 'react-responsive';
import sitting from '../assets/3d-graphic-designer-showing-thumbs-up-png.png'
import FormBg from '../components/UI/FormBg';

export default function () {
    const isMd = useMediaQuery({ query: "(min-width: 768px)" });
    return (
      <>
        <section className="container mt-36 mb-16 mx-auto md:px-16 flex max-md:flex-col items-center">
          <div className="img-container max-md:mx-auto w-[45%]">
            <img src={sitting} alt="" />
          </div>
          <FormBg className="grow p-16">
            <h2 className="text-uni text-4xl font-semibol mb-4">Register</h2>
            <p className='pb-8'>
              Be part of this movement! <span>🚶‍♂️🚶</span>
            </p>
            <form action="">
              <h3 className='mb-4'>CREATE YOUR ACCOUNT</h3>
              <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
                <div className="flex flex-col">
                  <label className="" htmlFor="name">
                    Teams's Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter the name of your group"
                    className="bg-transparent p-2 border border-[#ffffff7d] rounded "
                  />
                </div>
                <div className="flex flex-col">
                  <label className="" htmlFor="name">
                    Phone
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your phone number"
                    className="bg-transparent p-2 border border-[#ffffff7d] rounded "
                  />
                </div>
                <div className="flex flex-col">
                  <label className="" htmlFor="name">
                    Email
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your email address"
                    className="bg-transparent p-2 border border-[#ffffff7d] rounded "
                  />
                </div>
                <div className="flex flex-col">
                  <label className="" htmlFor="name">
                    Project Topic
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter the name of your group"
                    className="bg-transparent p-2 border border-[#ffffff7d] rounded "
                  />
                </div>
                <div className="md:col-span-2 flex gap-4">
                  <div className="flex flex-col md:w-1/2 max-md:grow">
                    <label className="" htmlFor="name">
                      Category
                    </label>
                    <select className="bg-transparent p-2 border border-[#ffffff7d] rounded ">
                      <option value="">Select Your Cartegory</option>
                    </select>
                  </div>
                  <div className="flex flex-col md:w-1/2 max-md:grow">
                    <label className="" htmlFor="name">
                      Group Size
                    </label>
                    <select className="bg-transparent p-2 border border-[#ffffff7d] rounded ">
                      <option value="">Select</option>
                    </select>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <p className="text-uni italic">
                    Please review your registration details before submitting
                  </p>
                  <div className="flex items-center">
                    <input type="checkbox" name="" id="agreed" hidden />
                    <label
                      htmlFor="agreed"
                      className="bg-transparent border border-[#ffffff7d] h-4 w-4 inline-block rounded"
                    ></label>
                    <span className="ml-4">
                      I agreed with the event terms and conditions and privacy
                      policy
                    </span>
                  </div>
                </div>
                <button className="py-4 bg-gradient-primary md:col-span-2 rounded ">
                  {isMd ? "Register Now" : "Submit"}
                </button>
              </div>
            </form>
          </FormBg>
        </section>
      </>
    );
}