import React from "react";

import Button from "./Button";

const AboutUs = () => {
  return (
    <div className="bg-white flex items-center h-auto md:h-screen w-full justify-between px-6 md:px-12 py-12">
      {/* left side which contains pic */}
      <div className="w-1/2 relative h-2/3 collage w-[min(92vw,900px)] hidden xl:block">
        <img
          src="https://plus.unsplash.com/premium_photo-1675859364880-198e17c9376a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="absolute w-[45%] top-0 left-0"
        />
        <img
          src="https://images.unsplash.com/photo-1499914485622-a88fac536970?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="absolute w-[45%] top-[22%] left-[38%]"
        />
        <img
          src="https://images.unsplash.com/photo-1615914143778-1a1a6e50c5dd?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="absolute w-[45%] bottom-[15%] left-0"
        />
      </div>
      {/* about us introduction */}
      <div className="w-full xl:w-1/2">
        <h3 className="about-title font-bold text-2xl md:text-5xl capitalize relative">
          about us
        </h3>
        <p className="my-8 text-gray  font-medium leading-relaxed text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae a
          culpa necessitatibus animi minima sed suscipit! Reiciendis, enim culpa
          possimus aliquam eius, labore, nemo rem illum cum sint nisi inventore!
          Numquam inventore distinctio praesentium! Quisquam temporibus fugiat
          velit rerum cumque facilis, autem architecto? Eius reprehenderit
          excepturi praesentium ipsa accusantium dicta assumenda, pariatur magni
          nam repudiandae corrupti incidunt suscipit. Quis, tempore? Aliquam,
          sit. Nobis fugiat impedit doloremque sed dolor accusantium dignissimos
          debitis asperiores, reiciendis voluptate ullam beatae optio modi est a
          nemo et praesentium alias, rerum natus? Quis voluptates alias minima.
          Dignissimos eos at id laborum animi fugit qui, eaque distinctio
          delectus dolore sint voluptate vel, voluptas porro maiores quae
          nostrum quo. Saepe, ex voluptate doloremque fugit deserunt adipisci
          quae laudantium. Accusantium in voluptates nihil. Eaque ullam nostrum
          sint! Quae doloribus non recusandae sunt minus dignissimos, eum,
          perferendis repellat voluptate officia tempore nobis. Voluptas dicta
          quis asperiores commodi blanditiis, temporibus vero.
        </p>
        <div className="w-full flex justify-end mt-16">
          <Button>see more</Button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
