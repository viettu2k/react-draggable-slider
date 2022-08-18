import Slider from "react-draggable-slider";
import { projectList } from "./dummy";

function App() {
  const sliderSettings = {
    data: projectList,
    speed: 3000,
    bgColor: "#070707",
    showButton: true,
    buttonText: "View projects",
    buttonHref: "https://www.example.com",
    buttonTarget: "_self",
  };

  return (
    <div className="App">
      <Slider sliderSettings={sliderSettings} />
    </div>
  );
}

export default App;
