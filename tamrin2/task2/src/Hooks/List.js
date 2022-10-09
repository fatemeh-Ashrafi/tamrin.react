// import React, { useEffect, useState } from 'react'

// function List({getItems}) {

//     const [items,setItems] = useState([]);

//     useEffect(()=>{
//         setItems(getItems(5));
//         console.log('update item');
//     },[getItems])

//   return (
//     items.map(item =>
//         <div key={item}>{item}</div>
//     )
//   )
// }
// export default List
///////////////////////////////////////////////////////////////////////////////////////////////////////////

// list Usedeferredvalue

// import React, { useMemo } from 'react'

// function List({input}) {

//     const LIST_SIZE = 20000;
//     const list = useMemo(()=>{
//         const l = []
//         for (let i = 0; i < LIST_SIZE; i++) {
//             l.push(<div key={i}>{input}</div>)
            
//         }
//         return l ;
//     },[input])

//   return list
// }

// export default List











