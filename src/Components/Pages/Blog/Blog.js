import React from "react";
import blogImg from "../../../assets/comparison-angular-react-vue.png";

const Blog = () => {
  return (
    <div>
      <div>
        <div className="  blog lg:p-5">
          <div className=" w-11/12 mx-auto mb-10 p-10 shadow-xl shadow-xl">
            <h1 className="text-3xl text-rose-500 font-semibold py-5  ">
              What are the different ways to manage a state in a React
              application?
            </h1>
            <p className="text-justify">
              Every React component has a built-in state. This state is an
              object which stores the property values that belong to a
              component. State is able to keep data from different components
              in-sync because each state update re-renders all relevant
              components. svg viewer The built-in way that React provides for
              setting component states is by using setState() and adding “local
              state” to a class. There are several other ways to manage state​s
              in React, including the use of: Hooks React Context API Apollo
              Link State
            </p>
          </div>
          <div className="w-11/12 mx-auto my-5 p-10 shadow-lg shadow-xl">
            <h1 className="text-3xl text-rose-500 font-semibold pb-5">
              What is a unit test? Why should we write unit tests?
            </h1>
            <p className="text-justify">
              A unit test is a way of testing a unit - the smallest piece of
              code that can be logically isolated in a system. In most
              programming languages, that is a function, a subroutine, a method
              or property. The isolated part of the definition is important.
              <br />
              <br /> unit test is a way of testing a unit - the smallest piece
              of code that can be logically isolated in a system. In most
              programming languages, that is a function, a subroutine, a method
              or property. The isolated part of the definition is important. In
              his book "Working Effectively with Legacy Code", author Michael
              Feathers states that such tests are not unit tests when they rely
              on external systems: “If it talks to the database, it talks across
              the network, it touches the file system, it requires system
              configuration, or it can't be run at the same time as any other
              test." Modern versions of unit testing can be found in frameworks
              like JUnit, or testing tools like TestComplete. Look a little
              further and you will find SUnit, the mother of all unit testing
              frameworks created by Kent Beck, and a reference in chapter 5 of
              The Art of Software Testing . Before that, it's mostly a mystery.
              I asked Jerry Weinberg about his experiences with unit testing --
              "We did unit testing in 1956. As far as I knew, it was always
              done, as long as there were computers". Regardless of when and
              where unit testing began, one thing is for sure. Unit testing is
              here to stay. Let's look at some more practical aspects of unit
              testing.
            </p>
          </div>

          <div className="w-11/12 mx-auto mt-10 p-10 shadow-lg shadow-xl">
            <h1 className="text-3xl text-rose-500 font-semibold pb-5 ">
              How does prototypical inheritance work?
            </h1>
            <p className="text-justify">
              Simply put, prototypical inheritance refers to the ability to
              access object properties from another object. We use a JavaScript
              prototype to add new properties and methods to an existing object
              constructor. We can then essentially tell our JS code to inherit
              properties from a prototype
            </p>
          </div>
          <div className="w-11/12 mx-auto p-10 shadow-lg  shadow-xl">
            <h1 className="text-3xl text-rose-500 font-semibold py-5 ">
              React vs. Angular vs. Vue?
            </h1>
            <img className="mx-auto " src={blogImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
