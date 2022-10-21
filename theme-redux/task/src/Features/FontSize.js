import { useSelector, useDispatch } from "react-redux";
import { addFont,removeFont } from './FontSizeSlice';
const FontSize =()=> {
  const dispatch = useDispatch();
  const fontSizee = useSelector((state) => state.value.fontSize);
  console.log('fontSizee')
  return (
    <div>
        <p>{fontSizee}</p>
        <div>
            <button onClick={()=> dispatch(addFont())}>+ add</button>
            <button onClick={()=> dispatch(removeFont())}>- remove</button>
            <p style={{fontSize : `${fontSizee}px`}}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum esse reprehenderit temporibus, doloremque possimus qui assumenda asperiores quis dolore quos dolorem, iusto iure ex explicabo voluptatum illum adipisci aliquam modi!
              </p>
              </div>
    </div>
  )
}
export default FontSize;





// import './Theme.css'
// import { useSelector, useDispatch } from "react-redux";
// import { addFont,removeFont } from './FontSizeSlice';

// export default function FontSize () {
//   const dispatch = useDispatch();
//   // const darkTheme = useSelector((state) => state.theme.value.darkTheme);
//   const fontSizee = useSelector((state) => state.value.fontSize);


//   // console.log(darkTheme);
//   // console.log(state)
//   return (
//     <div className={` ${fontSizee ? "add" : "remove"}`}>
//         <h1 style={{fontSize : `${fontSizee}px`}}>hhhhhhhhhhhhhhhhhhhhhhhhhhhhh</h1>
//       <button onClick={()=>{dispatch(addFont())}}> +Toggle Theme</button>
//       <button onClick={()=>{dispatch(removeFont())}}> - Toggle Theme</button>

//     </div>
//   );
// }

