# Pokepedia

This Project is a MEAN stack web app on **Pokemons**. The app has an elegant and attractive UI.The primary feature of the app is the pokedex.

The pokedex provides all the basic details about the pokemons in beautiful pokemon cards, features functionalities such as real time searching of the pokemons by name over the database and filtering pokemons by types and/or abilities. Apart from pokedex, the app also features other components such as home screen for the app, about page, etc.

Over the top, web app is also a **Progressive Web App (PWA)** providing the rich functionalities of the progressive web apps. The app can also act like a native app and can be installed natively on desktop or mobile device.

## Instructions to run the project:

The project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

The project uses Express ^4.17.1 and MongoDB shell v4.2.6

### Running Development server and Project

- Clone the repository into your local system and install the node_modules in both the directories, pokepedia-frontend and pokepedia-backend. For installing navigate to the respective directories and run the `npm install` command there.

- Open the terminal. Navigate to the pokepdia-frontend directory.
  Run `ng serve` for a angular dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

- Assuming you have MongoDB already installed. Import the given database collections file 'pokemonsdata'.
  The database collections file is created with the data fetched from the official pokemon public api `https://pokeapi.co/api/v2/pokemon`. The data is filtered and structured as per the need and stored in the database.
  You can explore more on the API usage from the official pokemon api website pokeapi.co .

- For running the backend. Open another terminal. Navigate to the pokepedia-backend directory. Run `npm run serverStart` which will start the express server on port -3000 as well as establish the connection with MongoDB database.

- Open the browser window. Hit the URL `http://localhost:4200/` and you are good to go. Explore and have fun experimenting with the app and feel free to fork it.

### Build

- Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running app as a progressive web app

- For app to behave as a progresssive web app you need to install a node based server like **http-server** or **lite-server**. You can install it globally using `npm install -g http-server` and `npm install -g lite-server`.

- Navigate to your frontend app directory. Run `ng build --prod`. This will create a dist folder at the root of your directory. Navigate inside dist/pokepedia. Run `lite-server` or `http-server` command which will deploy your project build on these local server.
  You will find the install button at the end of the URL bar when you run the app on any of these server. When you click on the install button the app will be added to your home screen and you can use it as a native app. You can explore and learn more on PWA and experiment with the app.
