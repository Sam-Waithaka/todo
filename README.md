# MERN To-Do App

A full-stack To-Do application built with the MERN stack (MongoDB, Express, React, Node.js).  
Live demo: [https://mern-todo-692s.onrender.com/](https://mern-todo-692s.onrender.com/)  
GitHub repo: [https://github.com/Sam-Waithaka/mern-todo](https://github.com/Sam-Waithaka/mern-todo)

## Features

- Create, update, and delete to-do items
- Responsive UI built with [DaisyUI](https://daisyui.com/) (Tailwind CSS plugin)
- Rate limiting using Redis via [Upstash](https://upstash.com/) to prevent abuse
- RESTful API with Express and MongoDB

## Technologies Used

- **Frontend:** React, DaisyUI, Tailwind CSS
- **Backend:** Node.js, Express, MongoDB
- **Rate Limiting:** Redis (Upstash)
- **Deployment:** Render

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
NODE_ENV=development
PORT=5000
MONGODB_URI=your_mongodb_connection_string
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
```

- Set `NODE_ENV` to `development` for local development, and `production` for production deployments.
- Set `PORT` to specify which port the backend server should run on during development.

## Getting Started

1. Clone the repo:
   ```
   git clone https://github.com/Sam-Waithaka/mern-todo
   cd mern-todo
   ```
2. Install dependencies:
   ```
   npm install
   cd client && npm install
   ```
3. Set up your `.env` file as described above.
4. Run the development servers:
   -  `npm run build`
   -  `npm run start`

## License

MIT
