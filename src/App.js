import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
  console.log(AlexaImage); // string base64
  console.log(CortanaImage); // string base64
  console.log(SiriImage); // string path

  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title={"Alexa"}
                handle={"@alexa99"}
                image={AlexaImage}
                description="Alexa was created by Amaxon and helps you buy things."
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title={"Cortana"}
                handle={"@cortana23"}
                image={CortanaImage}
                description="Cortana was made by Microsoft. Who knows what it does?"
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title={"Siri"}
                handle={"@siri01"}
                image={SiriImage}
                description="Siri was made by Apple and is being phased out."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
