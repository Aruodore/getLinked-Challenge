import Section from "./UI/Section";
import girlsitting from '../assets/girlssitting.png'

export default function () {
    return (
      <>
        <Section>
          <Section.Half>
            <div className="md:w-full">
              <Section.Heading white="Rules and" colored="Guidelines" />
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
            <div className="md:w-full">
                <img src={girlsitting} alt="" />
            </div>
          </Section.Half>
        </Section>
      </>
    );
}