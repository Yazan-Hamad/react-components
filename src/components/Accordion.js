import { useState } from "react";
import { GoChevronDown,GoChevronLeft } from "react-icons/go";
function Accordion({items}) {

    const [expandedIndex, setExpandedIndex] = useState(-1);

    const render = items.map((item, index)=>{
        const isExpanded = index === expandedIndex;
        const icon = <span className="text-xl">
            {isExpanded ? <GoChevronDown/> : <GoChevronLeft/>}
        </span>;
        const handleClick = (index) => {
            if(index === expandedIndex){
            setExpandedIndex(-1);
            }
            else {
                setExpandedIndex(index);
            }
        }
        return (
            <div key={item.id}>
                
                <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={()=>{handleClick(index)}}>
                    {item.label}
                    {icon}
                    </div>
                {isExpanded && <div>{item.content}</div>}
            </div>
        );
    });
    return(
        <div>
            {render}
        </div>
    );
}

export default Accordion;