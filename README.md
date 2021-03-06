# RSVP TICKETING DAPP BUILT WITH REACH DEPLOYED TO ETHEREUM & SOLANA
The RSVP Ticketing DApp that allows you to purchase a ticket by paying some Algos and in return receives a non-network token which can be resold, and allowing you to get rewarded with a non-network token after you attend, and have been verified by the organizer. The platform owner also benefits from every ticket sold by the organizer he get's a certain percentage.

Check a deployed version of the dApp here: https://responde.vercel.app/ 

# Features of the RSVP Ticketing dApp
- Platform makes profit from sale of ticket
- Organizer sells ticket to attendee at a fee
- Attendee RSVP for the event and pays the event fee
- Organizer checkin attendees that attends the events and reward checkin attendees with a reward token

# Run Frontend Code
To test the code
- Fork the repository
- Do `npm install` this will install all required dependencies. (If you encounter any issue after doing this you can delete the node module folder and do npm install again)
- run `npm start` to start the local server at localhost:3000

# Test Smart Contract Code
- Ensure you have docker installed and running
- Navigate to th contract folder. `/src/contract`
- run `./reach run`

# Setup Requirements
- Install [make](https://en.wikipedia.org/wiki/Make_(software)), [Docker](https://www.docker.com/get-started/) and [Docker Compose](https://docs.docker.com/compose/install/)
- [Vs Code](https://code.visualstudio.com/) or any IDE of your choice
- [Node Package Manager](https://nodejs.org/download/)
- [Create React App](https://github.com/facebook/create-react-app) . This creates a react boilerplate app.
- [Aphrodite](https://github.com/Khan/aphrodite) for css styling
- Install Reach and Reach Standard Library
- More detailed Reach specific setup instruction can be found [here](https://docs.reach.sh/tut/rps/#tut-1)

# Future Feature Plans
- Improve on the UI
- Improve on the frontend code
- Optimise the smart contract code
- Enable contract to contract interaction
- Platform owner receives percentage from sale of every ticket
- Implement reselling ( This will enable reselling of already purchased ticket to be sold in the secondary market )
- Platform and event organizer profit profit from resale of ticket

# Blog and Video Demo
For more details you can checkout the blog post [here](https://medium.com/@agatevureglory/my-experience-developing-decentralised-app-with-reach-b96cd59b0f0f) . And here is the link to the youtube [demo](https://youtu.be/tAfJ3clA2kU)

# Login with Unstoppable
Integration with login with unstoppable can be found here `src/api/login.js`. To get your clientID follow this [guide](https://docs.unstoppabledomains.com/login-with-unstoppable/login-integration-guides/login-client-configuration/#rules-for-redirect-uris). Submission detail [here](https://github.com/gconnect/rsvp-dapp/blob/master/unstoppable-integration.md)

# LICENSE 
Distributed under the MIT License. See for more information LICENSE

#Disclaimer
This project is not audited and should not be used in a production environment.

