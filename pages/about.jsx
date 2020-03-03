import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = () => (
  <div>
    <Navbar />

    <div>
      <Head>
        <title>Max Deale || Developer Portfolio</title>
      </Head>

      <main className="container">
        <div id="work">
          <img
            src="https://scontent.fcpt4-1.fna.fbcdn.net/v/t1.0-1/p160x160/65796680_140712827123087_4832749110433939456_n.jpg?_nc_cat=100&_nc_sid=dbb9e7&_nc_ohc=rsdW1ZvsM4kAX_g9maw&_nc_ht=scontent.fcpt4-1.fna&_nc_tp=6&oh=6e972909a6e35dcccf92517f84d712a0&oe=5E85A5A9"
            className="facepic"
            alt="noface"
          />
          <h3>Work History:</h3>
          <p>
            I was born in Johannesburg, where i lived for 20 years. I attended
            Pridwin Preparatory School , and St Johns College, matriculating in
            2008.
          </p>
          <p>I have had a passion for technology and music my whole life.</p>
          <p>
            After doing a year of a PPE Bachelors Degree at WITS University I
            decided to move to Cape Town in 2011 to pursue my passion for music,
            sound eingineering and film.
          </p>
          <p>
            I studied at Soul Candi, AFDA, and SAE - After i graduated from SAE
            i was fortunate enough to work multiple jobs in the music/sound/film
            world.
          </p>
          <p>
            I worked as an assistant engineer to Theo Crous , SA's best rock mix
            engineer, at Belville studios.
          </p>
          <p>
            I was the sales manager of a music store called Sound Select for 1
            year, from 2015-2016.
          </p>
          <p>
            I did various front of house sound engineering gigs, including
            Beefcakes Green Point FOH engineer.
          </p>
          <p>
            I then discovered the world of audio Dubbing with Waterfront Film
            Studios, now known as Blended Audio, where i became a professional
            voice actor, director and dubbing engineer. I have worked with
            Blended Audio since 2016.
          </p>
          <p>
            I began to grow increasingly uneasy at the lack of opportunities for
            creative indiduals in SA in my field, particularly in the Audio Post
            Production field, which is where i wanted to specialize. The jobs
            were scarce , to non existent in this area for multiple years, and i
            began to see that in order for me to really achieve my goals in
            life, i would need to make a serious plan.
          </p>
        </div>
        <div id="webdev">
          <img
            className="facepic"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQT9uXf_B9nN3Q5t9CSQvkPYuVdFz9vBDDUODpg6XqtjHvoHU9d"
            alt=""
          />
        </div>
        <h3>Web Development Experience</h3>
        <p>
          I discovered Web Development in May of 2018, having it recommended to
          me by a friend, i saw that programming in general was an area in which
          far more opportunities existed, not only in SA but the world over.
        </p>
        <p>
          I began my programming journey by taking a MYSQL udemy course by Colt
          Steele, i quickly found that i was fascinated with code and completed
          the course 100% within 2 months.
        </p>
        <p>
          After this i began my journey with Web Development. Taking multiple
          Udemy courses including Colt Steele's Web Developer bootcamp , Angela
          Yu's Web Developer Bootcamp, and a whole lot more.
        </p>
        <p>
          Learning code on Udemy and Youtube and the internet in general quickly
          turned into my entire life. I was fortunate enough to get my first web
          design job for the audio dubbing company i work for, Blended Audio.
        </p>
        <p>
          after a year of learning Web Development every day i decided it was
          something i wanted to do full time, so i decided to change careers. I
          dicovered Hyperion Development online and decided to enrol in their
          Full Stack Web Developer bootcamp in october 2019.
        </p>
        <p>
          After graduating from the bootcamp with 96% average grade i was
          convinced that this is what i wanted to pursue as a career, which
          brings me to where i am today. I am looking for any entry level Web
          Development position: Full Stack, Front End, UI design, my goal is to
          master all of these aspects of Web Development.
        </p>
        <p>
          I am extremely hungry to become a better programmer and to constantly
          learn and better myself.
        </p>

        <h3>Knowledge Timeline</h3>
        <p>Check out my learning journey by clicking on the brain</p>
        <a href="https://maxdeale.github.io/KnowledgeTimeline/">
          <img
            id="brain"
            src="data:image/png;base64,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"
            alt=""
          />
        </a>
      </main>

      <style jsx>
        {`
          @import url("https://fonts.googleapis.com/css?family=Dosis|Questrial&display=swap");

          .container {
            text-align: center;
            min-height: 30vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 900px;
            align-items: center;
            justify-self: center;
            margin: 0 auto;
            background-color: #e7f0c3;
            border-radius: 10px;
          }

          #brain {
            border-radius: 50%;
            margin: 1rem;
            transition: all 1s;
          }

          #brain:hover {
            transform: rotate(360deg);
          }

          .facepic {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            border: 4px solid black;
            margin: 1rem;
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

export default About;
