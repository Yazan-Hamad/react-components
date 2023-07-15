import Link from "./Link";

function SideBar(){
    const links = [
        {label:"Dropdown", path:'/'},
        {label:"Accordion", path:'/accordion'},
        {label:"Buttons", path:'/buttons'},
    ];
    const render = links.map((link)=>{
        return <Link className="mb-3" to={link.path} key={link.label}>
            {link.label}
        </Link>;
    });
    return (
        <div className="sticky top-0 overflow-y-scroll flex flex-col">
            {render}
        </div>
    );
}

export default SideBar;