import { render } from '@testing-library/react';
import React from 'react';
import { Link } from 'react-router-dom';

class Main1 extends React.Component{
  render(){
    return (
      <body  style={{backgroundImage: `url(${process.env.PUBLIC_URL}/img/header.png)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>
     
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
       
          <meta name="description" content="" />
          <meta name="keywords" content="" />

          <link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"/>
          <link href="https://unpkg.com/@tailwindcss/custom-forms/dist/custom-forms.min.css" rel="stylesheet" />
        </head>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
            html {
              font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
            }
          `}
        </style>
    
    <div class="h-full">
    
      <div class="w-full container mx-auto">
        <div class="w-full flex items-center justify-between">
          <a class="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
            Gym<span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">Fitness</span>
          </a>

          <div class="flex w-1/2 justify-end content-center">
            <a class="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out" href="https://twitter.com/intent/tweet?url=#">
              <svg class="fill-current h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path
                  d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"
                ></path>
              </svg>
            </a>
            <a
              class="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
              href="https://www.facebook.com/sharer/sharer.php?u=#"
            >
              <svg class="fill-current h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
     
<div class="container mx-auto flex flex-wrap items-center justify-center mt-12">
  <div style={{ textAlign: 'center', marginTop: '130px' }}>
    <h1 class="my-9 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center">
      Whassup, <span class="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">Bodybuilder</span>
    </h1>
    <div class="flex justify-center">
    <Link to="./login">
        
     
      <button class="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out" type="button">
        Get Started
      </button>
    </Link>
    </div>
    <p style={{ marginTop: '2rem', fontSize: '1rem' }}>
      build your muscles with us.
    </p>
  </div>
</div>



    <div class="container mx-auto flex flex-wrap items-center justify-center mt-12">
        <div class="w-full md:w-1/2 p-8 mt-12" style={{ marginTop: '100px' }}>
            <img src="./img/Gym-1-1.jpg" alt="Image description" class="mx-auto w-full md:w-4/5 transform -rotate-5 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6" />
        </div>
        <div class="w-full md:w-1/2 p-8" style={{ marginTop: '50px' }}>
            <h2 class="text-2xl md:text-4xl text-white font-bold leading-tight text-center md:text-left">About Us</h2>
            <p class="text-lg text-gray-300 mt-4 text-center md:text-left">Your about text goes here. You can write about your company, services, mission, etc.</p>
        </div>
    </div>
       

    <div> 
   
        <div class="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
          <a class="text-gray-500 no-underline hover:no-underline" href="#">&copy; App 2024</a>
          - Work by
          <a class="text-gray-500 no-underline hover:no-underline" href="#"> Achref a</a><a class="text-gray-500 no-underline hover:no-underline" href='#'>nd Emna</a>
        </div>
    </div>
 
</div>



    </body>
    );
  }
}

export default Main1;