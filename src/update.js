const path = require('path');
const fetch = require('node-fetch');
const fs = require('fs');

(async () => {
    //Get ReadMe path
    const ReadMe = path.join(__dirname, '..', 'README.md')
    const date = new Date()

    //Fetching Info From Github API
    let UserData = await fetch('https://api.github.com/users/robloxboy24').then(res => res.json())

    //Creating the text what we gonna save on ReadMe file
    const text = `<!-- You found this secret 👏 -->
<!--
    My secret things lol
    
    - I code more hours 
    - I am a gamer too 
    - I play minecraft, roblox.
-->
    
<h1 align="center">Who am I?</h1>
    

    
## Hello, I'm robloxboy24 <img src="https://raw.githubusercontent.com/SudhanPlayz/SudhanPlayz/master/images/WaveIcon.gif" width="30px">
<h2 align="left">Languages and Tools:</h2>
<p align="left"> <a href="https://www.gnu.org/software/bash/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg" alt="bash" width="40" height="40"/> </a> <a href="https://getbootstrap.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a> <a href="https://canvasjs.com" target="_blank"> <img src="https://raw.githubusercontent.com/Hardik0307/Hardik0307/master/assets/canvasjs-charts.svg" alt="canvasjs" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://www.docker.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40"/> </a> <a href="https://expressjs.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a> <a href="https://www.figma.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/> </a> <a href="https://firebase.google.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.mongodb.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a> <a href="https://www.nginx.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg" alt="nginx" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://sass-lang.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40"/> </a> <a href="https://tailwindcss.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/> </a> <a href="https://www.typescriptlang.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> </a> <a href="https://unity.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg" alt="unity" width="40" height="40"/> </a> </p>
## Stats
![Profile Views](https://komarev.com/ghpvc/?username=robloxboy24&color=blueviolet)&nbsp;&nbsp;![Profile Followers](https://img.shields.io/badge/Followers-${UserData.followers}-blueviolet)&nbsp;&nbsp;![Profile Following](https://img.shields.io/badge/Following-${UserData.following}-blueviolet)&nbsp;&nbsp;![Profile Stars](https://img.shields.io/badge/Stars-{{ STARS }}-blueviolet)
<!--START_SECTION:waka-->
<!--END_SECTION:waka-->
<details>
    <summary><b>GitHub</b> Activity</summary>
    <img align="left" src="https://github-readme-stats.vercel.app/api?username=SudhanPlayz&theme=tokyonight"><img align="right" src="https://github-readme-stats.vercel.app/api/top-langs/?username=SudhanPlayz&theme=tokyonight&hide=batchfile">
    <img src="https://github-readme-streak-stats.herokuapp.com/?user=SudhanPlayz&theme=tokyonight">
</details>
<!-- Last updated on ${date.toString()} ;-;-->
<i>Last updated on ${date.getDate()}${date.getDate()===1?"st":date.getDate()===2?"nd":date.getDate()===3?"rd":"th"} ${["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][date.getMonth()]} ${date.getFullYear()} using magic</i> ✨`

    //Saving on readme.md
    fs.writeFileSync(ReadMe, text)
})()
