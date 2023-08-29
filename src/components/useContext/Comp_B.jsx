import React, { useContext } from 'react';
import { ThemeContext } from "./UseContext_Comp";
export default function Comp_B() {
  // bước 3
    const theme = useContext(ThemeContext);
  return (
    <div>
      <p className={theme}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quia
        praesentium velit officiis doloremque placeat. Impedit quaerat ipsam
        quasi laudantium, eligendi incidunt illo excepturi omnis blanditiis, id
        quia aliquid porro.
      </p>
    </div>
  );
}
