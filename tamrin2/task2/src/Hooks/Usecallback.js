// import React, { useState , useCallback} from 'react';
// import List from './List';

// function Usecallback() {

//   const [number,setNumber] = useState(1);
//   const [dark,setDark] = useState(false);

//   const getItems = useCallback( (add)=>{
//     return [number + add , number+1+add , number+2+add]
//   },[number])

//   const theme = {
//     backgroundColor:  dark ? 'black' : 'white',
//     color: dark ? 'white' : 'black'
//   }


//   return (
//     <div style={theme}>
      
    
//       <input type='number' value={number} onChange={e => setNumber(parseInt(e.target.value))}/><br/>
//       <button onClick={()=> setDark(prevDark => !prevDark)}>them</button>
//       <List getItems={getItems}/>

//     </div>
//   )
// }

// export default Usecallback;
