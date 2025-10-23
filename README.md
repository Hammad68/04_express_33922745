# MyPage

A very small Node.js web application built using Express. This app demonstrates how to create multiple routes and serve both plain text and HTML content.

## Technologies Used

- HTML – for structuring static web content (served via routes).
- CSS – (optional) to style HTML pages if added in /public.
- Node.js – JavaScript runtime for building the server.
- Express.js – to manage routes and handle HTTP requests.
- Path module – to resolve and send HTML files safely.

## How to Install and Run Locally

1. Clone the repository:
```
git clone <repository_url>
cd <repository_folder>
```

2. Install Node.js (if not already installed)
``` Download and install from https://nodejs.org ```

3. Install dependencies
``` 
npm install express 
```

4. Run the server
``` 
node index.js
 ```

5. Open your browser
``` Visit: http://localhost:8000 ```

### Routes Available

Route Description:
- '/' --- Displays “Hello World!”
- '/welcome/:name' --- Displays a personalized welcome message
- '/about' --- Displays information about the author
- '/contact' --- Shows an email contact link
- '/date' --- Displays the current date and time
- '/chain' --- Demonstrates route chaining with multiple handlers
- '/file' --- Sends and displays an HTML file from the /public folder


### Online Access

This project is also available on a virtual online server and can be accessed through the links below:

- http://www.doc.gold.ac.uk/usr/354/
