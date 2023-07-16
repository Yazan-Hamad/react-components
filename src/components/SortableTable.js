import { useState } from "react";
import Table from "./Table";
import { GoChevronUp,GoChevronDown } from "react-icons/go";
function SortableTable(props) {

  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);
  
  const {config,data} = props;

  const handleClick = (label) =>{

    if(sortBy && label !== sortBy){
      setSortBy(label);
      setSortOrder('asc');
      return;
    }

    setSortOrder( sortOrder === null ? 'asc' : sortOrder === 'asc' ? 'desc' : sortOrder === 'desc' ? null : null);
    setSortBy( sortOrder === 'desc' ? null : label);
  };

  const sortingConfig = config.map((column)=>{
    if(!column.sortValue){
      return column;
    }
    return {
      ...column,
      header:()=>(
      <th
      className="cursor-pointer hover:bg-gray-100"
       onClick={()=>{handleClick(column.label)}}
       >
        <div className="flex items-center">
        {getIcons(column.label, sortBy, sortOrder)}
        {column.label}
        </div>
        </th>)
    }
  });

  let sortedData = data;

  let sortingStatus = null;

  if(sortBy && sortOrder){
    const {sortValue} = config.find(column => column.label === sortBy);
    sortedData = [...data].sort((a,b)=>{
      const A = sortValue(a);
      const B = sortValue(b);

      const order = sortOrder === 'asc' ? 1 : -1;

      if(typeof(A) === "string"){
        return A.localeCompare(B) * order;
      }
      else {return(A-B) * order;}
    });

    sortingStatus = <p>
      Data sorted by {sortBy} - {sortOrder}
    </p>
  }


  return (
      <Table {...props} config={sortingConfig} data={sortedData}/>
  );
}

function getIcons(label, sortBy, sortOrder){
  if(label !== sortBy){
    return <div><GoChevronUp/><GoChevronDown/></div>;
  }

  if(sortOrder === null){
    return <div><GoChevronUp/><GoChevronDown/></div>;
  } else
  if(sortOrder === 'asc'){
    return <div><GoChevronUp/></div>;
  } else
  if(sortOrder === 'desc'){
    return <div><GoChevronDown/></div>;
  }
}

export default SortableTable;
