import { useCallback, useContext, useRef } from "react";
import MyContext from "../MyContext/MyContext";

export default function Home() {
  const { users, setName, inp, setInp } = useContext(MyContext);

  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.style.background = "blue";
    inputElement.current.style.color = "white";
    inputElement.current.value = "blue";
  };

  return (
    <div>
      <input type="text" ref={inputElement} className="border border-black" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
