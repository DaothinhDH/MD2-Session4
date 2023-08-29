import React, { useReducer, useState } from "react";
//useState
// + Khai báo giá trị khởi tạo
// + Bắt sự kiện tăng giảm

//useReducer
// + Khai báo giá trị khởi tạo
// + Bắt sự kiện tăng giảm
// + Tạo reducer để sử lý logic
// + Truyền dispath

//B1: khai báo giá trị khởi tạo
const initialValue = 0;

//B2: Tạo các hành động
const UP_ACTION = "up";
const DOWN_ACTION = "down";

/**
 * Hàm reducer
 * @param {*} state state hiện tại
 * @param {*} action hành động
 */

//B3: tạo hàm reducer
const reducer = (state, action) => {
  console.log("action==> ", action);
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      return state;
  }
};

export default function UseReducer() {
  //   const [count, setCount] = useState(0);

  //B4: gọi ra  useReducer
  const [count, dispatch] = useReducer(reducer, initialValue);

  //   //Hàm tăng
  //   const handleIncrease = () => {
  //     setCount(count + 1);
  //   };
  //   //Hàm giảm
  //   const handleDecrease = () => {
  //     setCount(count - 1);
  //   };

  return (
    <>
      <h3>Count: {count}</h3>
      <div>
        {/* <button onClick={handleIncrease}>Tăng</button>
        <button onClick={handleDecrease}>Giảm</button> */}
        <button onClick={() => dispatch(UP_ACTION)}>Tăng</button>
        <button onClick={() => dispatch(DOWN_ACTION)}>Giảm</button>
      </div>
    </>
  );
}
