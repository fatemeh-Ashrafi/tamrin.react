import './Theme.css'
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../Features/ThemeSlice";

export default function Theme() {
  const dispatch = useDispatch();
  const darkTheme = useSelector((state) => state.theme.value.darkTheme);

  console.log(darkTheme);
  // console.log(state)
  return (
    <div className={` ${darkTheme ? "dark" : "light"}`}>
        <h1>hhhhhhhhhhhhhhhhhhhhhhhhhhhhh</h1>
      <button onClick={()=>{dispatch(toggleTheme())}}>Toggle Theme</button>
    </div>
  );
}

