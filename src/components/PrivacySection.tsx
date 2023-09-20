import CheckIcon from "./UI/CheckIcon";
import Section from "./UI/Section";
import manPadLock from "../assets/manpadlock.png"
import LockIcon from "./UI/LockIcon";

export default function () {
    return (
      <>
        <Section>
          <Section.Half>
            <div className="md:w-full">
              <div>
                <Section.Heading white="Privacy Policy and" colored="Terms" />
                <p className=" font-light text-xs text-gray-500">
                  Last updated on September 12, 2023
                </p>
                <p>
                  Below are our privacy & policy, which outline a lot of
                  goodies. it’s our aim to always take of our participant
                </p>
              </div>
              <div className="border-uni border bg-opaque p-8">
                <p className="mb-6">
                  At getlinked tech Hackathon 1.0, we value your privacy and are
                  committed to protecting your personal information. This
                  Privacy Policy outlines how we collect, use, disclose, and
                  safeguard your data when you participate in our tech hackathon
                  event. By participating in our event, you consent to the
                  practices described in this policy.
                </p>
                <h3 className="text-uni font-bold mb-4">Licensing Policy</h3>
                <div>
                  <h4>Here are terms of our Standard License</h4>
                  <div>
                    <div className="flex gap-2 items-start">
                      <CheckIcon className="mt-2"/>
                      <p className="leading-8">
                        The Standard License grants you a non-exclusive right to
                        navigate and register for our event
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <CheckIcon className="mt-2"/>
                      <p className="leading-8">
                        You are licensed to use the item available at any free
                        source sites, for your project developement
                      </p>
                    </div>
                  </div>
                </div>
                <Section.Btn className="">Read more</Section.Btn>
              </div>
            </div>
            <div className="md:w-full ml-4 relative p-8">
                <div className="absolute hidden -z-10 left-20 -top-32">
                    <LockIcon/>
                </div>
                <div>
                    <img src={manPadLock} alt="" />
                </div>
            </div>
          </Section.Half>
        </Section>
      </>
    );
}