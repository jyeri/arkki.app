# ARKKI APP
[Link to vercel deployment](https://arkki-app.vercel.app/)

![Vite](https://img.shields.io/badge/vite-v2.9.9-yellowgreen)
![React](https://img.shields.io/badge/react-v17.0.2-blue)
![MongoDB](https://img.shields.io/badge/mongoDB-v4.4.6-green)
![TypeScript](https://img.shields.io/badge/typescript-v4.3.5-blue)
![JavaScript](https://img.shields.io/badge/javascript-ES6-yellow)
![Sass](https://img.shields.io/badge/sass-v1.32.0-pink)
![Node.js](https://img.shields.io/badge/node.js-v14.17.0-green)
![Vercel](https://img.shields.io/badge/vercel-deployed-black)

## Summary

Arkki app is a web application designed to tell our story and give vital info for those who seek it. Its also for us to plan our squad dynamically, providing users with a fully interactive drag-and-drop interface to select and organize players. It is built using React, TypeScript, and various modern technologies to ensure high performance and clean code architecture.

The application is composed of several key components following the Container-Logic-Presentation design pattern. This separation of concerns enhances scalability and maintainability by keeping logic and UI rendering independent. The project also uses advanced styling and animations to create a visually engaging user experience.

## Features

- Drag and Drop functionality to create custom football squads.
- Animated UI with Framer Motion for smooth transitions.
- Responsive design with dynamic layout adjustments for both portrait and landscape orientations.
- Modular component design adhering to custom hooks, container, and presentational views for a clean, maintainable architecture.

### Technologies Used
- **React**: For building reusable components and managing the overall UI.
- **TypeScript**: For static type checking, ensuring code reliability and maintainability.
- **Framer Motion**: For animations and smooth transitions across the interface.
- **@hello-pangea/dnd**: A React library for drag-and-drop interactions.
- **Sass (SCSS)**: For advanced styling and maintaining a modular stylesheet structure.
- **Custom Hooks**: Managing component logic like state, refs, and effects.
- **Grid and Flexbox**: CSS layouts for responsive and structured components.
- **MongoDB**: Database for our player information, works as one way fetch to end user.

## Project Structure

The project follows a component-based architecture divided into three parts: use hooks, container, and presentational views. This structure ensures that business logic is separated from UI components, leading to a clean and scalable codebase.

### 1. **Main Components**

**Header**
- Purpose: The header provides navigation across different sections of the app, including squad building and informational pages.
- Technologies:
  - Responsive design with Flexbox for consistent layout across devices.
  - Dynamic page selection using state management in React.
  - Styled with SCSS to match the overall theme of the application.
   
**SquadBuilder**
- Purpose: The main component where users can build their football squad. It allows for dragging and dropping players into different positions based on the selected formation.
- Technologies:
  - MongoDB to hold relevant player data.
  - DragDropContext from @hello-pangea/dnd for drag-and-drop functionality.
  - Custom Hook (useSquadBuilder): Manages the state, including the list of players, formation logic, and player positions.
  - Presentational Components: Attack, Mid, Def, GK, Substitutes, Reserves components for rendering each part of the squad.

**AboutUs**
- Purpose: Displays information about the team and the mission of the organization.
- Technologies:
  - Framer Motion: Used for animating paragraphs and images as they come into view.
  - Custom Hook (useAboutUs): Manages the logic and state for the AboutUs component, including refs for animated sections.
  - Presentational Components: MissionParagraph, ImageGallery.

**MissionParagraph**
- Purpose: A detailed section that describes the mission, journey, and invitation to join.
- Technologies:
  - Custom Hook (useMissionParagraph): Handles the refs used in the animated paragraphs.
  - Framer Motion: Smooth animations for text and images.
  - Presentational Component: MissionParagraphView.

**ImageGallery**
- Purpose: Provides a scrolling gallery of team images with controls for switching between images.
- Technologies:
  - Custom Hook (useImageGallery): Manages the state of the current image and controls for next/previous images.
  - Framer Motion: For smooth image transitions.
  - Presentational Component: ImageGalleryView.
 
**Information (WIP)**
- Purpose: Displays information details of board members and contact details for further inquiries.
- Technologies:
  - Custom Hook (useInformation): Handles any scroll-related logic.
  - Presentational Component: InformationView.
  - Framer Motion: Used to animate the sections to make it bit more lively.

**Footer**
- Purpose: Displays sponsors and relevant links at the bottom of the page.
- Technologies:
  - Custom Hook (useFooter): Handles any scroll-related logic.
  - Presentational Component: FooterView.
  - Framer Motion: Used to animate the appearance of sponsor logos.


### 2. **Detailed Component Breakdown**
Each component in this project is broken down into three layers:

Custom Hook (use[ComponentName]):

This hook manages the logic and state of the component. It may include API calls, refs, and event handlers. It decouples logic from the UI, making the component easier to maintain and test.
Container:

The container component consumes the custom hook and passes the necessary props to the presentational component. This acts as the connector between the hook and the view.
Presentational Component:

These are "dumb" components, responsible only for rendering the UI based on the props they receive. They contain no business logic.
Styling
The project uses SCSS for styling components. Each component has its own .scss file to maintain modularity and avoid CSS conflicts. Below are some key points about the styling approach:

- Responsive Design: Grid and Flexbox are used to create a responsive layout that adapts to different screen sizes, ensuring that the app looks great on mobile and desktop.
- CSS Grid: Used for structuring the layout of the squad builder, allowing for a flexible and responsive grid layout for player positions.
- Flexbox: Utilized for aligning content like sponsor images and formation lines, ensuring everything is centered and evenly spaced.
- Animations: All animations are powered by Framer Motion, which provides a declarative way to add animations and transitions to React components.

Example: SquadBuilder Styling
scss

```
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0;
  overflow: hidden;
}

.grid {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 2fr;
}
```

## How to Run the Project
To run the project locally, follow these steps:

**Prerequisites:**
1. Node.js (v12 or above)
2. npm or yarn

Steps:

1. **Clone the repository:**
git clone https://github.com/jyeri/arkki.app.git

2. **Install dependencies:**
cd arkki.app.git
npm install
or
yarn install

3. **Run the development server:**
npm start
or
yarn start

4. **Run the backend server**
cd backend
node server.js

6. **Build for production:**
npm run build
or
yarn build


## Future Improvements
API Integration: Implement real-time player data and squad-saving functionality using a backend service.
Dark Mode: Add a toggle for dark and light themes.
Performance Optimization: Improve rendering performance by lazy-loading certain components.

Pictures are taken by Talented *Niki Soukkio* and *Mikko Kuoppasalmi*, website is made by yours truly.
