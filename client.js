const axios = require("axios");

const BASE_URL = "http://localhost:5000/api";

// Task 10: Async callback function
async function getBooks() {
  try {
    console.log("Task 10: Getting all books using async/await...");
    const response = await axios.get(`${BASE_URL}/books`);
    console.log("Books retrieved successfully:");
    console.log(JSON.stringify(response.data, null, 2));
    return response.data;
  } catch (error) {
    console.error("Error getting books:", error.message);
  }
}

// Task 11: Using Promises
function getByISBN(isbn) {
  console.log(`Task 11: Getting book by ISBN ${isbn} using promises...`);
  return axios.get(`${BASE_URL}/books/isbn/${isbn}`)
    .then(response => {
      console.log("Book found:");
      console.log(JSON.stringify(response.data, null, 2));
      return response.data;
    })
    .catch(error => {
      console.error("Error getting book by ISBN:", error.message);
    });
}

// Task 12: Get books by author using async/await
async function getByAuthor(author) {
  try {
    console.log(`Task 12: Getting books by author "${author}" using async/await...`);
    const response = await axios.get(`${BASE_URL}/books/author/${encodeURIComponent(author)}`);
    console.log("Books by author found:");
    console.log(JSON.stringify(response.data, null, 2));
    return response.data;
  } catch (error) {
    console.error("Error getting books by author:", error.message);
  }
}

// Task 13: Get books by title using async/await
async function getByTitle(title) {
  try {
    console.log(`Task 13: Getting books by title "${title}" using async/await...`);
    const response = await axios.get(`${BASE_URL}/books/title/${encodeURIComponent(title)}`);
    console.log("Books by title found:");
    console.log(JSON.stringify(response.data, null, 2));
    return response.data;
  } catch (error) {
    console.error("Error getting books by title:", error.message);
  }
}

// Main execution function
async function runTests() {
  console.log("=".repeat(50));
  console.log("Running Coursera Book Management API Client Tests");
  console.log("=".repeat(50));
  
  // Task 10: Async/await
  await getBooks();
  console.log("\n" + "-".repeat(30) + "\n");
  
  // Task 11: Promises
  await getByISBN("978-0-7432-7356-5");
  console.log("\n" + "-".repeat(30) + "\n");
  
  // Task 12: Author search
  await getByAuthor("F. Scott Fitzgerald");
  console.log("\n" + "-".repeat(30) + "\n");
  
  // Task 13: Title search
  await getByTitle("1984");
  console.log("\n" + "-".repeat(30) + "\n");
  
  console.log("All tests completed!");
}

// Export functions for use in other modules
module.exports = {
  getBooks,
  getByISBN,
  getByAuthor,
  getByTitle
};

// Run tests if this file is executed directly
if (require.main === module) {
  runTests();
}
