# Fetch and Filter Posts from Mock API

This project demonstrates how to fetch post data from a mock API, filter the data based on a keyword in the post title, and handle errors using try and catch.

## Features

- Fetches posts from a mock API.
- Filters posts based on a keyword in the title.
- Handles errors gracefully and logs them to the console.
- Outputs the filtered posts or an appropriate message if no posts are found.

## Technologies Used

- *JavaScript*: For fetching data, filtering results, and handling errors.
- *HTML & CSS*: Basic structure and styling for any front-end representation.

## How It Works

1. *Fetch Data*: The getFilteredPosts function fetches data from the API at https://jsonplaceholder.typicode.com/posts.
2. *Filter Data*: The function filters posts to include only those whose titles contain the specified keyword.
3. *Error Handling*: If an error occurs (e.g., network issues or API failure), it is caught and logged to the console.
