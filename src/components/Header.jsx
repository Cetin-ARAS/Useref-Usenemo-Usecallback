import React, { memo } from "react";
import cw from "../assets/cw_logo.png";

//! React.memo, componentleri hafızaya almak için kullanılır, render'ı önler 👇

//* 3. Kullanım --> export kısmında componenti "memo" ile sarmallıyoruz 👇
const Header = ({ img }) => {
  console.log("Rendering: Header Comp.");
  return (
    <div className="header">
      <img
        src={img ? img : cw}
        alt="cw_logo"
        style={{ margin: "1rem", maxHeight: "200px" }}
      />
    </div>
  );
};

export default memo(Header);

//* 2.Kullanım --> "memo" yu import kısmında destructure ederek burada React. demeden direk memo diyerek başlayabiliyoruz
// const Header = memo(({ img }) => {
//   console.log("Rendering: Header Comp.");
//   return (
//     <div className="header">
//       <img
//         src={img ? img : cw}
//         alt="cw_logo"
//         style={{ margin: "1rem", maxHeight: "200px" }}
//       />
//     </div>
//   );
// });

// export default Header;

//* 1.Kullanım
// const Header = React.memo(({ img }) => {
//   console.log("Rendering: Header Comp.");
//   return (
//     <div className="header">
//       <img
//         src={img ? img : cw}
//         alt="cw_logo"
//         style={{ margin: "1rem", maxHeight: "200px" }}
//       />
//     </div>
//   );
// });

// export default Header;