// import React, { useState , useMemo, useEffect} from 'react'

// function Usememo() {

//     const [number,setNumber] = useState(0);
//     const [dark,setDark] = useState(false);
//     const doubleNumber = useMemo(()=>{
//         return slowFunction(number);
//     },[number]);

//     const themeStyles = useMemo(()=> {
//         return {
//         backgroundColor:  dark ? 'black' : 'white',
//         color: dark ? 'white' : 'black'
//      }
//     }, [dark]);

//     useEffect(()=>{
//         console.log('them change');
//     },[themeStyles])  
    

//   return (
//     <div>

//         <input type='number' value={number} onChange={e => setNumber(parseInt(e.target.value))}/><br/>
//         <button onClick={()=> setDark(prevDark => !prevDark)}>them</button>
//         <div style={themeStyles}>{doubleNumber}</div>
//     </div>
//   )
// }

// function slowFunction(num) {
//     console.log('slowfunction');
//     for (let i = 0; i < 1000000000 ; i++) {
//           return num * 2        
//     }
// }

// export default Usememo;
