<a name="readme-top"></a>

[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#future-optimizations">Future Optimizations</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Kesko assignment
The backend is hosted on the render.com through the free tier which may cause big delays on opening up the application.

This is my solution for the kesko takehome. 
<a href="https://capable-buttercream-39f592.netlify.app/">
![keskogif](https://user-images.githubusercontent.com/94518833/227053590-8c9e6d57-1122-45f6-b0fb-bed6af318a86.gif)
</a>


### Create UI for showing the data for user

Requirements:

* The application should have a good-looking UI (matching the attached design to a
reasonable degree, does not have to be pixel perfect) with a responsive layout
* The backend should have some RESTful API
* The code should be maintainable, testable and scalable
* There should be documentation on how to run the code and the tests
* (Optional) The application should be deployed to a cloud hosting service like
render.com


### Demo Available here : <a href="https://capable-buttercream-39f592.netlify.app/">Live Demo Here!</a>


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

This section lists any major technologies used to create the projects


* [![React][React.js]][React-url]
* ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
* ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
* ![EXPRESSJS](https://img.shields.io/badge/Express.js-0A1009?style=for-the-badge&logo=express&logoColor=yellow)
* ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
* ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
* ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

* ![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)

* ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

clone this repo and install all the necessary node_modules

### Installation


1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Running backend locally

To run the backend locally change directory into kesko-takehome/backend

npm i to install all node_modules

start the backend by typing `node .\app.js`

will run the server on `http://localhost:7000/`

##Changes to run client locally

To run the entire application locally you need to start the backend aswell as changing where the data is fetched from.

In App.tsx change "https://kesko-backend.onrender.com/" => "http://localhost:7000/" (or different port if that one is in use and you needed to change the port the backend is running on)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- Future Optimizations -->
## Future Optimizations

There are many aspects that could be change to give an overall greater user experience.

Currently the entire list is displayed at once. While showcasing all the data may not be a big issue it may be more user-friendly to have some type of scroll loading or setting some limit of the amount of orders that are visible per page. Also could add some type of "See more orders" button at the bottom to load in a set number of orders on click. 

The filtering method currently is only for Products in the order. But it would be realistic to give the end user the option to filter on more aspects of the data. such as shipping address or customer name.

To improve mobile experience either the data needs to be condensed more in order to have more information visible to the user on smaller screens. Also adding some type of navigation which would always be on screen and accessible to the end-user.

Improving styling and animations in order to make the whole experience more enjoyable. Such as for example while data is loading have something which clearly indicates that the program is working even if loading times were higher. 

Authentication could be a realistic discussion to have since the information maybe shouldn't be open to anyone on the internet. Depending on the sensitivity of the information different precautions need to be taken.

There is also no way currently of saving data or storing information on the site. Something like "important orders", "time sensitive" or "biggest customers" categorization may give end-users a better overview over the "most important data" which the end user is able to pick and choose from. 


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- Some personally added elements -->
# Why things are the way they are

## Search

Because the prompt required filter as user types I implemented this.

In search I chose to also give the ability to filter by exact match of product in the order.

This requires more concentration from the user to be able to see that spelling is correct. 
But solves the problem of selecting similar foods such as "Tofu" and "Longlife Tofu" when you only want exact matches. 

## Seeing results

I added a way of visualizing the amount of results you have currently.
Ideally I would add some transition to showcase loading but for a smaller sample set this is quite clear.


<!-- CONTACT -->
## Contact

Kevin Lindholm - [@KevinLindh_](https://twitter.com/KevinLindh_) - kevin.a.lindholm@gmail.com

Project Link: [https://github.com/KevinLindh/kesko-takehome](https://github.com/KevinLindh/kesko-takehome)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/kevin-lindholm/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
