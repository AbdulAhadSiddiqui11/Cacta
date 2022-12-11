<h1 align="center">Welcome to Cacta 👋</h1>

<div align="center">

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Google](https://img.shields.io/badge/google-4285F4?style=for-the-badge&logo=google&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

</div>

<h2 align="center">Cacta is deployed and live, click <a href="https://cacta.vercel.app" target="_blank">here</a> to join Cacta now!

### Cacta is a social media platform for creating, sharing and discovering short videos
#### Features:
* <b>Modern & responsive design</b> : Cacta comes with beautiful modern design with fully responsive layout which results in an amazing UX
* <b>Google Authentication</b> : Login with your existing Google accounts with just one click
* <b>Upload videos</b> : Upload and share videos among your friends and peers in an instant 
* <b>Like & comments</b> : Once you login, you can like, comment and engage with videos uploaded on Cacta
* <b>User profiles</b> : All users will have their own profile page where uploaded videos and likes will be displayed
* <b>Search</b> : Search existing accounts or videos with advanced search functionality on Cacta
* <b>Suggested accounts</b> : Cacta will suggest you accounts on the side bar from time to time
* <b>Topics tags</b> : Cacta comes with topic tags which can be used to filter videos by topic

## Tech. stack
### Front-end stack
* [Next.js](https://nextjs.org/)
* [React.js](https://reactjs.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Typescript](https://www.typescriptlang.org/)
### Back-end stack
* [Next.js](https://nextjs.org/) : API endpoints and serverside rendering
* [Google Identity Services SDK](https://developers.google.com/identity/protocols/oauth2) : Google authentication with React
* [Zustand](https://github.com/pmndrs/zustand) : State management
* [Sanity](https://www.sanity.io/docs) : Datastore / Headless CMS


## Installing locally

### Setting up Sanity datastore
* Create a <i>Sanity project</i> with schema provided in ```./cacta-backend```
* Check out [Sanity documentation](https://www.sanity.io/docs) for a step by step guide
* Once you have your Sanity datastore ready, fill in your env. varilables and proceed with the next steps

### Obtaining Google OAuth 2.0 client credentials
* Create a new project on [Google API Console](https://console.developers.google.com/) to get OAuth 2.0 client credentials
* Following the detailed instructions [here](https://developers.google.com/identity/protocols/oauth2) to get the crendentials

### Setting up dev. environment variables
* Create a new file ```.env.development``` under ```./``` and fill the following three variables
```sh
NEXT_PUBLIC_SANITY_TOKEN = < YOUR SANITY PUBLIC TOKEN >

NEXT_PUBLIC_GOOGLE_API_TOKEN = < YOUR GOOGLE AUTH PUBLIC TOKEN >

NEXT_PUBLIC_BASE_URL = http://localhost:3000
```

### Installing dependencies
* Use the following command in your terminal from ```./``` to install project dependencies
```sh
npm install
< or >
yarn install
< or>
pnpm install
```

### Starting the development server
* After you have installed dependencies, use the following command in your terminal from ```./``` to start the dev. server
```sh
npm run dev
< or >
yarn dev
< or >
pnpm dev
```
* Visit ```http://localhost:3000``` to view Cacta on your local machine

## Build & Deploy

### Environment variables
* Update the evniornment variables on your hosting platform before building
* ```NEXT_PUBLIC_BASE_URL``` can be left empty initially and can be updated once the app is hosted
```sh
NEXT_PUBLIC_SANITY_TOKEN = < YOUR SANITY PUBLIC TOKEN >

NEXT_PUBLIC_GOOGLE_API_TOKEN = < YOUR GOOGLE AUTH PUBLIC TOKEN >

NEXT_PUBLIC_BASE_URL = < Hosted URL >
```

### Build command
* Use the following commands for building and deploying
```sh
npm run build
< or >
next build
```

### Install command
```sh
npm install
< or >
yarn install
< or>
pnpm install
```
* Congratulations your Cacta app is up and running!

## Author

👤 **Abdul Ahad Siddiqui**

* Github: [@AbdulAhadSiddiqui11](https://github.com/AbdulAhadSiddiqui11)
* LinkedIn: [@abdulahadsiddiqui11](https://linkedin.com/in/abdulahadsiddiqui11)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/AbdulAhadSiddiqui11/Cacta/issues). 

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2023 [Abdul Ahad Siddiqui](https://github.com/AbdulAhadSiddiqui11).<br />
This project is [MIT](https://github.com/AbdulAhadSiddiqui11/Cacta/blob/main/LICENSE) licensed.
