import React from "react";

const Footer = () => {
  return (
    <div>
      <footer id="mainFooter">
        <p>&copy; 2020 Deale Development</p>
        <p>0832912733</p>
        <p>maxericdeale@gmail.com</p>
        <p>www.deale-development.com</p>
      </footer>

      <style jsx>
        {`
          #mainFooter {
              margin-top-50px;
            background-color: black;
            height: 200px;
            color: white;
            display: grid;
            grid-template-columns: 1fr;
            text-align: center;
          }
        `}
      </style>
    </div>
  );
};

export default Footer;
