
# Async Race
SPA to manage the collection of cars, operate their engines, and show race statistics.
## 🚗 Functional Requirements:

 ### Basic Structure
 - Two main views: "Garage" and "Winners", each with their name, page number, and a  count of items in the database.
- Persistent view state between switches, maintaining user input and pagination.
### Garage View

- CRUD operations for cars with "name" and "color" attributes.
- Color selection from an RGB palette with a preview of the car in the chosen color.
- Pagination to display cars (7 per page) and a feature to generate 100 random cars at once.

### Car Animation

- Start/stop engine buttons with corresponding animations and handling of engine states.
- Adaptive animations that work on screens as small as 500px.

### Race Animation

- A button to start a race for all cars on the current page.
- A reset button to return all cars to their starting positions.
- Display the winner's name upon race completion.

### Winners View

- Display winning cars with their image, name, number of wins, and best time.
- Pagination and sorting capabilities by wins and best times.

## 🛠️ Technical Implementation

- Implement CRUD operations for cars using the provided server mock.
- Design UI elements for car management and race controls.
- Utilize fetch for server communication, and handle promises for asynchronous tasks.
- Create animations for car movements using JavaScript and CSS.
- Ensure responsiveness and compatibility across different devices and browsers.
## Tech Stack

**Client:** TypeScript, SASSS, HTML, CSS



## 🚀 About Me
https://github.com/artmigalev


## Roadmap
- **TypeScript**: The application must be developed using TypeScript. All method input and output parameters must be typed accurately, and the use of explicit or implicit "any" type, type assertions (`foo as BarType`) and non-nullability assertions (`y!`) is not allowed.
- **Modular Architecture**: Clear separation of concerns between API interaction, UI rendering, and state management.
- **Modular Architecture**: Clear separation of concerns between API interaction, UI rendering, and state management.

- **SPA Implementation**: Entire content generated via TypeScript, utilizing Vite/Webpack or similar for bundling.


## Authors

- [@artmigalev](https://github.com/artmigalev)


## Badges
![GitHub User's stars](https://img.shields.io/github/stars/artmigalev)

![GitHub repo file or directory count](https://img.shields.io/github/directory-file-count/artmigalev/async-race)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/artmigalev/async-race)



