import * as React from "react";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {

  const[id,setId]=useState('')

  const[clients,setClients]=useState([])

  
  const navigate = useNavigate(); 

  const handleClick = (e) => {
    e.preventDefault();
    
    if (id === "0000") {
      // Redirect to the admin page
      navigate("/admin");
      return;
    }
  
    fetch(`http://localhost:8081/client/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else if (response.status === 404) {
          throw new Error("Client not found");
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        console.log(data);
        // Use navigate function to navigate to another page
        navigate(`/profile/${data.id_cl}`);
      })
      .catch((error) => {
        alert(error.message);
        console.error("There was a problem with your fetch operation:", error);
      });
  };
  
  


  useEffect(()=>{
    fetch("http://localhost:8081/client/getAll")
      .then(res=>res.json())
      .then((result)=>{
        setClients(result);
      });
  }, []);
  
  return (
    <>
      <div className="login-page">
        <div className="login-container">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/345479090b71f294cb797647a6a22363a094e4b031ba03d1408f1a1dbdd9d2b3?apiKey=a11b4e5be4844954afdd1ca8d799a068&" className="background-image" alt="" />
          <div className="login-form">
            <h2 className="login-heading">Hello Again!</h2>
            <p className="welcome-text">welcome again you've been missed</p>
            <form>
              <label htmlFor="loginId" className="visually-hidden">Your login id</label>

              <input type="text" id="loginId" className="login-input" placeholder="Your login id" 
              value={id}
              onChange={(e)=>setId(e.target.value)}
              />

              <button type="submit" className="sign-in-button" onClick={handleClick} >Sign in</button>

            </form>
            <p className="not-member-text">Not member ?</p>
          </div>
        </div>
        <footer className="footer">
          <div className="footer-content">
            <div className="logo">Logo</div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9f813c5771bb60623c1bcf87068db8f291386191e02a57ee6a5810749080333?apiKey=a11b4e5be4844954afdd1ca8d799a068&" className="logo-image" alt="Company logo" />
          </div>
          <p className="copyright">
            © 2024 Gym name
            <br />
          </p>
        </footer>
      </div>

      <style jsx>{`
        .login-page {
          background: linear-gradient(180deg, #0d0105 0%, #1f0d15 44.93%, #000 100%);
          color: #fff;
          display: flex;
          flex-direction: column;
          font-size: 16px;
          width: 99.0vw;
         
         
        }

        .login-container {
          align-items: end;
          border: 5px solid rgba(33, 16, 26, 1);
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
          display: flex;
          justify-content: center;
          margin: 5px 0px 0px 40px;
          max-width: 95vw;
          min-height: 100vh;
          height: 120vh;
          overflow: hidden;
          
          position: relative;
          width: 92vw;
        }
        
        
        @media (max-width: 991px) {
          .login-container {
            margin-top: 40px;
            max-width: 100%;
            padding: 0 20px;
          }
        }

        .background-image {
          height: 100vh;
          inset: 0;
          object-fit: cover;
          object-position: center;
          position: absolute;
          width: 100vw;
        }

        .login-form {
          align-items: center;
          display: flex;
          flex-direction: column;
          margin:0px 0px 300px 500px;
          max-width: 100%;
          position: relative;
          width: 287px;
          
        }

        @media (max-width: 991px) {
          .login-form {
            margin: 40px 10px 40px 0;
          }
        }

        .login-heading {
          font: 900 20px Inter, sans-serif;
          margin-right: 50px;
        }

        .welcome-text {
          align-self: stretch;
          font-family: Inter, sans-serif;
          font-weight: 400;
          margin-top: 10px;
          margin-right: 10px;
        } 

        @media (max-width: 991px) {
          .welcome-text {
            margin-top: 40px;
          }
        }

        .login-input {
          align-self: stretch;
          background-color: #481e32;
          border-radius: 40px;
          font-family: Inter, sans-serif;
          font-weight: 300;
          margin-top: 60px;
          padding: 23px 60px 23px 25px;
        }

        @media (max-width: 991px) {
          .login-input {
            margin-top: 40px;
            padding: 0 20px;
          }
        }

        .sign-in-button {
          background-color: #b44b7d;
          border-radius: 80px;
          font: 800 14px Inter, sans-serif;
          margin-top: 46px;
          margin-left: 60px;
          padding: 18px 37px;
        }

        @media (max-width: 991px) {
          .sign-in-button {
            margin-top: 40px;
            padding: 0 20px;
          }
        }

        .not-member-text {
          font: 300 14px Inter, sans-serif;
          margin-top: 40px;
          margin-right: 25px;
        }

        .footer {
          background-color: #000;
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
          display: flex;
          flex-direction: column;
          font-weight: 300;
          margin-top: 167px;
          padding: 9px 10px 9px 59px;
          width:94vw;
          height:10vh;
        }

        @media (max-width: 991px) {
          .footer {
            margin-top: 40px;
            max-width: 80vw;
            padding-left: 20px;
          }
        }

        .footer-content {
          display: flex;
          gap: 20px;
          justify-content: space-between;
        }

        @media (max-width: 991px) {
          .footer-content {
            flex-wrap: wrap;
            max-width: 100%;
          }
        }

        .logo {
          font-family: Inter, sans-serif;
          margin: auto 0;
        }

        .logo-image {
          aspect-ratio: 5;
          max-width: 100vw;
          object-fit: contain;
          object-position: center;
          width: 168px;
        }

        .copyright {
          font-family: Inter, sans-serif;
          margin-top: 25px;
        }

        @media (max-width: 991px) {
          .copyright {
            max-width: 100vw;
          }
        }

        .visually-hidden {
          border: 0;
          clip: rect(0 0 0 0);
          height: 1px;
          margin: -1px;
          overflow: hidden;
          padding: 0;
          position: absolute;
          width: 1px;
        }
      `}</style>
    </>
    
  );
}

export default LoginPage;
