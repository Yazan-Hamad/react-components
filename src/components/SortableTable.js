
import useSort from "../hooks/use-sort";
import Table from "./Table";
import { GoChevronUp,GoChevronDown } from "react-icons/go";
function SortableTable(props) {
 const {config, data} = props;
  const {
    sortBy,
    sortOrder,
    setSortLabel,
    sortedData
  } = useSort(config, data);

  const sortingConfig = config.map((column)=>{
    if(!column.sortValue){
      return column;
    }
    return {
      ...column,
      header:()=>(
      <th
      className="cursor-pointer hover:bg-gray-100"
       onClick={()=>{setSortLabel(column.label)}}
       >
        <div className="flex items-center">
        {getIcons(column.label, sortBy, sortOrder)}
        {column.label}
        </div>
        </th>)
    }
  });



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
