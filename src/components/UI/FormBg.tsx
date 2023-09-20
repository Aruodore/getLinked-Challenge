export default function ({children, className}:{children:React.ReactNode, className?:string}) {
    return <div className={"formOverlay max-md:bg-transparent max-md:p-0 max-md:shadow-none"+className}>{ children }</div>
}