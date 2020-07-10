## For Deployment

Install Node.js and npm. Clone the git repository. Open terminal in same directory and install dependencies:
### `npm install`

For production build run:
### `npm run build`

Create .env file based on example.env with Google maps API Key. There you must configure login for the admin panel as we don't use database for such a small amount of data.
Inside you can define a port as well and SMTP server credentials. 

And start the project:
### `npm start`

