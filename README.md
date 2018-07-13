# Krusty Burger :hamburger:

## Description

* Krusty Burger is a restaurant app that lets users input the names of burgers they'd like to eat.
* Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be eaten.
* Each burger in the waiting area also is a button. When the user clicks it, the burger will move to the right side of the page indicating it has been eaten. 
* The app will store every burger in a database, whether eaten or not.

## Design

* Krusty Burger app follows the MVC (Model, View, Control) design model
* Overall Node and MySQL query and route data in the app
* It utilizes the [express](https://www.npmjs.com/package/express), [body-parser](https://www.npmjs.com/package/body-parser), [method-override](https://www.npmjs.com/package/method-override), [handlebars](https://www.npmjs.com/package/express-handlebars), and [MySQL](https://www.npmjs.com/package/my-sql) npm packages
* A custom ORM was built to query and manipulate the burger data from the MySQL database
* Handlebars generates the HTML
* Materialize framework was used for the front end

## Demo

The Krusty Burger app is deployed via Heroku and can bew viewed from the link below.

[Krusty Burger](https://serene-castle-15761.herokuapp.com/)
