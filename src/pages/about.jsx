import React from "react";
import CheckIcon from "@mui/icons-material/Check";
const about = () => {
  return (
    <div>
      <ul className="flex mx-6 my-8 font-bold">
        <li className="mx-28 border-b-4 border-violet-900 py-5 px-9">ABOUT</li>
        <li className="mx-28 py-5 px-9">INSTRUCTOR</li>
        <li className="mx-28 py-5 px-9">REVIEWS</li>
      </ul>
      <div className=" ml-16 mt-7 mb-8">
        <h1 className="font-bold text-3xl">About the Course</h1>
        <p className=" my-10 text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem est
          adipisci quod voluptas odit quam a illum provident quaerat, id dolorem
          eum, reprehenderit ducimus, maiores sequi fugit sunt totam saepe?Lorem
          ipsum dolor sit amet consectetur adipisicing elit. In nulla
          voluptatibus voluptatum ut aliquid consectetur saepe minus, reiciendis
          a non.
        </p>
        <p className="my-10 text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem est
          adipisci quod voluptas odit quam a illum provident quaerat, id dolorem
          eum, reprehenderit ducimus, maiores sequi fugit sunt totam saepe?Lorem
          ipsum dolor sit amet
        </p>
        <p className="my-10 text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem est
          adipisci quod voluptas odit quam a illum provident quaerat, id dolorem
          eum, reprehenderit ducimus, maiores sequi fugit sunt totam saepe?Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Magni facere
          tenetur nihil? Natus eum culpa facilis nostrum praesentium, autem
          blanditiis!
        </p>
      </div>
      <div className=" ml-16 mt-7 mb-8">
        <h1 className="font-bold text-3xl my-6">
          What to expect from the course
        </h1>
        <ul className="text-xl my-4">
          <li>
            <CheckIcon className="mx-2" /> Learn to mange your relationships
          </li>
          <li>
            <CheckIcon className="mx-2" />
            Better communication
          </li>
          <li>
            <CheckIcon className="mx-2" />
            Time management
          </li>
          <li>
            <CheckIcon className="mx-2" />
            Forgiveness
          </li>
        </ul>
      </div>
      <div className=" ml-16 mt-7 mb-8">
        <h1 className="font-bold text-3xl my-6">Key topics Covered</h1>
        <p className="my-4 text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi minima
          necessitatibus eos architecto suscipit odit possimus officia nulla
          eveniet. Accusamus quibusdam reiciendis nisi quos nostrum, sunt
          veritatis atque voluptatem doloribus, nihil, aperiam beatae
          ullam.lorem23rftgyhujikl
        </p>
        <ol className="text-xl my-5">
          <li className="my-4">
            <CheckIcon className="mx-2" />
            <span className="font-bold">
              10 written and audio sessions
            </span>{" "}
            guiding you in decoding the language of numbers so that you can
            easily receive their insights and messages.
          </li>
          <li className="my-4">
            <CheckIcon className="mx-2" />
            <span className="font-bold">
              Intuitive exercises and homework
            </span>{" "}
            walk you through the energies and values of numbers and number
            sequences so you can become your own authority.
          </li>
          <li className="my-4">
            <CheckIcon className="mx-2" />
            <span className="font-bold">Handy reference</span> to numerical
            meanings, so you can uncover your soul's gifts, challenges, lessons,
            and purpose – and receive spiritual guidance along your path.
          </li>
          <li className="my-4">
            <CheckIcon className="mx-2" />
            <span className="font-bold">Expert techniques</span> for
            manifestation offer simple ways to use numbers to co-create with the
            universe.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default about;
