import React, { useState } from "react";

export default function Exercise_Bt12() {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);    
  };

  return (
    <div>
      <h2>Đếm số ký tự</h2>
      <textarea value={text} onChange={handleChange}></textarea>
      <p>Số ký tự: {text.length}</p>
    </div>
  );
}
