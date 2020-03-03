import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => (
  <div>
    <Navbar />

    <div className="container">
      <Head>
        <title>Max Deale || Developer Portfolio</title>
      </Head>

      <main>
        <header>
          <h1 className="title">Max Eric Chartlon Deale</h1>
          <img
            src="https://www.deale-development.com/img/happy1.jpg"
            id="max"
            alt="nomax"
          />
          <div>
            <img
              id="codeIcon"
              className="iconImage"
              src="data:image/png;base64,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"
              alt=""
            />
            <h5 id="job">Full Stack Web Developer</h5>
          </div>

          <div id="links">
            <h5>
              Github:{" "}
              <a href=" https://github.com/MaxDeale">
                {" "}
                <img
                  className="iconImage"
                  src="data:image/png;base64,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"
                  alt=""
                />{" "}
              </a>{" "}
            </h5>
            <h5>
              LinkedIn:{" "}
              <a href="https://www.linkedin.com/in/max-deale-63619a198/">
                {" "}
                <img
                  className="iconImage"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEUAAAD///9MTEz8/PyTk5PNzc339/c4ODjo6OhPT0+MjIzu7u6xsbERERGnp6fy8vIiIiLe3t6fn58+Pj5GRkaBgYF6enpfX1/R0dG6urqPj4/X19eZmZlmZmZZWVlkZGQuLi4xMTEZGRlycnK3t7fExMQnJycdHR0+1Fr0AAAFB0lEQVR4nO2daXeqMBCGQW8RcEG02kXa2lbo//+H17WKLJPKjFnO+3wup/Mck5BkksHzrwhHcTQdezYynkbxKLwW8sp62UB3mJ0ZZGGjYRDrjo6JOKg3nOgOjJFJjWES6Y6KlSi5NkwL3TExU6RlwwfdAQnwcGmY6o5GhPRsmLjWRA8Uya+hW4PMmehk6NJroszkYBjojkOQYG/oykymjnhnGOqOQpRwa5jpDkKUbGto/2qijYHvud1It83UG+kOQZiR5/JIuiP2XJ3PnIi8qe4QhJl6dm46qeO6HwAAACBB722ZbWaLt3fdgcjwcZG6GuZL3eGwsxxeJeb6bu0OPFUyjy6l47bMavycynfkDYK+H651x8ZCXQv9xYWdrOZfcD+q6g6vO0198MSz7gC78kQI+v5Md4gdae2EB+xOPy5pQf9Fd5CduJ7J1PKpO8oOfKgIWt0TR0qGNic/FMaZHXPdcd5MT03QX+gO9GbeFA3tPeyg8q7YkesO9GYyRUN7D1VtnDekZt32Gy4UDe3th+6Ppe+Khq+6A70dpYm371u8Q9y+g3Ei0R1mB9Re+VYfyuk73kjVZjUr3UF2I6ANe7pj7EZMCtr7uj/yQAgOv3RH2Blinf+oO77urFsFv3WHx8GgZWbjhOCW56Y+6EATPVK/UMztH2TOFC8Vv5Xl78EKn7PLQTUZWT1Va2K+mORpmuaTVyf1AAAAAAAAAACA+zL+Wc/n6+JHdxwyPC436anGU/j8Ejt2E3s+q+6vDx8Wwnd5e36/Hf9f/YMB9dz1ZY1lWtE70M+fZA0pGgzJ3GrZcNF6ZCAUvGZ1H8PKraqqo9j5x3sY/lAZvD0roVOsdzCkk7BHZA4myRtW8wWNpBJn5qUN100jaC2BQDZP2PBR4SRECf47j7KGc6XzOiXYO6Oo4effBflPYEka/iTU39TC/CtKGiq9Bmvg7YtyhvnrjYLM5yPkDIe3dMIDAed7Uc6wC5xH58005BxtDDVkvENuqiHfoVZTDX22NbGxhmzXOo01ZPsRzTXk+hHNNfSZduAMNmQ6YH43w2G6SsO/PWSTYf5d7He2p++bPyz6eTYY72DYL1cs+Fa8TsbVTOUNN5UqsZniszw3ysQN65papLj4ZznmKmzYrw/yS62YA8tiX9iwMT+o1Bk35hs2j4aPKs+zLDBEDdtq96jcI2eZuEka9ltT9Qrb/QFHASdJw/bKiyqFVThW+oKGAXHlZkUbcqQUBQ2pKYlCXpHj3pWgIbWELWhDjotJgobkKRK6mRpuSP7vpkuBthjSNSXp/LfZhnRJSboYgNmGdAHbfzCEIQxhCEMYwhCGMIQhDGEIQxjCEIYwhCEMYQhDGMIQhjCEIQxhCEMYwhCGMIQhDGEIQxjCEIYwhCEMYQhDGMIQhjCEoYBhRP6Xhpug5HP0NWX6VhBHqehx1GsnWtc/SDzWi+j7n2vyfwuXiQYAAAAAAPfC9Ynd2KtUEnOMqefYl2oqRB5/IX6ziD3uIvWmMfLYatUaSugxVo02kYHvEfW2bCfbGrrdTMOtocBnTcwh9neGge4wBAn2hkJfUTKBiX8wZNlWNZH9ZvbeMOGor2geRfJryPo9DHM41M48ZhfoJIl9HD/Tc8qfpK411OJU/fQ3Q5S4Ndyci0lf5MBcemlMzlqXWb7AldlNfFm4vpzHDDP7VxqDrFwKvJKpDUdxNLVze2o8jeJRpdL5f2YjU4xtkVEnAAAAAElFTkSuQmCC"
                  alt=""
                />{" "}
              </a>{" "}
            </h5>
            <h5>
              Work Portfolio:{" "}
              <a href="https://www.deale-development.com/">
                {" "}
                <img
                  className="iconImage"
                  src="https://www.deale-development.com/img/DealeLogo.png"
                  alt=""
                />{" "}
              </a>
            </h5>
          </div>
        </header>
      </main>

      <style jsx>
        {`
          @import url("https://fonts.googleapis.com/css?family=Dosis|Questrial&display=swap");

          .container {
            min-height: 30vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          #codeIcon {
            margin-left: 130px;
            margin-top: 20px;
          }

          .title {
            margin-left: 10px;
          }

          #links {
            background-color: #e7f0c3;
            border: 5px solid black;
            border-radius: 5px;
            margin-bottom: 50px;
          }

          #max {
            height: 300px;
            width: 300px;
            border: 3px solid black;
            border-radius: 5px;
          }

          .iconImage {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-left: 20px;
            transition: all 0.5s;
          }

          .iconImage:hover {
            transform: scale(1.2);
            border: 2px solid purple;
          }

          header h5 {
            margin-left: 90px;
          }
        `}
      </style>

      <style jsx global>
        {`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: "Dosis";
            background-color: #f0cf85;
          }

          * {
            box-sizing: border-box;
          }
        `}
      </style>
    </div>
    <Footer />
  </div>
);

export default Home;
