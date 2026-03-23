# Deployment Instructions

## Local Development
1. **Prerequisites**: Ensure Node.js and npm are installed on your machine.
2. **Clone the repository**: 
   ```bash
   git clone https://github.com/Ninoivo/spiritual-store-backend.git
   cd spiritual-store-backend
   ```
3. **Install dependencies**: 
   ```bash
   npm install
   ```
4. **Run the application**:
   ```bash
   npm run dev
   ```

## Production Deployment on Heroku
1. **Prerequisites**: Create a Heroku account and install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).
2. **Login to Heroku**: 
   ```bash
   heroku login
   ```
3. **Create a new Heroku app**: 
   ```bash
   heroku create YOUR_APP_NAME
   ```
4. **Set environment variables**: 
   ```bash
   heroku config:set KEY=VALUE
   ```
5. **Deploy to Heroku**: 
   ```bash
   git push heroku main
   ```
6. **Open your app**: 
   ```bash
   heroku open
   ```

## Production Deployment on AWS
1. **Prerequisites**: Create an AWS account and set up the AWS CLI.
2. **Build your application**: 
   ```bash
   npm build
   ```
3. **Create an S3 bucket**: (optional, for hosting static files)
   ```bash
   aws s3 mb s3://YOUR_BUCKET_NAME
   ```
4. **Deploy using Elastic Beanstalk**:
   ```bash
   eb init
   eb create YOUR_ENV_NAME
   eb deploy
   ```
5. **Access your application**: 
   ```bash
   eb open
   ```

## Docker Containerization
1. **Dockerfile example**:
   ```dockerfile
   FROM node:14
   WORKDIR /app
   COPY package*.json ./
   RUN npm install
   COPY . .
   CMD [ "npm", "start" ]
   ```
2. **Build the Docker image**: 
   ```bash
   docker build -t YOUR_IMAGE_NAME .
   ```
3. **Run the Docker container**:
   ```bash
   docker run -p 3000:3000 YOUR_IMAGE_NAME
   ```

4. **Access your application**: Open your browser and go to `http://localhost:3000`
