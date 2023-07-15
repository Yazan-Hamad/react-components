import { useContext } from "react";
import NavigationContext from "../context/navigation";
import classNames from "classnames";
function Link({to,children}){
    const classes = classNames("text-blue-500");
const {navigate}=useContext(NavigationContext);
    const handleClick = (event)=>{
        if(event.metaKey || event.ctrlKey){
            return;
        }
        event.preventDefault();
        navigate(to);
    };

    return <a className={classes} href={to} onClick={handleClick}>{children}</a>
}

export default Link;