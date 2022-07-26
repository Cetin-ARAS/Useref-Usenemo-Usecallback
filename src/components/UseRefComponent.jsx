import React, { useEffect, useRef } from "react";

const UseRefComponent = () => {
  //* useRef birinci kullanım
  //* DOM elementlerine ulaşmamızı sağlar
  const inputRef = useRef(null);
  const divRef = useRef();
  useEffect(() => {
    //? Sayfa ilk yüklendiğinde cursor'un input elementinin içinde yerini alması için 👇
    // document.querySelector("input").focus();
    //! useRef HTML elementinin .current değerinden DOM a ulaşır
    console.log(inputRef.current);
    inputRef.current.focus();
  }, []);

  const changeBgColor = () => {
    // divRef.current.style.backgroundColor = "orange";
    // const colors = [
    //   "orange",
    //   "pink",
    //   "purple",
    //   "red",
    //   "#00FF00",
    //   "rgb(150, 150, 150)",
    // ];
    // const random = Math.trunc(Math.random() * colors.length);
    // divRef.current.style.backgroundColor = colors[random];
    divRef.current.style.backgroundColor = inputRef.current.value;
  };

  return (
    <div ref={divRef} className="useref">
      <h2>UseRef Component</h2>
      <input ref={inputRef} type="color" placeholder="Enter text..." />
      <button onClick={changeBgColor}>ChangeBgColor</button>
    </div>
  );
};

export default UseRefComponent;