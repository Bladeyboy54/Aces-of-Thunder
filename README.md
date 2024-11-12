<a name="readme-top"></a>
[![Contributors][contributors-shield]][contributors-url] 
[![Forks][Forks]][Forks-url]
[![Starsgazers][Stars]][Stars-url]
# 
<div align="center">
  <a href="https://github.com/Bladeyboy54/Aces-of-Thunder">
    <img src="aot\assets\LogoMain.png" alt="Aces of Thunder" width="400" height="auto">
  </a>

  <h3 align="center"> Aces Of Thunder </h3>

  <p align="center">
    A cross-platform competition app for the well-known video game War Thunder
    <br />
    <a href="https://github.com/Bladeyboy54/Aces-of-Thunder/tree/master/aot"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://youtu.be/fjHPPzlJtWE">View Demo</a>
    ·
    <a href="bug report link">Report Bug</a>
    ·
    <a href="Maybe">Request Feature</a>
  </p>
  <br />
  <p>  By Bladen Lehnberg  </p>
</div>


## Table of Contents


-  [Built With](#built-with)

-  [Prerequisites](#prerequisites)

-  [Installation](#installation)

-  [UI Designs](#ui-designs)

-  [Credits](#credits)

-  [Features](#features)

-  [Development Process](#Development-Process)

## About this Project

Aces of Thunder is a competition-based mobile application inspired by the game War Thunder. It allows players to submit and track their battle scores. Users can select battle types, input battle ratings and scores, and upload session screenshots. The app integrates Firebase for authentication and Firestore for storing user data, ensuring a seamless and secure experience. With intuitive navigation and real-time data updates, players can compete and share their progress within the War Thunder community. The app aims to enhance the gaming experience by fostering competition and engagement among players.

### Built With
* ![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
* ![Firebase](https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34)
* ![Expo](https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37)
* ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
* ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
  
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started
### Prerequisites

For development, you require to create an account with ![Firebase](https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34) .

### Installation


1. Clone the repo
   ```sh
   https://github.com/Bladeyboy54/Aces-of-Thunder.git
   ```
2. Install NPM packages
   ```sh
   cd aot
   ```
   then
   ```sh
   npm install
   ```
3. Use Firebase's website to set up a new project and create an authentication and Firestore database
   ```URL
   https://console.firebase.google.com/
   ```
4. In the `firebase.js` file add your Firebase config
   ```javascript
    const firebaseConfig = {
      apiKey: "****************************",
      authDomain: "**************.firebaseapp.com",
      projectId: "**************",
      storageBucket: "**************.appspot.com",
      messagingSenderId: "************",
      appId: "*:************:web:**********************"
    };
   ```
5. Download the Expo Go App on your device or emulator
   ```URL
   https://play.google.com/store/apps/details?id=host.exp.exponent&pcampaignid=web_share
   ```
6. Start the application in your IDE Terminal
   ```sh
   npm start
   ```
7. Scan the generated QR code with your device or Enter the URL manually
  ```
  THIS IS PURELY AN EXAMPLE
  ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
  █ ▄▄▄▄▄ █▄▄▄ ▀ ▀█ █ ▄▄▄▄▄ █
  █ █   █ ██▄▀ █  ▄▄█ █   █ █
  █ █▄▄▄█ ██▀▄ ▄▄ █▀█ █▄▄▄█ █
  █▄▄▄▄▄ ▄█ ▀▄█ ▀ ▀ █▄▄▄ ▄▄▄█
  █ ▄▀▄▄█▄██▄▀█▄▀█▀ █▄█▀█▀▀▄█
  █ █▄█▀ ▄ ▀▄██▄▄▄▄▀▀███▄▀▀ █
  █▀   ▄ ▄ ▀▄ █▀█▄ █ ▄▀▀█▀ ██
  █ ▄ ██▄▄ ▄█▄█▀▄▀ ▄▀ ██▄▀  █
  █▄██▄▄▄▄█ ▀  ▄▄ █ ▄▄▄  ▄▀▄█
  █ ▄▄▄▄▄ ███ ▀▄  █ █▄█ ███ █
  █ █   █ █ ▀█▄ ▀█▄ ▄  ▄ █▀▀█
  █ █▄▄▄█ █▀ ▄ ▀█▄ ▄█▀▀▄█   █
  █▄▄▄▄▄▄▄█▄▄█▄██▄▄ ▄█▄▄███▄█
  ```


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Features

#### 1. **User Authentication**

Secure login and registration system to manage player accounts.

#### 2. **Leaderboard Integration**

Real-time leaderboards showcasing top players and their achievements.

#### 3. **Responsive UI**

Intuitive and responsive user interface that adapts to different screen sizes and devices.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Entity Relationship Diagram

Here is an image of how the Database is structured and how each collection relates to the next.

<img align=top src="aot\assets\img\DB structure.png" width="1000"/>

## UI Designs

<div align='center'>

  <img align=top src="aot\assets\screenshots\Screenshot_9.png" width="180"/>
  <img align=top src="aot\assets\screenshots\Screenshot_10.png" width="180"/>
  <img align=top src="aot\assets\screenshots\Screenshot_6.png" width="180"/>
  <img align=top src="aot\assets\screenshots\Screenshot_7.png" width="180"/>
  <img align=top src="aot\assets\screenshots\Screenshot_8.png" width="180"/>
  
</div>

## Credits

#### Main Collaborator

  
  <div style="text-align: center;">
    <a href="https://github.com/Bladeyboy54/Aces-of-Thunder">
      <img src="https://github.com/BladeyBoy54.png" alt="Bladen Lehnberg" width="200px">
    </a>
    <br>
    <sub>Bladen Lehnberg</sub>
  </div>
</div>

## Final Outcome
### Demo Video

[View Demonstration](https://youtu.be/fjHPPzlJtWE)

## Conclusion
Aces of Thunder enhances the War Thunder experience by providing a platform for players to track their scores, compete, and engage with the community. Its features provide a smooth and engaging user experience, which includes real-time leaderboards, secure user authentication, and a dynamic user interface. The application provides a competitive and social environment by integrating Firebase for data management and providing dynamic event participation. Aces of Thunder is a good example of how gaming and community involvement can be combined, with the goal of enhancing enjoyment and unity among War Thunder fans.

## Licence 
Distributed under the MIT License. See LICENSE.txt for more information.



[contributors-shield]: https://img.shields.io/github/contributors/Bladeyboy54/Aces-of-Thunder.svg?style=for-the-badge
[contributors-url]: https://github.com/Bladeyboy54/Aces-of-Thunder/graphs/contributors
[Forks]: https://img.shields.io/github/forks/Bladeyboy54/Aces-of-Thunder.svg?style=for-the-badge
[Forks-url]: https://github.com/Bladeyboy54/Aces-of-Thunder/forks
[Stars]: https://img.shields.io/github/stars/Bladeyboy54/Aces-of-Thunder.svg?style=for-the-badge
[Stars-url]: https://github.com/Bladeyboy54/Aces-of-Thunder/stargazers

