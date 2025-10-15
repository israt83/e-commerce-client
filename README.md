## LuxeBeauty

LuxeBeauty is a modern e-commerce platform designed for beauty and skincare lovers. It offers a curated selection of branded products such as perfumes, shampoos, and face creams from trusted and luxurious beauty brands. Users can easily browse, add items to their cart, and make secure payments through a smooth checkout process. Admins can efficiently manage products, brands, orders, and users through a powerful dashboard. With secure authentication, brand-focused product listings, and a fully responsive design, LuxeBeauty delivers an elegant and reliable shopping experience for both customers and administrators.

## Live site url

https://luxebeautys.netlify.app

## Server site repo

https://github.com/israt83/e-commerce-server

## Admin idp

- email: admin@gmail.com
- pass: admin90

## Key Features

- Branded Products: Browse luxury items like perfumes, shampoos, and face creams from top beauty brands.
- Secure Authentication: Firebase-based login and registration system.
- Stripe Payments: Safe and smooth checkout process.
- Order & Payment History: Users can view their payment and order records.
- Admin Dashboard: Manage products, users, and orders with ease.
- Responsive UI: Fully responsive design for desktop, tablet, and mobile.

## Technologies Used

- Frontend: React,Tailwind CSS,React Router DOM,React Hook Form,TanStack Query,AOS Animation,React Toastify,React Spinners,Swiper Slide,Lucide React Icons,React Tabs,Recharts (Admin dashboard charts),React Awesome Reveal,React Simple Captcha

- Backend: Express,JWT ,Stripe Payment Gateway
- Database: MongoDB
- Authentication: Firebase

## Running the Project Locally

1- Clone the cleint site repo repository:

- git clone https://github.com/israt83/e-commerce-client.git
- cd luxebeauty-client
- npm i

2- Set up Firebase for authentication and paste your own credential in firebase.config file.

3- Clone the server site repo repository:

- git clone https://github.com/israt83/e-commerce-server
- set up dependencies : npm i
- Set up MongoDB
- Set up MongoDB Atlas or run a local instance.
- Add your MongoDB connection URI located in index file

- npm run dev in client site then Open your browser and navigate to http://localhost: port
- if you want run server as well then write this command in terminal nodemon index.js , and paste the port in browser
