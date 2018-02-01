# Standard Project Template - Bootstrap4

### Set up Template

* Install all dependencies using ``npm install ``

###There are three task defined.

* ``npm run watch`` watch all Files and compile the css/js files and copy them into the ``dist`` folder
* ``npm start`` does the same like the watch task and starts an webserver: ``localhost:3001``
* ``npm run build`` compile all files, uglify them and copy into the ``build`` folder


## Required

* nodejs >= 6.x
* docker >= 17.x

## ECMAScript 6 (optional)

* *.js files will be compiled to ECMAScript5 files
* PHPStorm set -> Languages & Frameworks | Javascript -> JavaScript language version ECMAScript 6

## Update Packages

* Update package.json with ``npm install -g npm-check-updates`` and then ``ncu``
* Update only package.json with ``npm update -save`

## Troubleshooting

* rm -rf /usr/local/bin/npm-check-updates - if you have a problem with updating package.json

## Docker

This template comes with an docker-compose.yml which holds the orchestration setup for a php development stack.

For more information on the docker setup refer to [this repository on github](https://github.com/micron/docker-setup)

## Wordpress

* ``alias wp="docker-compose run -rm rafnixschaf/wp-cli"``
*  Configure wordpress ``docker-compose -f docker-compose.yml -f docker-compose.wp.yml up``