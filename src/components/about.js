import React from "react";
<head>
<script type="text/javascript" src="./processing.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/processing.js/1.6.0/processing.min.js"></script>
</head>

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center m-5 about-header">
          <div class="col">
            <h1 class="font-weight-light about-h1">The Art Factory</h1>
          </div>
        </div>
        <div class="row about-text">
          <div class="about-paragraph1">
            <span>The question we want to have answered is </span>
            <br />
            <span class="question-text">
              Why aren't there more routes of creativity in the arts online?
            </span>
            <br/>
            Learning technology through arts is another great way to understand the internet and the computing systems that come with it.
          </div>
          <div class="about-paragraph2">
            Our project involves a user answering a short questionaire to begin the pre-existing algorithm selection that will then be used to develop and generate digital art. 
            This website displays the art using a pre-existing algorithm and gives the user a chance to have the art redone by answering questions after that. 
            We will run the user through different algorithms based on the results of each quiz taken and produce a final piece of art. 
            <br/><br/>
            The art generated in this site was made using p5.js, a JavaScript library built for creative coding.
            For more information abot p5.js visit <a href="https://p5js.org/">https://p5js.org/.</a>
            <br/><br/>
            To begin using the application, please register! Then, you can login and take the quiz. 
            <br/>
            **Your information will never be shared.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;