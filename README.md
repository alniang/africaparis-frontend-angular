Le projet africaparis est un site web qui permet de regrouper tout ce qui tourne au tour de la mode et de la culture africaine et afro caribéenne. 
L'architechture du projet comprend les éléments suivants :
- Un front Angular qui se connecter à un backend via une API rest
- Un backend Java / Spring boot sur lequel Angular viendra se connecter
- Une base de données MySQL pour stocker les informations “métiers” du Backend
- Une base de données MongoDB pour stocker les informations “data”
- Une partie server-side en NodeJS, qui devra récolter des données, les traiter et les insérer dans la base de données MongoDB.

Le projet est composé de 6 repos github :

# scrapping : https://github.com/alniang/scrapping
# africaparis-nodejs : https://github.com/alniang/africaparis-nodejs
# africaparis-ms-evenement : https://github.com/alniang/africaparis-ms-evenement
# africaparis-ms-boutique :https://github.com/alniang/africaparis-ms-boutique
# africaparis-ms-login : https://github.com/alniang/africaparis-ms-login
# africaparis-frontend-angular : https://github.com/alniang/africaparis-frontend-angular


   # africaparis-frontend-angular #
Dans cette partie Angular qui se connecter à un backend spring boot via une API rest.
Cette partie est réalisée avec angular 9
Pour utiliser ce projet il faut adapter les routes qui sont dans les service, dans : src/app/common/service



# AfricaparisFront

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

