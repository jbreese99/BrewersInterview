# Jeremy Breese
## MLB Players Tool


This application is built on a Node.JS/React/React Bootstrap front end, and uses MuleSoft for the backend.

I would typically use Express for the backend, however for this application I wanted to demonstrate MuleSoft competencies.
## Features

- View full list of MLB teams, with logos as Bootstrap card elements
- Filter teams by league and division
- Sort teams by league and division
- Each card is clickable and will show that team's 40-man roster
- Clicking a player from the roster view will show stats about that player
- Encrypted API key
## Frontend Overview
- Dependencies
    - NPM v8.5.5
    - Node v16.15.0(LTS) 
   - React 6
- The front end utilizes components from the React Bootstrap library
- There are 4 main components
  - Nav.js (navbar)
  - TCard.js (Shows the teams view)
  - PlayersCard.js (Showers all players on a team)
  - PlayerCard.js (Shows a single player)
- Uses React-Router for routing 
## Backend Overview
- The MuleSoft backend is already deplyed to a cloudhub instance at http://mlb-data.us-e2.cloudhub.io/
- There is also a heroku application being leveraged to act as a proxy to remove cors errors for development purposes. This application simply accepts a URL as a parameter and calls the resource and returns the data from the heroku instance, acting as a middleman. This prevents the request coming from localhost and instead goes localhost -> heroku -> cloudhub -> heroku -> localhost.
    -  https://young-hamlet-38216.herokuapp.com/http://mlb-data.us-e2.cloudhub.io/api/teams'
- Backend is simply a passthrough to the provided api, but encrypts and secures the API key 
- Uses secure properties in cloudhub to set the encryption key


# Running Application 
### Front End
1. Install dependencies
2. After cloning and navigating to directory, cd to client
3. run npm start
4. Navigate to localhost:3000
### Back End
1. Application is already hosted on cloudhub, and front end is pointed to the instance using proxy
2. If you wish to host yourself, install anypoint studio
3. Navigate to /server, and import this directroy as a project to anypoint studio
4. Run locally or export to jar and deploy to cloudhub
5. secure.key has a hint and needs to be set in the cloudhub configuration. Email jbreese99@gmail.com for help with the key


  