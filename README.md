# DnD Class Guide :mage:

## Project Description

DnD Class Guide is for beginner players that need a class reference for 5e DnD. It attempts to showcase each class with a simple and modern look with fluid navigation. On the home page, the available classes in 5e DnD are loaded into view. The user is able to click any class and navigate to the details page. From the details page, the user can click a link to additional, off-site information about the class or, click the "DnD Class Guide" header at the top of the page to navigate back to the home page.

Future improvements will include additional class information for added depth and mobile responsiveness.

### Technologies
React, JavaScript, CSS, HTML, API: https://open5e.com/, Figma, Netlify

### Screen Captures of Current Version
<img width="1423" alt="Screen Shot 2022-12-11 at 5 04 59 PM" src="https://user-images.githubusercontent.com/116116801/206931992-f94b7019-3283-4c0f-a040-cbfda97cab48.png">
<img width="1416" alt="Screen Shot 2022-12-11 at 5 05 54 PM" src="https://user-images.githubusercontent.com/116116801/206932004-e49f16f6-39c2-43ad-811e-6da85a390890.png">


## Getting Started/Installation Instructions:
Launch the website via https://warm-selkie-a2ebf0.netlify.app/

## Wireframes

#### Home page wireframe
![App](https://user-images.githubusercontent.com/116116801/206928781-472b7a50-88ec-4e31-b31f-09b41ed7b8d1.png)

#### Character detail wireframe
![ClassDetail](https://user-images.githubusercontent.com/116116801/206928802-a31f3ffb-65ba-4a75-8fc5-be379b57f6c5.png)

#### Lofi wireframe prototype (clickable)
https://www.figma.com/proto/TZNIIBAR31zs2bUIdPh63i/Dnd-Class-Guide-App?node-id=1%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A63



### MVP User Stories
- As a user, I want to see all the class types in an organized and predictable method so that I can easily find one.
- As a user, I would like to have visuals, so that I can select a class that appeals to my personality.
- As a user, I want simple and intuitive navigation without many screens so that I can browse quickly and directly to the content that I want to research.

### Stretch MVP User Stories
- As a user, I would like to see more data about the classes, so that I do not have to navigate to another source for additional information.
- As a user, I would like a mobile friendly version, so that I can view the app on the fly while playing with friends.




## API
https://open5e.com/ was used to fetch DnD class data used in the app.
The specific end point used was https://api.open5e.com/classes/

### API data example
```` "count": 12,
"next": null,
"previous": null,
"results": [
{
"name": "Barbarian",
"slug": "barbarian",
"hit_dice": "1d12",
"hp_at_1st_level": "12 + your Constitution modifier",
"hp_at_higher_levels": "1d12 (or 7) + your Constitution modifier per barbarian level after 1st",
"prof_armor": "Light armor, medium armor, shields",
"prof_weapons": "Simple weapons, martial weapons",
"prof_tools": "None",
"prof_saving_throws": "Strength, Constitution",
"prof_skills": "Choose two from Animal Handling, Athletics, Intimidation, Nature, Perception, and Survival",
"equipment": "You start with the following equipment, in addition to the equipment granted by your background: \n \n* (*a*) a greataxe or (*b*) any martial melee weapon \n* (*a*) two handaxes or (*b*) any simple weapon \n* An explorer's pack and four javelins",
````



## Component Hierarchy

![Screen Shot 2022-12-11 at 4 39 23 PM](https://user-images.githubusercontent.com/116116801/206930294-8f5d4ef3-d67f-4c4b-b5bd-5eec7b0e6555.png)

![component_heirarchy_dnd_ref_guide](https://user-images.githubusercontent.com/116116801/206924817-0d570522-b669-4b8b-9597-37744c7652ee.png)

