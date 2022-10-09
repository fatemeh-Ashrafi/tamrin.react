// import React, { useEffect, useRef, useState } from 'react'

// function Useref() {

//     const [name , setName] = useState("");

//     const prevName = useRef('')

//     useEffect(()=>{
//         prevName.current=name
//     },[name])

// ///////////////////////////////////////////////////////////////////////
//     // const inputRef = useRef()
//     // function focus() {
//     //     inputRef.current.focus(); 
//     //     inputRef.current.value = "fatemeh"
//     // }
// ///////////////////////////////////////////////////////////////////////////
//     // const rendredCount  = useRef(0);
//     // useEffect(()=>{
//     //     rendredCount.current = rendredCount.current +1
//     // })

//   return (
//     <div>
//       <input ref={inputRef} value={name} onChange={(e)=> setName(e.target.value)}></input>
//       {/* <div> my name is {name}</div> */}
//       {/* <div>i rendred {rendredCount.current} items</div> */}
//       {/* <button onClick={focus}>focus</button> */}
//       <div> my name is {name} and {prevName.current}</div>

//     </div>
//   )
// }

// export default Useref
