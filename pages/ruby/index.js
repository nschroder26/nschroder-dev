import { Fragment } from "react";
import ProjectList from "../../components/Layout/ProjectList";

import classes from "./index.module.css";

const PROJECT_LIST = [
  {
    id: "p1",
    title: "Learn to Program - Chris Pine",
    image: "/ChrisPineRoR.png",
    text: "This was the initial book that I read and worked through to set the foundation of the basics of programming. I really enjoyed this course and have gone back to it several times to review material. It did a great job of teaching a concept and then pushing you to apply those concepts in various different ways. The material started off at a very low level and did a great job of scaling and building on what you learned as you progressed.",
    git: "https://github.com/nschroder26/Chris-Pine-Ruby",
  },
  {
    id: "p2",
    title: "Ruby on Rails - Michael Hartl",
    image: "/MichaelHartlRoR.png",
    text: "The second book that I worked through was a much more in depth guide to RoR. This book started off with 2 smaller projects and then moved on to one large one. This larger project was a mock-up of Twitter which we built from the ground up. It handled everything from user login and authentication, to uploading, viewing, and deleting user posts. There were so many concepts and everyday applications covered. This is also a resource that I have gone back through since completing. I referenced this book quite a bit when building the artwork site and was able to model some aspects the same way.",
    git: "https://github.com/nschroder26/sample_app",
  },
  {
    id: "p3",
    title: "KHS Artworks",
    image: "/KHSOverview.png",
    text: "When I first started learning Web Development I knew that I needed to have an end goal or final project to work towards. I chose to build this site for my mom because she has been working on these art pieces for quite a few years and wanted to have a place to display the work she has done. This website gave me something to work towards. It took me quite a while, but in the end I was able to include all of the features that I had originally planned to. I used ActiveRecord for handling the database which is stored on AWS. The site is deployed through Heroku and is hosted at Cloudfare. I used mostly Bootsrap for styling and also formatted the site for mobile devices. When you visit the homepage you can leave a review, reviews are randomly selected from the database each time the page is loaded. There is also a contact page which is setup to deliver any messages to her email. Additionally there is an Admin login. This allows her to login and add or remove reviews and artworks. I wanted to give her the ability to update and make changes as she wanted, without having to get me involved. Some of the content, like the About page, still needs to be updated.",
    git: "https://github.com/nschroder26/khs_illus",
    website: "https://www.khsartworks.com/",
  },
];

const RubyPage = () => {
  return (
    <Fragment>
      <div className={classes.banner}>
        <h1 className={classes.maintext}>Ruby on Rails</h1>
      </div>
      <ProjectList list={PROJECT_LIST} />
    </Fragment>
  );
};

export default RubyPage;
