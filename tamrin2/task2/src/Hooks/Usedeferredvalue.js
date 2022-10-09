// import React, { useState , useMemo , useDeferredValue} from 'react';
// // import List from './List';

// function Usedeferredvalue() {
//     const [input,setInput] = useState("")

//     function handleChange(e) {
//         setInput(e.target.value)
//     }

//     function List({input}) {

//       const LIST_SIZE = 20000;
//       const deferredValue = useDeferredValue(input)
//       const list = useMemo(()=>{
//           const l = []
//           for (let i = 0; i < LIST_SIZE; i++) {
//               l.push(<div key={i}>{deferredValue}</div>)
              
//           }
//           return l ;
//       },[deferredValue])
  
//     return list
//   }


//   return (
//     <div>

//         <input type="text" value={input} onChange={handleChange}/>
//         {<List input={input}/>}
      
//     </div>
//   )
// }

// export default Usedeferredvalue
