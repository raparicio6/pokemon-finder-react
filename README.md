# Pokemon finder

[![Build Status](https://circleci.com/gh/raparicio6/pokemon-finder-react.svg?style=shield)](https://circleci.com/gh/raparicio6/pokemon-finder-react)

&nbsp;
Be a pokemon master!  

<img alt="Pokeball" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/601px-Pokebola-pokeball-png-0.png" height="200" width="200">

&nbsp;
## Getting Started

### Installing

Get the latest version of node from the [official website](https://nodejs.org/) or using [nvm](https://github.com/creationix/nvm).  
Nvm approach is preferred.

Install dependencies by running:  
`npm i`

Create a *.env.correspondingEnv* (e.g. .env.development) file at the root of the project and add:  
```
REACT_APP_USER_BASE_URL=api_back_url
```  
By default [backend](https://github.com/raparicio6/pokemon-finder-node) uses *http://localhost:8080* as the base url.

To start the server by default (development) run:  
`npm start`

To start a specific environment, run:  
`npm run start-env environment`

### Only building

To only build the application in a specific env, run:
`npm run build environment`

## Running the tests

In order to execute the tests run `npm test`.

## Built With

* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [SASS](https://sass-lang.com/)
* [CircleCI](https://circleci.com/)

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Run the tests (`npm test`)
4. Commit your changes (`git commit -am 'Add some feature'`)
5. Push to the branch (`git push origin my-new-feature`)
6. Create new Pull Request

## About

This project was written and is maintained by [Rodrigo Aparicio](https://github.com/raparicio6).

## License

This project is licensed under the MIT License