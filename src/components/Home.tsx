import { useNavigate } from "react-router-dom";
import Pass_The_Pigs_Logo from "../assets/imgs/Pass_The_Pigs_Logo.webp";
import "../styling/home.css";

function Home() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/players");
  };
  return (
    <>
      <h1>Pass the Pigs Scorecard</h1>
      <div>
        <img id="homeImg" src={Pass_The_Pigs_Logo} alt="bowling ball" />
      </div>
      <button id="startButton" onClick={handleGetStarted}>
        Get Started!
      </button>
    </>
  );
}

export default Home;
