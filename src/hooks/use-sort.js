import { useState } from "react";

function useSort(config, data) {
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  const setSortLabel = (label) => {
    if (sortBy && label !== sortBy) {
      setSortBy(label);
      setSortOrder("asc");
      return;
    }
    setSortOrder(
      sortOrder === null
        ? "asc"
        : sortOrder === "asc"
        ? "desc"
        : sortOrder === "desc"
        ? null
        : null
    );
    setSortBy(sortOrder === "desc" ? null : label);
  };

  let sortedData = data;

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
  }

  return {
    sortBy,
    sortOrder,
    setSortLabel,
    sortedData
  };

}

export default useSort;
