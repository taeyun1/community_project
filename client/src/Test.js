import React, { useState } from "react";

function Test() {
  const [Temp, setTemp] = useState(0);
  const [Test, setTest] = useState("test");
  const [Arr, setArr] = useState([1, 2]);

  const [Boolean, setBoolean] = useState(false);

  const onBoolean = () => {
    setBoolean(!Boolean);
  };

  return (
    <>
      {Boolean ? (
        <button onClick={onBoolean}>누르면 없어짐</button>
      ) : (
        <button onClick={onBoolean}>누르면 나타남</button>
      )}

      {Boolean ? <h1>짜잔!</h1> : null}

      <h2 className={Test}>Text컴포넌트 : {Temp} </h2>

      <button
        onClick={() => {
          setTemp(Temp + 1);
        }}
      >
        증가
      </button>
      <button
        onClick={() => {
          if (Temp === 0) {
            setTemp(0);
          } else {
            setTemp(Temp - 1);
          }
        }}
      >
        감소
      </button>

      <br />

      <button
        onClick={() => {
          let newArr = [...Arr];
          newArr.push(newArr.length + 1); // Arr의 총갯수의 + 1을 추가
          setArr([...newArr]);
        }}
      >
        숫자 1씩 증가, 푸쉬
      </button>
      {Arr.map((arr, idx) => (
        <span key={idx}>{arr} </span>
      ))}
    </>
  );
}

export default Test;
