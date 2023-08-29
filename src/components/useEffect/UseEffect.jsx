import React, { useEffect, useState } from "react";

export default function UseEffect() {
  //Cách 1:useEffect(callback)
  // + callback được gọi khi component được mounted(mount là component được gắn vào DOM)
  // + callback được gọi khi component được gắn vào DOM
  // + callback sẽ được gọi khi state thay đổi => ít dùng

  //Cách 2:useEffect(callback,[])
  //+ callback sẽ được gọi khi component được mounted
  //+ callback sẽ được gọi khi component được gắn vào DOM
  //+ callback chỉ đc gọi trong lần đầu tiên component đc render tương đương <=> componentDidMount trong lifecyce
  //Cách 3:useEffect(callback,[deps])
  //+ callback sẽ được gọi j=khi component được mounted
  //+ callback được gọi dependency(có thể là state,props hoặc dữ liệu khác ) thay đổi

  const [name, setname] = useState("");
  const [email, setEmail] = useState("");

  //Cách 1:
  // useEffect(() => {
  //   //tháy đổi tiêu đề trên tap trình duy
  //   document.title = name;
  //   console.log("useEffect được gọi...");
  // });

  //Cách 2:
  // useEffect(() => {
  //   // phù hợp cho việc gọi API để hiển thị thông tin
  //   console.log("useEffect ở cách thứ 2 được gọi...");
  // }, []);
  //  cách 3
  useEffect(() => {
    // phù hợp cho việc gọi API để hiển thị thông tin
    console.log("useEffect ở cách thứ 3 được gọi...",name);
  }, [name]);

  useEffect(() => {
    // phù hợp cho việc gọi API để hiển thị thông tin
    console.log("useEffect ở cách thứ 3 được gọi...",email);
  }, [email]); // sử dụng toán tử ===  để so sánh
   
  const handleSubmit = (e) => {
    e.preventDefault();
    // lấy dữ liệu từ các ô input và gửi lên sever
    const newUser = {
      name: name,
      email: email,
    };
    localStorage.setItem("user", JSON.stringify(newUser));
    console.log(newUser);
  };
  return (
    <>
      {console.log("render")}
      <form onSubmit={(e)=>handleSubmit(e)}>
        <input
          type="text"
          value={name}
          placeholder="Enter username..."
          onChange={(e) => setname(e.target.value)}
        />
        <input
          type="text"
          value={email}
          placeholder="Enter email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
