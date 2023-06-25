import React from "react";

function Typography() {
  return (
    <div>
      <h1 className=" text-9xl pb-5 font-[forte]">Title 1</h1>
      <h1 className=" text-7xl font-my2">Title 2</h1>
      <h1 className=" text-base font-my text-ankit-100">Title 3</h1>
      <h3 className=" text-xl font-mono leading-10 bg-[#d8d5d5] rounded-xl p-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam vero
        quis molestias repellat quos illum sequi, nisi vitae repellendus eius
        error libero id officiis beatae asperiores aperiam. Porro, fugit. Iusto
        ratione, eum eos at minus officia eaque libero esse dicta magnam ut
        doloribus consequuntur harum suscipit. Dolores expedita neque
        praesentium?
      </h3>
    </div>
  );
}

export default Typography;

// add this in extends in tailwind.config.js
// fontSize:{
//     base:"200px"
//   },
// fontFamily:{
//     my:"'Concert One', cursive",
//     my2:"'Noto Sans TC', sans-serif"
//   }