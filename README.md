Project Name: Book Entries
Description
The Book Entries project is a dynamic web application designed to manage a collection of books. Users can add books, delete individual entries, and view the list of added books in a visually appealing interface. This project combines HTML, CSS, and JavaScript to demonstrate core web development concepts, including DOM manipulation, event handling, and responsive design.

Features
Add New Book: Users can input book details (title, author, and description) and add them to the collection.
Delete Book: Individual books can be removed with a delete button.
Popup Form: A popup form is used for adding new book entries, enhancing user experience.
Responsive Layout: The book entries are displayed in a structured and visually appealing container that adjusts to different screen sizes.
Interactive Design: Includes hover effects, buttons, and popups to improve usability.
Technology Stack
HTML: Structure of the webpage, including containers for books and forms.
CSS: Styling for the webpage, including popup overlays, buttons, and the main layout.
JavaScript: Interactive functionality, such as adding books, deleting books, and managing the popup form.
Code Breakdown
HTML
Header:
Contains the title "BOOKSKEY" styled as a navbar.
Container:
Displays a list of books in container-book elements.
Each book entry includes:
Title
Author
Description
Delete Button
Popup Form:
A form to add new books, containing:
Input for book title and author.
Textarea for a short description.
Buttons to add or cancel the action.
Floating Button:
A fixed-position button (+) to open the popup form.
CSS
Global Styles:
Resets padding and margin for all elements.
Navbar:
Styled with a bold background color and padding to highlight the title.
Book Container:
Each book (container-book) is styled with a dark theme, padding, and rounded corners.
Displays books in an inline-block layout for responsiveness.
Buttons:
Styled with rounded edges and hover effects.
Popup Form:
Includes an overlay (popup-overlay) for a dimmed background.
The form (popup-box) is styled with centered alignment and bold colors to draw attention.
Input Fields:
Styled for a clean and modern look, with custom placeholders and focus effects.
JavaScript
Popup Functionality:
Opens the popup form when the "Add" button is clicked.
Closes the popup form when the "Delete" button inside the form is clicked.
Add Book:
Captures user input from the popup form.
Creates a new div element (container-book) dynamically.
Appends the new book entry to the main container.
Hides the popup form after submission.
Delete Book:
Deletes a specific book entry when the delete button inside the container-book is clicked.
Event Handling:
Uses addEventListener to handle button clicks and form submissions.
How to Run
Clone the repository.
Open the index.html file in your browser.
Click the "+" button to add a new book entry.
Fill in the form with book details and click "ADD" to save.
Use the "DELETE" button to remove individual books.
Future Improvements
Add local storage to save book entries across sessions.
Implement search and filter functionality to manage large collections.
Enhance the UI with animations and additional styles.
Add form validation to ensure all fields are filled before submission.

  This project is a beginner-friendly demonstration of creating an interactive web application using core web technologies. It provides a foundational understanding of DOM manipulation, event-driven programming, and responsive design.














