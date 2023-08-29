import React, { createContext, useState } from "react";
import Comp_A from "./Comp_A";

// comp_A =>comp_B =>Comp_C
// Từ A truyền xuống B qua Props
// Từ B truyền xuống C cũng thông  qua Props

// khai báo context ở component và export ra bên ngoài để sử dụng 
export const ThemeContext = createContext();  // bước 1

export default function UseContext_Comp() {
  const [theme, setTheme] = useState("light");

  const handleChangeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    // bước 2
    <ThemeContext.Provider value={theme}>
      <>
        <button onClick={handleChangeTheme}>Change theme</button>
        <Comp_A />
      </>
    </ThemeContext.Provider>
  );
}
