import Section from "./UI/Section";
import theBigIdea from '../assets/thebigidea.png'

export default function () {
    return (
      <>
        <Section>
          <Section.Half>
            <div className="md:w-full md:p-8 p-4">
              <img src={theBigIdea} alt="" />
            </div>
            <div className="md:w-full">
              <Section.Heading
                white="Introduction to getlinked"
                colored="tech Hackathon 1.0"
              />
              <p>
                Our tech hackathon is a melting pot of visionaries, and its
                purpose is as clear as day: to shape the future. Whether you're
                a coding genius, a design maverick, or a concept wizard, you'll
                have the chance to transform your ideas into reality. Solving
                real-world problems, pushing the boundaries of technology, and
                creating solutions that can change the world, that's what we're
                all about!
              </p>
            </div>
          </Section.Half>
        </Section>
      </>
    );
}