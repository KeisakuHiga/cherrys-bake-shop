#About
Cherry's Bakeshop and Cafe's(CBC) application allows users to view cake and filipino food options and send their customized requirements by filling a quote form. This is a MERN stack group project utilizing: MongoDb(Mongoose ODM) Express, ReactJS and NodeJS.

## Website demo (gif)

## Deployment

    Client: https://cherrysbakeshopandcafe.netlify.com
    Server: https://cherrysbakeshopandcafe.khiga2943.now.sh

## Github Repository

    https://github.com/KeisakuHiga/cherrys-bake-shop

## Contributors

[KeisakuHiga](https://github.com/KeisakuHiga)
[SeepGulati](https://github.com/SeepG)
[RyanRico](https://github.com/rommelryanrico)

## Index

- [Description of application](#description-of-application)
- [Functionality](#functionality)
- [Client communication](#client-communication)
- [Design Process](#design-process)
- [User stories](#user-stories)
- [Tech Stack](#tech-stack)
- [Tools & methodologies](#tools)
- [Short answer questions](#short-answer-questions)

## Description of application

Problem definition

- 90% of young customers are online and
  This new website would help in spreading the word in the neighborhood and get more customer footfalls and offers online flexibility of sending customizations via Quote form to CBC(Client)in advance.

Solution

## Functionality

- Navbar: Allows users to browse through the website and access all pages
- Side bar: Allows users to call the client, and access social pages of CBC on Facebook & Instagram
- Footer: Allows User to see CBC shop address and business hours
- Home page: Landing page, allows users to see gallery of cake pictures and filipino food
- About page: Users can find about the story/profile of Cherry's Bakeshop and Cafe
- Quote page: Users can fill the quote form and book cake with time details and customization options.
- FAQ page: Users can see the frequently asked questions and get answers to their queries
- Contact page: Users can check the client’s contact information (phone number, address, email address, business hours and the Google map). Users can click on map for a bigger map view, it allows the user to get the directions to the shop.

* Admin login details are mentioned in cherrys-bake-shop/frontend/.env.production

- Login page: The admin logs in with the valid email and password. Receives Jason Web Token access token with valid credentials. The incorrect credentials don't generate the token. Once logged-in Admin can access Dashboard to see Quote details
- Dashboard page: Admin can see all quotes
- Admin can choose an individual quote details by clicking on the quote
- Admin can sort the quotes based on customer’s first name, last name, phone number, estimated pickup date and time, and the date when the quote is created
- Logout button: Admin can logout, and JWT will be removed automatically and dashboard link at the Navbar will get hidden

## Client communication

We pitched Cherry's Bakeshop & Cafe for becoming our client for our voluntary student project of 3 weeks. The client agreed to our proposal and suggested to have a look at their social media pages for content. We requested for a face-to-face team meeting at their shop to discuss business requirements and sign-off deliverables.

### Meeting Preparation phase

1. Client Questionnaire - We prepared a questionnaire to understand the business requirements and client business model in detail and shared it with client before the meeting. This helped the client to go through the questions and he was more prepared to answer the questions.

![](./docs/clientquestions-1.png)
![](./docs/clientquestions-2.png)

- Agenda of the meeting

- Moodboard

- Sample wireframes
  ![](./docs/initialwireframes.png)

  Client minutes: ![](./docs/clientminutes.png)
  Client diary: https://docs.google.com/document/d/1GXz-Ycdg-1Z4bm33R-HGBCuojCI2e6UWefENzfR5Pio/edit?usp=sharing

- Client signOff
  ![](./docs/clientfinalsignoff.png)

## Design process

- Color palette

## User stories

![](./docs/workflowuser.jpg)

1.  As a User, I should be able to see the business phone number on every page when I navigate the website. So that I can call them if I need to make a booking or ask for a quote.
2.  As a User, I want to see a menu or gallery of cake pictures. So that I can decided what I want.
3.  As a User, I want to be able to easily navigate the website. So that I can quickly make an order.
4.  As a User, I want to have a detailed FAQ. So that my questions are answered before sending a quote.
5.  As a User, I want to place an order with special instructions. So that the shop can create a cake according to my requirements.
6.  As a User, I want to see the store's facebook and instagram links. So that I can look at cake inspirations.

![](./docs/workflowadmin.jpg)

1. As Admin, I should be able to see a Dashboard of customers orders when I log into the website. So that I can easily process my orders.

2. As Admin, I should be able to look at customer order in detail and understand what are the special requirements of each customer. So that I can understand my customer needs properly and can address them.

3. As Admin, I should be able to get customer contact details. So that I can contact my customer when the order is ready.

Wireframes

![](./docs/wireframes.png)

- Menu Design
  We designed Menu for the client as they

  ![](./docs/cakemenu.png)
  ![](./docs/filipinomenu.png)

- Database Entity Relationship Diagrams

K to share?

- Data Flow Diagram

- OO design documentation

## Tech stack

CherryBakeshop application is built using a simple REST API with NodeJS and Express. Persistence is provided by MongoDb Atlas as a cloud database.

PostMan has been used for testing. Jest has been used for Test suites. UI has been made in React.

## Instructions on how to setup, configure, deploy and use the Application.

Prerequisites

- The first thing you need to have is Node.js on your computer.You can download the Node.js installer from the Node.js website at: https://nodejs.org/en/download/

- Once Node.js is installed, open a terminal and enter the `node --version` on command line to verify that it is installed correctly. This application is using Node 10.16.0 version.?

Installation

1. You need to open the git repository in a code editor of your choice. We are using visual studio code. Download link: https://code.visualstudio.com/docs/setup/mac

2. cd into `backend folder` and run below command.
   `npm install`

3. To start the backend server, run below command.
   `npm start`

4. You will see the App listening on port 5000

5. To view UI in the browser. cd into `frontend folder` and run below command.
   `npm install`

6. To start the frontend react app, run below command.
   `npm start`

7. You can now view frontend in the browser on http://localhost:3000
   `npm start`

## Project timeline

## Tools

    * Screenshots of Trello board(s)
    * GitHub - discuss the process of pull requests and screenshot
    * Team Communication screen shots

## Short Answer questions

- What are the most important aspects of quality software? 1. No bugs 2. Easy to use 3. Easy to maintain 4. Scaleability 5. Readable code 6. Includes well comments 7.

- What libraries are being used in the app and why? 1. Express 2. React 3. Mongoose 4. Node 5. MongoDB 6. Jest 7. Mocha 8. Chai 9. Json Web Token 10.

* A team is about to engage in a project, developing a website for a small business.
  What knowledge and skills would they need in order to develop the project? 1. Business requirements 2. Design approach 3. RESTful API knowledge 4. Project management 5. UI development 6. Client documentation 7. User stories 8. Development skills 9. Version control 10. Project documentation (e.g. README.md) 11.

- Within your own project what knowledge or skills were required to complete your project, and overcome challenges? 1. Power of googling (problem solving skills) 2. Merging pull request after team review 3. Frequent team communication - in person(better) 4. Putting all requirement in Trello and discussing everyday 5.

- Evaluate how effective your knowledge and skills were this project, using examples, and suggest changes or improvements for future projects of a similar nature? 1.
