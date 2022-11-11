import './Theme.css'
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../Features/ThemeSlice";

export default function Theme() {
  const dispatch = useDispatch();
  const darkTheme = useSelector((state) => state.theme.value.darkTheme);

  console.log(darkTheme);
  return (
    <div className={` ${darkTheme ? "dark" : "light"}`}>
      <button onClick={()=>{dispatch(toggleTheme())}}>Toggle Theme</button>
    </div>
  );
}

