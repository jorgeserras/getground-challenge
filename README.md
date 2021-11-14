# GetGround Frontend Developer Test

Welcome to the GetGround Frontend Developer Test. 
Thank you for having the time to review my submission and for the opportunity of developing the present app.

The restful JSON API used to populate the data is: [http://nyx.vima.ekt.gr:3000](http://nyx.vima.ekt.gr:3000).

### Main features
- The app was built using Typescript with React Hooks and Material UI
- Book data is loaded from the API and saved on a Redux store which then propagates to the appropriate components.
- A loading boolean is active every time the app is waiting for data to arrive from the API and informs every component connected to the store.
- Changing the search text, page or the number of rows per page will change the URL accordingly.
- Using the search field will populate the API's filters post param while changing the table's options (like page) will change the appropriate post params.
- To clear the previous search, click the "cross" icon in the search field.
- An example of a unit test is available for the component "Search".
- An example of a simple React class-based component is available in the component "Banner" (some comments are present just to show how state would be handled).

### Getting started

### `npm i`

Install all the needed dependencies.

#### `npm start`

Runs the app in the development mode.

#### `npm test`

Runs the app in the test mode.