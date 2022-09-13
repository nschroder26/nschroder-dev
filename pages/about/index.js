import { Fragment } from "react";
import classes from "./index.module.css";

const AboutPage = () => {
  return (
    <Fragment>
      <h1 className={classes.abouttitle}>About Me</h1>
      <div className={classes.aboutbody}>
        <img src="./AboutMe.JPG" className={classes.aboutpic} />
        <div className={classes.abouttext}>
          I’m sure you’ve figured this out but my name is Nick, and I am a
          self-taught developer! In 2015 I graduated with a B.S. in Mathematics,
          and since then have held several professional jobs but have had
          difficulty finding something that I truly enjoy. About 2 years ago I
          read an article about software development and it really sparked my
          interest. Throughout COVID I worked on a variety of different
          tutorials and small projects but struggled to find any way to progress
          from there. In October of 2021, I started a couple of Ruby on Rails
          books, and more recently I have been learning JavaScript and React.
          These resources helped give a little more direction and lead me to
          where I am today. One of the things that really drew me to
          software/web development was the problem solving and critical thinking
          used to fix issues and determine how to proceed. I personally find it
          so satisfying to be able to solve a problem after hours of trying to
          figure out what the issue is. That feeling of accomplishment is what
          drove me through some of the more difficult and confusing issues that
          I’ve come across. Also, I love building things. Starting with nothing,
          and slowing building, adding, and modifying until you have a complete
          project gives such a sense of achievement. Web development gives me
          both of these things, every time I work on it. In addition to being
          something that I enjoy doing, learning web development also had a
          practical application. My mom is an artist and for several years has
          talked about setting up a website where she could showcase her work.
          After finishing the books that were recommended I started work on the
          site. Using the basic understanding I had, and a bit of Googling, I
          was able to set up a fully functional site. From there I have moved
          onto React and I plan on working through The Odin Project next to help
          improve my JavaScript knowledge. Thank you again for taking the time
          to look at some of my work. I know that I have just begun to scratch
          the surface of this field, but I am eager and willing to learn.
        </div>
      </div>
    </Fragment>
  );
};

export default AboutPage;
