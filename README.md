# Frugal Frames

A web application for budget conscious gamers who want to find deals on digital PC games.

This is an application build around the CheapShark API, which pulls game data from multiple online PC storefronts. I wanted to improve my skills with React and Node and make a full stack web application. Since there are so many places to purchase PC games from, I through an application to quickly compare prices from all of them would be very useful.

## Technologies Used

- React
- Node
- PostgreSQL
- Fetch API
- Javascript (ES6)


## Live Demo

Try the live application at: (hhttps://frugal-frames.herokuapp.com/)

## Features

- User can find game listings based on a search term
- User can narrow their search down with a price floor and/or a price ceiling.
- User can see store and price information from the results a page, and click a button to be redirected to the purchase page directly
- User can save game listing to their list.

## Preview

Preview Search Feature:
![Preview of search feature](https://github.com/vkalinkin/Frugal-Frames/blob/master/server/public/images/frugalFrames1.gif)
Preview of Save Feature:
![Preview of save feature](https://github.com/vkalinkin/Frugal-Frames/blob/master/server/public/images/frugalFrames2.gif)


## Stretch Features

- Remove items from MyList
- Sort results by price
- More Info modal for game results

## System Requirements

- Node.js 16.6.1 or higher
- NPM 7.20.6 or higher
- Postgresql

## Getting Started

1. Clone the repository.

    ```shell
    git clone https://github.com/vkalinkin/Frugal-Frames.git
    cd Frugal-Frames
    ```

1. Open project folder in code editor.

1. Install all dependencies with NPM.

    ```shell
    npm install
    ```
1. Start PostgreSQL. (Note when you're finished using the application, turn off PostgreSQL with Ctrl + C)

    ```shell
    sudo service postgresql start
    ```

1. Start the project. Once started you can view the application by opening http://localhost:3000 in your browser.

    ```shell
    npm run dev
    ```
