import React, { useState } from 'react'
const totals = [100, 200, 300, 400];
export default function UseState_Comp() {
    // phạm vi viết code javascript 
    const [count, setCount] = useState(() => {
        console.log("inittial running");
      // đối với initialStatelà một callback thì nó sẽ lấy gí trị được return từ callback là initialState
      const totalCount = totals.reduce((prevValue, currentValue) => {
        return prevValue + currentValue;
      }, 0);
        
      return totalCount;
    }); 
     
    console.log("re-render");
    // hàm xử lý tăng
    const handleCount = () => {
        // cập nhật lại giá trị của state
        // setCount(count + 1);
        setCount((prevState) => {
            return prevState + 1;
        })
        setCount((prevState) => prevState + 1);
        setCount((prevState) => prevState + 2);
    };
  return (
    <>
          <h1>State:{count}</h1>
          <button onClick={handleCount}>Count</button>
    </>
  );
}
