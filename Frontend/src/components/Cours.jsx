import React from "react";
import list from "../../public/list.json";
import Carts from "./Carts";
import { Link } from "react-router-dom"

function Cours() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 item-center justify-center text-center">
          <h1 className="text-2xl md-text-4xl ">
            We're delighted to heve you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus blanditiis libero id sit ipsa? Fuga, voluptatem.
            Eaque nostrum a quam id provident perferendis. Perspiciatis mollitia
            autem incidunt? Numquam quae sit reprehenderit unde corporis dolorem
            tenetur recusandae ducimus non, amet voluptatibus totam,
            necessitatibus accusantium! Voluptatem laudantium repellat
            inventore, laboriosam eius cumque!
          </p>

          <Link to="/">
            <button className=" mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>

        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 ">
          {list.map((item) => (
            <Carts key={item.id} item={item} />
          ))}
        </div>
      </div>
      ;
    </>
  );
}

export default Cours;
