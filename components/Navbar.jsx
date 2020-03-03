import React from "react";

const Navbar = props => {
  return (
    <div>
      <nav id="navbar">
        <ul>
          <li>
            {" "}
            <a href="/">Home</a>{" "}
          </li>
          <li>
            {" "}
            <a href="/about">About/CV</a>{" "}
          </li>
        </ul>
      </nav>

      <style jsx>
        {`
          #navbar {
            background-color: black;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          #navbar ul {
            display: flex;
          }

          #navbar ul li {
            list-style: none;

            padding: 0 30px;
          }

          #navbar ul li a {
            color: white;
            text-decoration: none;
            font-size: 1.3rem;
          }

          #navbar ul li a:hover {
            color: #f0cf85;
            text-decoration: none;
          }
        `}
      </style>
    </div>
  );
};

export default Navbar;
