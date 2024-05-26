# Blog Submission Application

A simple web application to submit, view, edit, and delete blog posts using Node.js, Express, and EJS.

## Features

- Submit new blog posts with title, author name, category, and content.
- View a list of blog post titles.
- View details of each blog post.
- Edit existing blog posts.
- Delete blog posts.

## Installation

1. Clone the repository:

git clone https://github.com/marielyeng/blog-site-ejs.git
cd blog-submission-app

1. Install dependencies:
npm install

1. Start the server:
npm start

## Usage

- Open your web browser and go to http://localhost:3000.
- You will see a form to submit a new blog post.
- Fill in the form and submit a new blog post.
- After submission, you will be redirected to the collection page where you can see a list of submitted blog post titles.
- Click on a blog post title to view its details.


In the details view, you can:

- Edit the blog post by clicking the "Edit" button. This will allow you to modify the title, author name, category, and content of the blog post. After editing, click "Submit" to save changes or "Cancel" to discard changes.
- Delete the blog post by clicking the "Delete" button. You will be prompted to confirm the deletion.


## API Endpoints
GET /: Renders the index page with the form to submit a new blog post.

POST /submit: Handles the form submission and adds a new blog post to the collection.

GET /collection: Renders the collection page with the list of blog post titles and details view.

PUT /update/:index: Updates an existing blog post based on its index in the collection.

DELETE /delete/:index: Deletes a blog post based on its index in the collection.