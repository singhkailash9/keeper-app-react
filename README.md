# React Keeper App

A Keeper app designed to keep notes, inspired by Google Keep, built using React.js, Express, Node and MongoDB.


## Deployment

To deploy the app, follow the steps [here](https://create-react-app.dev/docs/deployment/#github-pages).

For the **frontend** part hosted at github pages go to the [link](https://singhkailash9.github.io/keeper-app-react/).

**Note:** The backend is developed locally and is not hosted on GitHub Pages.

## Backend Setup

The backend is set up in the `Server` directory, utilizing Mongoose for database interactions and Express for the server framework.

1) Install the required modules using `npm install` in the root directory and also for the server in the server directory.
2) Install Mongoose and create a new database connection for the Keeper app.
3) Create a `.env` file in the root of the server directory with the following variables:
- `PORT` - The port number your server will listen on (e.g., 5000).
- `DATABASE_URL` - Your MongoDB connection URI.
4) Inside the server directory, run the Node server with the command `node server.js`.
5) In the root directory of the project, start the React app by running `npm start`.
\
You can now add, delete, and view notes as you wish. For testing and direct backend interaction, Postman can be used to make requests.

### Additional Notes

Feel free to contribute, test, and provide feedback on this project!