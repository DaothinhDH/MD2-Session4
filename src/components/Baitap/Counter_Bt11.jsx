import React, { useState } from 'react'

export default function Counter_Bt11() {
  const [count, setCount] = useState(0);
  // hàm tăng
    const handleCounter = () => {
      setCount(count + 1);
  }
  // hàm giảm
     const handleDecrease = () => {
       setCount(count - 1);
     };
  
  return (
    <>
      <h2>count:{count}</h2>
      <button onClick={handleCounter}>Tăng:</button>
      <button onClick={handleDecrease}>giảm:</button>
    </>
  );
}
