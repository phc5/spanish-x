# Let's learn Spanish

With over 50 million Spanish-speaking natives in the United States, it is easy to say that Spanish has been one of the most popular language spoken today.  This is the main reason why, learning Spanish can improve your employment potential.  Just knowing a second language would increase your chances, but to know Spanish could set you apart from those that know a different second language.  In addition, travelling around the world could also be that much sweeter, knowing Spanish.

In order to learn Spanish or any other language, we would need to have a good/efficient way of learning so we can actually retain what we are studying.  That's where Spaced repetition comes in handy.  With spaced repetition, if we know something, we don't need to practice it for some period of time, but if we don't know, then we need to practice it.  For example, if you know the material, it will be sent to the end of the list, but if you don't, it will be put in somewhere in the list, where it comes back sooner.  

## Getting started

### Setting up a project

* Move into your projects directory: `cd ~/YOUR_PROJECTS_DIRECTORY`
* Clone this repository: `git clone https://github.com/oampo/thinkful-full-stack-template YOUR_PROJECT_NAME`
* Move into the project directory: `cd YOUR_PROJECT_NAME`
* Install the dependencies: `npm install`
* Create a new repo on GitHub: https://github.com/new
    * Make sure the "Initialize this repository with a README" option is left **un**checked
* Update the remote to point to your GitHub repository: `git remote set-url origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME`
* Make sure everyone in your group is working out of separate branches on github and push to their branch.  This becomes important when merging to the master.
###Tech Stack
* HTMLSCSS
* React/Redux
* MongoDB
* Express
* Node.js
* Passport
* Google OAuth


### Working on the project
* Divide the tasks amongst the group and the individual should focus on that

* Move into the project directory: `cd ~/YOUR_PROJECTS_DIRECTORY/YOUR_PROJECT_NAME`
* Run the MongoDB: ./mongod or sudo ./mongod
* Run the development task: `npm run dev`
    * Starts a server running at http://localhost:8080
    * Automatically rebuilds when any of your files change

## Directory layout

```
.
├── client      Client-side code
│   ├── assets  Images, videos, etc.
│   ├── js      JavaScript
│   └── scss    SASS stylesheets
├── server      Server-side code
└── test        Tests
    ├── client  Client tests
    └── server  Server tests
```

##API Documentation
###Need to authenticate, using Google's implementation of OAuth
**/auth/google**

**GET/auth/google**
* This makes authorization requests.  It allows anyone with a Google account to easily register or login to your app.

##User Endpoint
**GET/user**

Endpoint to user of the app/google account


**DELETE/userid**

Deletes the user by their userid

**GET/logout**

Logs out the user and redirects to the home

###Start of the Questions
**GET/questions**

Using the Bearer strategy to protect the endpoint of the questions

**POST/questions**

Actually lets you create the questions that you are storing in the server

**PUT/questions**






## Deployment

Requires the [Heroku CLI client](https://devcenter.heroku.com/articles/heroku-command-line).

### Setting up the project on Heroku

* Move into the project directory: `cd ~/YOUR_PROJECTS_DIRECTORY/YOUR_PROJECT_NAME`
* Create the Heroku app: `heroku create PROJECT_NAME`
* Instruct Heroku to install the development dependencies: `heroku config:set NPM_CONFIG_PRODUCTION=false`

### Deploying to Heroku

* Push your code to Heroku: `git push heroku master`

## Continuous Integration

* Add your repository to [Travis CI](https://travis-ci.org/)

## Continuous Deployment

Requires the [Travis CLI client](https://github.com/travis-ci/travis.rb).

### Setting up CD

* Add the following configuration to `.travis.yml`:

    ```
    deploy:
      provider: heroku
      app: YOUR_HEROKU_APP_NAME
    ```
* Add your Heroku API key: `travis encrypt $(heroku auth:token) --add deploy.api_key`

### Deploying using CD

* Push your code to GitHub: `git push origin master`

##Special Thanks to:
* https://cdn.drawception.com/images/panels/2016/9-10/OO5Rs4sEP2-2.png
** For their wonderful background image

