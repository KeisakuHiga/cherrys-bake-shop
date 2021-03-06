## About Cherry's Bakeshop and Cafe

Cherry's Bakeshop and Cafe's(CBC) application allows users to view food options and send their customized requirements to the client. This is a MERN stack group project utilizing: MongoDb (Mongoose ODM) Express, ReactJS and NodeJS.

**Sitemap ![](./docs/sitemap.png)**

**Screenshots**
![](./docs/home.png)
![](./docs/about.png)
![](./docs/quote.png)
![](./docs/contact.png)
![](./docs/dashboard.png)
![](./docs/quotedetail.png)

## Deployment

[Application](https://cherrysbakeshopandcafe.netlify.com)  
 _Backend server details are listed in `cherrys-bake-shop/frontend/.env.production`_

## Github Repository

[Cherry's Bakeshop](https://github.com/KeisakuHiga/cherrys-bake-shop)

## Contributors

[Keisaku Higa](https://github.com/KeisakuHiga)
[Seep Gulati](https://github.com/SeepG)
[Ryan Rico](https://github.com/rommelryanrico)

## Index

- [Description of application](#description-of-application)
- [Functionality](#functionality)
- [Client communication](#client-communication)
- [Design Process](#design-process)
- [User stories](#user-stories)
- [Tech Stack](#tech-stack)
- [Testing](#testing)
- [Project Management](#project-management)
- [Short answer questions](#short-answer-questions)

## Description of application

#### Business requirement

> 90% of young customers are online and Client wanted to engage with this audience. Though, Client created a Facebook page, wherein they were taking orders via messages, but they had to manually write the quote requirements in their order book. Client thought it would be great to have a simple website that can showcase available food options and have automated quotes information gathering system. Client believed that this new website would help in spreading the word in the neighborhood and get more customer footfalls.

#### Solution

Project team worked on the basis of client requirements and created the application which will offer customers the flexibility of sending online customizations via Quote form to Cherry's Bakeshop. It will also help client in fielding frequently asked queries which they used to get on phone and facebook.

## Functionality

- Navbar: Allows users to browse through the website and access all pages
- Side bar: Allows users to call the client, and access social pages of CBC on Facebook & Instagram
- Footer: Allows User to see CBC shop address and business hours
- Home page: Landing page, allows users to see gallery of cake pictures and filipino food
- About page: Users can find about the story/profile of Cherry's Bakeshop and Cafe
- Quote page: Users can fill the quote form and book cake with time details and customization options.
- FAQ page: Users can see the frequently asked questions and get answers to their queries
- Contact page: Users can check the client’s contact information (phone number, address, email address, business hours and the Google map). Users can click on map for a bigger map view, it allows the user to get the directions to the shop.

_Admin login details are mentioned in `cherrys-bake-shop/frontend/.env.production`_

- Login page: The admin logs in with the valid email and password. Receives Jason Web Token access token with valid credentials. The incorrect credentials don't generate the token. Once logged-in Admin can access Dashboard to see Quote details
- Dashboard page: Admin can see all quotes
- Admin can choose an individual quote details by clicking on the quote
- Admin can sort the quotes based on customer’s first name, last name, phone number, estimated pickup date and time, and the date when the quote is created
- Logout button: Admin can logout, and JWT will be removed automatically and dashboard link at the Navbar will get hidden

## Client communication

We pitched Cherry's Bakeshop & Cafe for becoming our client for our voluntary student project of 3 weeks. The client agreed to our proposal and suggested to have a look at their social media pages for content. We requested for a face-to-face team meeting at their shop to discuss business requirements and sign-off deliverables.

#### Meeting Preparation

_Client Questionnaire - We prepared a questionnaire to understand the business requirements and business model in detail and shared it with client prior to the meeting. This helped the client to go through the questions and he was more prepared to answer the queries._
![](./docs/clientquestions.png)

_Moodboard - We explored few design options, that will allow the client to get a better idea about website functionality and possible design approach._
![](./docs/moodboard-1.png)
![](./docs/moodboard-2.png)

_Sample wireframes - We created sample wireframes for client's reference._
![](./docs/initialwireframes.png)

#### During Meeting

We discussed the questionaire with client and had a detail discussion about their business needs and how Project Team can help.

#### Post Meeting

We shared minutes of the meeting with client to ensure that we all are on same page and there is no misunderstanding about any deliverables.

![](./docs/client-minutes.png)

![](./docs/clientdiary.png)

**[Client Diary in detail](https://docs.google.com/document/d/1GXz-Ycdg-1Z4bm33R-HGBCuojCI2e6UWefENzfR5Pio/edit?usp=sharing)**

**Client testimonial ![](./docs/clienttestimonial.png)**

## Design process

To balance bright red client logo, we have utilized a simple colour theme of purple with timeless white and black. 'Playball' font lends the cursive and artistic touch to the website.

**Website Wireframes**

![](./docs/wireframes.png)

## User stories

1.  As a User, I should be able to see the business phone number on every page when I navigate the website. So that I can call them if I need to make a booking or ask for a quote.
2.  As a User, I want to see a menu or gallery of cake pictures. So that I can decided what I want.
3.  As a User, I want to be able to easily navigate the website. So that I can quickly make an order.
4.  As a User, I want to have a detailed FAQ. So that my questions are answered before sending a quote.
5.  As a User, I want to place an order with special instructions. So that the shop can create a cake according to my requirements.
6.  As a User, I want to see the store's facebook and instagram links. So that I can look at cake inspirations.

![](./docs/workflowuser.jpg)

1. As Admin, I should be able to see a Dashboard of customers orders when I log into the website. So that I can easily process my orders.
2. As Admin, I should be able to look at customer order in detail and understand what are the special requirements of each customer. So that I can understand my customer needs properly and can address them.
3. As Admin, I should be able to get customer contact details. So that I can contact my customer when the order is ready.

![](./docs/workflowadmin.jpg)

**Menu Design**

As client didn't have any existing menu and flavour list, we designed cake flavours and filipino food menu that can be downloaded on Quote page.

![](./docs/menu.png)

**Database Entity Relationship Diagrams**
![](./docs/ERD.png)

**Data Flow Diagram**
![](./docs/dataflowdiagram.png)

**OO design documentation**
![](./docs/OOdesign.png)
This is a representation of the OO Design of our application which shows the methods of our data models.

## Tech stack

CherryBakeshop application is built using a simple REST API with NodeJS and Express. Persistence is provided by MongoDb Atlas as a cloud database.

PostMan has been used for testing the routes. Jest has been used for Test suites. UI has been made in React.

## Instructions

Prerequisites

- The first thing you need to have is Node.js on your computer.You can download the Node.js installer from the Node.js website at: https://nodejs.org/en/download/

- Once Node.js is installed, open a terminal and enter the `node --version` on command line to verify that it is installed correctly.

Installation

1. You need to open the repository in a code editor.

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

## Testing

1. To run tests, cd into `backend` and run below command.
   `npm test`

2. This will start the test suites and you will see total tests with coverage.

### Testing evidence

- Backend testing coverage: ![](./docs/testcoverage.png)

- Testing checklist: ![](./docs/testingchecklist.png)

- Development Manual Testing: https://youtu.be/31PVBlN3Nhk

- Production Manual Testing: https://youtu.be/8K5ywoXLHNc

- Frontend coverage: We have done manual testing of all frontend elements. As, we started working on frontend testing, but didn't get around to fix our tests. Here's a snapshot ![](./docs/frontendsnapshot.png)

## Project Management

[Click to view Trello Board](https://trello.com/b/gjJ35BqP/mern-project)

![](./docs/trello.png)

**Code Review**
![](./docs/githubrules.png)

We set a Github pull request rule that must be 2 reviewers required for each pull request in order to avoid merging conflicts in the development team. This encouraged each member to understand other members code and only then merge the request.

**Team Communication**
![](./docs/teamcommunication.png)

**Timeline**

    Week1
        * Setting GitHub repository & first deployment(frontend and backend)
        * Project planning
        * The first meeting with the client
        * Established client communication
        * Setting up the basic code structure (frontend and backend)

    Week2
        * Coding began in earnest
        * MVP completed
        * Started testing

    Week3
        * Refactoring and debugging code
        * Preparing the documentation
        * Submission

## Short Answer questions

### Q1. What are the most important aspects of quality software?

#### Flexibility and Extensibility

The ability of software to remove, add and modify functionality with ease and without breaking it is important as change is a regular occurence in software development.

#### Maintainability and Readability

Making sure your code has useful interface definitions, proper documentation and code documentation makes your software more maintainable, which includes the ability to change error corrections and minor functions.

#### Performance and Efficiency

This has to do with the response time of the software. Response time should be at acceptable intervals and not increase depending on the amount of transactions. An optimal performance ratio must be the goal.

#### Scalability

Scalability is the ability of software to grow and handle an increasing amount of work/users. Scalable software has the advantage of adapting to the changing needs or demands of its users and clients.

#### Usability and Accessability

Simple and easy to use software is best practice as this means less time to complete a task for users. It should also support different accessibility types of control for people with a range of disabilities.

#### Platform Capability and Portability

Quality software should be able to be run on many platforms. This is so more people can use it. Portability is the ability for software to be converted to run on other platforms.

#### Testability and Manageability

Quality software needs quality testing. Source code should be tested with the most coverage and most efficient testing methods. Software should also be manageable after deployment.

#### Security

Security is very important for software development as applications can have millions of users. A security policy should be created and be applied by having no entry points. This can include authorization, authentication, network attack protections and data encryption.

### Q2. What libraries are being used in the app and why?

#### Frontend dependencies

    "@fortawesome/fontawesome-svg-core": "^1.2.19" - used for social icons
    "@fortawesome/free-brands-svg-icons": "^5.9.0" - used for social icons
    "@fortawesome/free-solid-svg-icons": "^5.9.0" - used for social icons
    "@fortawesome/react-fontawesome": "^0.1.4" - used for social icons
    "axios": "^0.19.0" - used for CRUD request from frontend to backend
    "bootstrap": "^4.3.1" - used for frontend styling
    "dotenv": "^8.0.0" - used for the configuration of .env files
    "lodash": "^4.17.14" - used for sorting functions in Dashboard page
    "moment-timezone": "^0.5.26" - used for styling the time, which converts GMT to the local time
    "netlify-cli": "^2.11.24" - used for deployment of frontend to Netlify
    "react": "^16.8.6" - used for producing view/controller components of our application
    "react-dom": "^16.8.6" - used for interacting with the DOM
    "react-moment": "^0.9.2" - used for styling the time
    "react-router-dom": "^5.0.1" - used for loading components in different routes
    "react-scripts": "3.0.1" - used for configuring scripts for create-react-app.

_Development Dependencies_

    "chai": "^4.2.0" - used for frontend testing
    "enzyme": "^3.10.0" - used for frontend testing
    "enzyme-adapter-react-16": "^1.14.0" - used for frontend testing
    "enzyme-to-json": "^3.3.5" - used for frontend testing
    "react-test-renderer": "^16.8.6" - used for frontend testing
    "sinon": "^7.3.2" - used for frontend testing
    "sinon-chai": "^3.3.0" - used for frontend testing

#### Backend Dependencies

    "@hapi/joi": "^15.1.0" - For validation
    "bcrypt": "^3.0.6" - For hashing the password for security
    "cors": "^2.8.5" - To enable cross origin resource sharing from server (backend) with Client (frontend)
    "dotenv": "^8.0.0" - For .env configuration
    "express": "^4.17.1" - For creating backend server
    "faker": "^4.1.0" - For creating Fake seed data
    "jsonwebtoken": "^8.5.1" - For utilizing Jason Web Token authentication
    "moment-timezone": "^0.5.26" - To change the time to local time
    "mongoose": "^5.6.3" - To serve as ODM for database queries
    "nodemon": "^1.19.1" - Dynamic reloading
    "shortid": "^2.2.14" - To create unique shortId URL for testing purpose

_Development Dependencies_

    "jest": "^24.8.0" - Testing framework
    "now": "^15.7.0" - For deploying to now.sh
    "supertest": "^4.0.2" - To test http requests while running test suites

### Q3. A team is about to engage in a project, developing a website for a small business. What knowledge and skills would they need in order to develop the project?

- **Understanding client's business needs and requirements**: Is the primary need for developing a project. Developer team should be a able to solve the business problem which is troubling the client.
- **Communicate often with the client**: The most important skill is having a regular communication with the client and working on application as per client expectations.
- **Project management**: No project can be successful without having a proper project management set-up. This will allow the team to have a better control of all the workflow and tasks can be allocated as per team members skill-sets.

Other vital skills are as follows:
- Design approach
- RESTful API knowledge
- UI development
- Client documentation
- User stories
- Version control

### Q4. Within your own project what knowledge or skills were required to complete your project, and overcome challenges?

#### Hard skills

- _Vanilla Javascript_: Understanding functional programming principles, asynchronous code, and callbacks.
- _Document Databases (MongoDB/Mongoose)_: Converting a relational databse structure into document database.
- _Express API/Server_: Creating and using middleware to manage requests and respsonses to public and protected routes.
- _React.js_: Working with multiple layers of components and create-react-app folder structure.
- _Node.js_: Using Node.js to run multiple localhost ports on one computer.
- _NPM and NPM libraries_: Researching and applying NPM packages and libraries to our application.
- _Testing(Frontend: Mocha, Chai, Enzyme, Backend: Jest, Supertest)_: Required to test our application code.
- _GitHub/GitHub_: Each of us were required to create branchs, push to master, peer to peer code review and merging or resolving conflicts in GitHub.
- _HTML5_: Compiling semantic HTML in React components logic.
- _CSS3_: Using Sass compilers to create mixins and global variables to refactor code.
- _Figma_: Used as a design tool for wireframes and assets.
- _Canva_: Used as a design tool for designing Menu.
- _Trello_: Breakdown of tasks following Agile methodologies.
- _Distributed Deployment_: Client, server and database deployed to Netlify, Now, MongoDB Atlas respectively.

#### Soft skills

- Team collaboration
- Good communication skills
- Project management
- Research and development skills

### Q5. Evaluate how effective your knowledge and skills were in this project, using examples, and suggest changes or improvements for future projects of a similar nature?

In regards to our knowledge and skills as a group, I think we were pretty effective and complimented each others strengths and weaknesses very well.

Certain skills or tasks that a person was lacking was covered by another team member. We worked together on several difficult tasks even when we didn't have much knowledge in those areas.

We played by the strengths of respective team members, some members were better at frontend, backend, react or styling, while the others were better at documentation and testing. Everyone in our group was willing to do whatever was necessary to complete the project successfully on time.

Some improvements for future projects of a similar nature would be:

- Writing the code which can be tested via unit tests from the start. Testing shouldn't be left for last.

- If we had more time we could have implemented more features. For example a chat room for discussion with customers and the client.

- Having more accessibility for the client to change content and images.
