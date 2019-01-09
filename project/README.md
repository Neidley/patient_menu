## Problem

"The rules are simple:
Spend no more than three hours on this project.
Please make your project accessible through GitHub.
Don't enlist any help. We want to see what you bring to the table.
Email a link to your GitHub repo that contains the menu back to this address.

Given the following:

* menu.png
* advanced.png
* patients.json

Make a menu with an advanced search option. Within the 'ADVANCED SEARCH' modal, when you click the 'SEARCH' button, it should change the menu to only show the patients that meet your search criteria. When you click on a patient, a modal should pop open detailing the menu information but in a different format. How this is actually displayed is up to you.


Things to note:

* This needs to be written in AngularJS.
* The page doesn't have to look exactly like the menu.png or advanced.png files. However, all of the indexes currently in the patients.json file must be displayed and be easily readable.
* You can add/edit/remove information within the patients.json file but the indexes currently in the file must still be used.
* You do not need to import the patients.json file. You can simply take the json out of the file to be used as a json array within the JS itself.
* Feel free to add advanced search filters but the ones currently in advanced.png have to exist and work.
* Note that in advanced.png there are options for "ORDER", "ORDER BY", and "LIMIT TO". These are not actually filters but sort and limit options.
* ORDER BY = All of the headers in the menu.png patient table should be able to be used to sort (order) by.
* LIMIT TO = If you have 5 patients but I limit to 2 patients, I should see the first 2 patients. In the image examples, that would be "ANGANAGARI, SHA" and "ATEST, ATEST"
* We used Bootstrap 3 for our example images. If you don't want to create your own CSS, feel free to use Bootstrap as well."

## Solution

Break down the problem into manageable "User Stories" (normally I would git branch each user story/feature, but here we only have 3 hours)

* [X] Create AngularJS project, Add Angular-UI Router for routes, Add Bootstrap for styling and $uibModal

* [X] Homepage should display all patients. (Dynamically serve patients info from HomeCtrl.js to templates/home.html)

* [X] When I click on a patient, a patient detail modal should open

* [  ] When I click on "ADVANCED SEARCH", a modal opens with input field and search button, menu changes to only show patients that meet criteria

* [  ] When I click a heading, the menu should sort asc/desc by that value

* [  ] I should be able to limit the results from the menu(homepage).

## Clone the repo

Clone this repository from your terminal with:

`git clone https://github.com/Neidley/patient_menu.git`

## Configuration

Install the project dependencies by running:

```
$ npm install
```

## Run the Application

Run the application server:

```
$ npm start
```

The server will start up. To stop the server, press `cntrl + c`.
