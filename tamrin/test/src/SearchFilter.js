import React, { useState } from 'react'

function SearchFilter() {
    const list = [
        "Banana",
        "Apple",
        "Orange",
        "Mango",
        "Pineapple",
        "Watermelon"
      ];
      const [filterList,setFilterList] = useState(list)

      const handleSearch = (event) =>{
        if (event.target.value === "") {
            setFilterList(list)
            return
        }

        const filteredValues = list.filter((item)=>
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1);
        setFilterList(filteredValues);
      }

      return(
        <div className='app'>
            <div>
                serch:<input type='text' onChange={handleSearch}></input>
            </div>
            {filterList && filterList.map((item, index) => (
                <div key={index}>{item}</div> 
        ))}
        </div>
    )
    
}
export default SearchFilter;
