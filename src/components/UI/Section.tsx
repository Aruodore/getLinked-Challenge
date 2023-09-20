function Section({children, className}:{children:React.ReactNode, className?:string}) {
    return <>
    <section className={className}>
        <div className="container mx-auto">
            
        {children}
        </div>
    </section>
    
    </>
}

function SectionHalf({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
    return (
      <div
        className={
          "flex flex-col md:flex-row items-center p-4 md:p-16 " + className
        }
      >
        {children}
      </div>
    );
}

function SectionHeading({white,colored, className}: {white:string,colored:string,className?:string}) {
    return (
      <>
        <h2 className={"font-semibold text-4xl tracking-tighter leading-8 mb-8 "+className}>
          {white}
          <span className="text-uni  block">{colored}</span>
        </h2>
      </>
    );
}

function SectionBtn({className, children}:{className?:string, children:React.ReactNode}) {
    return (
      <>
        <a
          href="#"
          className={" max-md:self-center self-start px-8 py-2 bg-gradient-primary md:col-span-2 rounded "+ className}
        >
            {children}
        </a>
      </>
    );
}


Section.Half = SectionHalf;
Section.Heading = SectionHeading;
Section.Btn = SectionBtn;

export default Section;