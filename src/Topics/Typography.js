import React from "react";

function Typography() {
  return (
    <div>
      <h1 className=" text-9xl pb-5 font-[forte]">Title 1</h1>
      <h1 className=" text-7xl font-my2">Title 2</h1>
      <h1 className=" text-base font-my text-ankit-100">Title 3</h1>
      <ul className=" p-5 list-image-[url(https://tse2.mm.bing.net/th?id=OIP.3LLkhwuEM-gDA2sDFDy8QwHaHa&pid=Api&P=0&h=18)]">
        <li>Orange</li>
        <li>Grapes</li>
        <li>Apple</li>
      </ul>
      <h3 className=" text-xl font-mono leading-10 bg-[#d8d5d5] rounded-xl p-2 tracking-[1px] line-clamp-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam vero
        quis molestias repellat quos illum sequi, nisi vitae repellendus eius
        error libero id officiis beatae asperiores aperiam. Porro, fugit. Iusto
        ratione, eum eos at minus officia eaque libero esse dicta magnam ut
        doloribus consequuntur harum suscipit. Dolores expedita neque
        praesentium?
      </h3>
      <h4 className=" italic font-[1000]">Ankit Anand</h4>
      {/* font varinats */}
      <p className="diagonal-fractions">1/2</p>

      {/* background */}
      <div>
        <div className=" bg-png w-60 h-40 bg-no-repeat bg-cover bg-fixed"></div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit soluta porro nobis sunt nulla quae dolorum, dolor dolore maiores, incidunt impedit voluptatibus ex sequi quasi, odit optio? Maiores praesentium quia sequi commodi esse quas. Animi repudiandae eaque reiciendis amet sapiente eveniet nulla, atque fugit soluta? Pariatur vero error voluptate eos dolores quae, tempore amet aliquid dolorem iusto impedit, placeat provident debitis asperiores voluptatum deserunt esse earum non voluptatem doloremque. Ab eum officia, perspiciatis ratione praesentium magni quas a vel dignissimos maxime incidunt iusto sapiente nisi laudantium mollitia fuga alias totam omnis accusantium! Corporis aspernatur praesentium molestias sapiente eius ut enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto doloremque nesciunt totam est quia reiciendis hic dolor ad fugit laborum mollitia debitis vitae magnam omnis saepe accusamus quibusdam, magni dolores soluta! Vitae libero cumque esse eius ea nemo quod, dolor quos quasi quidem rem optio accusamus modi facilis eaque corporis voluptates velit placeat et sunt! Excepturi commodi voluptates possimus aut incidunt fugiat? Velit, at non nemo cumque explicabo quibusdam praesentium earum harum odit neque minima ex corporis ipsum, numquam voluptatum aspernatur deleniti laudantium iure repudiandae. Quos sapiente repellat quam praesentium.</p>
      </div>
    </div>
  );
}

export default Typography;