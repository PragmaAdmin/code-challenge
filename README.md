# Pragmateam code challenge

Please refer to the provided document for the code challenge requirements. 

## Available scripts

### Root
- `npm install` - Installs dependencies client and server apps
- `npm start` - Runs client and server apps

### Client
- `npm start` - Start the application (Port 3000)
- `npm test` - Runs available tests

### Server
- `npm start` - Start the application (Port 8081)

## Jonathan Gonzalez Coding Exercise

### Components
In the refactoring process, 2 different components were created to make the code more readable and testable
These components are located in the new folder called __components__

- /src/components/Header.js
- /src/components/Home.js

### Data
A new file was created in the root direction of the client project to separate the logic with the provided information

- /src/data.js

## Testing
Due to the refactoring process, the test cases were created according to each component and also the data file

- /src/__ test__/App.test.js
- /src/__ test__/Data.test.js
- /src/__ test__/Header.test.js
- /src/__ test__/Home.test.js

## What to improve next time?
Next time I will include more test cases to the components, including the next scenarios

- Fetch:
  test the connection to the local server and also to the remote server
- Table:
  Validate the content table is not empty and the loaded data is correct
