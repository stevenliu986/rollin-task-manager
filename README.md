# ROLLiN Mini Task Manager

## Project Screen Shots

![Project Screenshot](src\assets\images\task-list.png) ![Project Screenshot](src\assets\images\task-complted.png)

## Brief Explanation of Design Decisions

1. Component Architecture

    - Split into small, reusable components (Task, TaskHeader, PrimaryButton) for better maintainability.
    - Container components (like TaskList) manage state, while presentational components focus on UI.
    - All components use TypeScript interfaces (ITask, ITaskProps) for strict props validation.

2. State Management

    - Local State: Used useState for UI-specific state (tabs, loading states)
    - Derived State: Computed filteredTasks from source state to avoid redundant storage.

3. Performance Optimizations

    - Memoization: React.memo on frequently re-rendered components (e.g., Task).

4. UI/UX Choices

    - Ant Design: Leveraged for consistent, accessible, and responsive components.

5. TypeScript Adoption

    - Utility Types: Used `Readonly<T>` for props to prevent accidental mutations.
    - Event Typing: Properly typed Ant Design events (**CheckboxChangeEvent**).

6. Tradeoffs
    - No State Library: Chose `useState` over Redux/Zustand due to simpler requirements.
    - Basic Error Handling: Logged errors to console.

## Features

-   ✅ Create, read, update, and delete tasks
-   📅 Set due dates for tasks
-   🏷️ Categorize tasks as "In Progress" or "Completed"
-   🔍 Filter tasks by status

## Technologies Used

-   **Frontend**:
    -   React 18
    -   TypeScript
    -   Ant Design (UI Library)
    -   React Router (Navigation)
    -   Day.js (Date handling)
-   **Testing**:
    -   Vitest (Test runner)
    -   React Testing Library
-   **Build Tool**: Vite

## Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/stevenliu986/rollin-task-manager.git
    ```

2.  Install dependencies:

    ```bash
    cd rollin-task-manager
    npm install
    ```

3.  Start the backend service (task-api provided)
4.  Start the development server:

    ```bash
     npm run dev
    ```

5.  Testing - I use Vitest and React Testing Library for comprehensive testing:

    ```bash
    npm test
    ```

**Note:** The Figma design file provided is based on a mobile interface. For accurate testing, please set your browser viewport to simulate a **Mobile** (eg: an iPhone 14 Pro Max) during development and testing.

## Code Quality

-   TypeScript for type safety
-   ESLint for code linting
-   Prettier for code formatting
