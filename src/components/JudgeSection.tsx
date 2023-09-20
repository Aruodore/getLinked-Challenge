import manandwoman from '../assets/manandwoman.png'
import Section from './UI/Section';



export default function () {
    return (
      <>
        <Section>
          <Section.Half>
            <div className="md:w-full w-2/3 md:p-16">
              <img src={manandwoman} alt="" />
            </div>
            <div className="max-md:text-center md:w-full">
              
              <Section.Heading white='Judging Criteria' colored='Key Attributes'/>
              <div className="flex flex-col gap-4">
                <p>
                  <span className="text-uni font-medium">
                    Innovation and Creativity:
                  </span>
                  Evaluate the uniqueness and creativity of the solution.
                  Consider whether it addresses a real-world problem in a novel
                  way or introduces innovative features.
                </p>
                <p>
                  <span className="text-uni font-medium">Functionality:</span>:
                  Assess how well the solution works. Does it perform its
                  intended functions effectively and without major issues?
                  Judges would consider the completeness and robustness of the
                  solution.
                </p>
                <p>
                  <span className="text-uni font-medium">
                    Impact and Relevance:
                  </span>
                  Determine the potential impact of the solution in the real
                  world. Does it address a significant problem, and is it
                  relevant to the target audience? Judges would assess the
                  potential social, economic, or environmental benefits.
                </p>
                <p>
                  <span className="text-uni font-medium">
                    Technical Complexity:
                  </span>
                  Evaluate the technical sophistication of the solution. Judges
                  would consider the complexity of the code, the use of advanced
                  technologies or algorithms, and the scalability of the
                  solution.
                </p>
                <p>
                  <span className="text-uni font-medium">
                    Adherence to Hackathon Rules:
                  </span>
                  Judges will Ensure that the team adhered to the rules and
                  guidelines of the hackathon, including deadlines, use of
                  specific technologies or APIs, and any other
                  competition-specific requirements.
                </p>
                <Section.Btn>
                  Read more
                </Section.Btn>
              </div>
            </div>
          </Section.Half>
        </Section>
      </>
    );
}