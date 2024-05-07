# React Vite App

This is a React app bootstrapped with Vite.

## Preview: https://drive.google.com/file/d/16thiU0WWIsxxgNjgaJs8z_XjZDXlzc0n/view?usp=drive_link

## Local Development

To run this app locally, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/masterghost2002/thence
   cd thence
   ```
2. **Install Dependencies:**
   ```bash
   yarn install
   ```
3. **Start The Development Server:**
   ```bash
   yarn run dev
   ```
4. **Open your browser and navigate to http://localhost:5173 to view the app.**

## Local Development using Docker

To run this app locally, follow these steps:

1. **Build the Docker Image:**

   ```bash
   docker build -t thence-web

   ```

2. **Run the Docker Container**
   ```bash
   docker run -d -p 8080:80 thence-web
   ```

## Testing Using Offical Docker File

To run this app locally, follow these steps:

1. **Pull The Offical Docker File:**

   ```bash
   docker pull rakeshdhariwal657/thence-web

   ```

2. **Run the Docker Container**
   ```bash
   docker run -d -p 8080:80 rakeshdhariwal657/thence-web
   ```
