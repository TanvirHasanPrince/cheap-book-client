import React from 'react';

const Blog = () => {
 return (
   <div>
     <h1 className="text-4xl text-primary font-bold">
       Q: What are the different ways to manage a state in a React application?
     </h1>
     <p>
       Answer: Local (UI) state – Local state is data we manage in one or
       another component. Local state is most often managed in React using the
       useState hook. For example, local state would be needed to show or hide a
       modal component or to track values for a form component, such as form
       submission, when the form is disabled and the values of a form’s inputs.
       Global (UI) state – Global state is data we manage across multiple
       components. Global state is necessary when we want to get and update data
       anywhere in our app, or in multiple components at least. A common example
       of global state is authenticated user state. If a user is logged into our
       app, it is necessary to get and change their data throughout our
       application. Sometimes state we think should be local might become
       global. Server state – Data that comes from an external server that must
       be integrated with our UI state. Server state is a simple concept, but
       can be hard to manage alongside all of our local and global UI state.
       There are several pieces of state that must be managed every time you
       fetch or update data from an external server, including loading and error
       state. Fortunately there are tools such as SWR and React Query that make
       managing server state much easier. URL state – Data that exists on our
       URLs, including the pathname and query parameters. URL state is often
       missing as a category of state, but it is an important one. In many
       cases, a lot of major parts of our application rely upon accessing URL
       state. Try to imagine building a blog without being able to fetch a post
       based off of its slug or id that is located in the URL! There are
       undoubtedly more pieces of state that we could identify, but these are
       the major categories worth focusing on for most applications you build.
     </p>
     <br />
     <br />
     <h1 className="text-4xl text-primary font-bold">
       Q: How does prototypical inheritance work?
     </h1>
     <p>
       Answer: Every object with its methods and properties contains an internal
       and hidden property known as [[Prototype]]. The Prototypal Inheritance is
       a feature in javascript used to add methods and properties in objects. It
       is a method by which an object can inherit the properties and methods of
       another object. Traditionally, in order to get and set the [[Prototype]]
       of an object, we use Object.getPrototypeOf and Object.setPrototypeOf.
       Nowadays, in modern language, it is being set using __proto__.
     </p>
     <br />
     <br />
     <h1 className="text-4xl text-primary font-bold">
       Q: What is a unit test? Why should we write unit tests?
     </h1>
     <p>
       Answer: A unit test is a type of software test that focuses on components
       of a software product. The purpose is to ensure that each unit of
       software code works as expected. A unit can be a function, method,
       module, object, or other entity in an application’s source code. The
       objective of a unit test is to test an entity in the code, ensure that it
       is coded correctly with no errors, and that it returns the expected
       outputs for all relevant inputs. Unit tests are typically created by
       developers during the coding phase of a project, and are written as code
       that exists in the codebase alongside the application code it is testing.
       Many unit testing frameworks exist that help developers manage and
       execute unit tests.{" "}
     </p>
     <br />
     <br />
     <h1 className="text-4xl text-primary font-bold">
       Q: React vs. Angular vs. Vue?
     </h1>
     <p>
       Answer: This post is a comprehensive guide on which is perhaps the right
       solution for you: Angular vs React vs Vue. Just a couple of years ago,
       developers were mainly debating whether they should be using Angular vs
       React for their projects. But over the course of the last couple of
       years, we’ve seen a growth of interest in a third player called Vue.js.
       If you are a developer starting out on a project and cannot decide on
       which JavaScript framework to use, this guide should help you make a
       decision. If the choice you’re making is based on Angular vs React alone,
       then you’ll simply need to consider the pros and cons discussed for those
       libraries in this post. But overall, keep in mind that both libraries can
       be used for mobile and web apps, while Angular is generally better for
       more complex apps that are enterprise-ready. React often requires extra
       modules and components, which keeps the core library small, but means
       there’s extra work involved when incorporating outside tools. Angular, on
       the other hand, is more of a full-fledged solution that doesn’t require
       extras like React often does, though it does have a steeper learning
       curve for its core compared to React. React is more suitable for
       intermediate to advanced JavaScript developers who are familiar with
       concepts from ES6 and up, while Angular favors those same developers who
       are also familiar with TypeScript.In most cases, you probably wouldn’t be
       deciding between only Angular and Vue. They are vastly different
       libraries with very different feature sets and learning curves. Vue is
       the clear choice for less experienced developers, and Angular would be
       preferred for those working on larger apps. A large library like Angular
       would require more diligence in keeping up with what’s new, while Vue
       would be less demanding in this regard and the fact that the two most
       recent major releases of Vue are in separate repositories helps. It
       should also be noted that Vue was created by a developer who formerly
       worked on Angular for Google, so that’s another thing to keep in mind,
       though that wouldn’t have a huge impact on your decision.
     </p>
     <br />
     <br />
  
     <br />
     <br />
   </div>
 );
};

export default Blog;