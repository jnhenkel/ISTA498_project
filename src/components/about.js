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
            Our project involves a user answering a short question to begin the pre-existing algorithm selection that will then be used to develop and generate digital art. A website will be created by the group that displays the art using a pre-existing algorithm and gives the user a chance to have the art redone by answering questions after that. We will run the user through different algorithms based on them approving or declining what they see and produce a final piece of art. Then, we take user feedback that either approves or disapproves of the art they see; if approved the program gives the user an export feature, if disapproved the program will change the algorithm to generate a new piece of art and get user feedback again.
          </div>
        </div>
      </div>
      <canvas data-processing-sources="../test.pde"></canvas>
    </div>
  );
}

export default About;