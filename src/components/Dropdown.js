import { useEffect, useRef, useState } from "react";
import Panel from "./Panel";
import { GoChevronDown } from "react-icons/go";
function Dropdown({options, value, onChange}){
    const [isOpen, setIsOpen] = useState(false);
    const divElement = useRef();
    useEffect(()=>{
        const handler = (event)=>{
            if(!divElement.current){
                return;
            }
            if(!divElement.current.contains(event.target)){
                setIsOpen(false);
            }
        };
        document.addEventListener("click",handler,true);

        return ()=>{
            document.removeEventListener("click",handler);
        };
    },[]);

   const handleClick = ()=>{
        setIsOpen(!isOpen);
    };
   const handleSelection = (option)=>{
        setIsOpen(false);
        onChange(option);
    };

    const render = options.map((option)=>{
        return (
        <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1" 
        key={option.value}
        onClick={()=>handleSelection(option)}
        >
            {option.label}
        </div>);
    });

    return (
    <div ref={divElement} className="w-48 relative">
        <Panel onClick={handleClick} className="flex justify-between items-center cursor-pointer">     
            {value?.label || 'Select...'}
            <GoChevronDown className="text-lg"/>
            </Panel>
        {isOpen && (
        <Panel className="absolute top-full">
            {render}
            </Panel>
            )}
    </div>
    );
}

export default Dropdown;