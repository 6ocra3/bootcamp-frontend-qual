import s from "./index.module.scss"
import Timeline from "./components/Timeline";
import a from "./static/img/first-portfolio.png"
import b from "./static/img/vk.png"
import Bio from "./components/Bio";
import Carousel from "./components/Carousel";
import { CarouselChild } from "./components/Carousel";
function App() {
  console.log(s)
  return (
    <div className={s.App}>

      <Bio></Bio>
      <Timeline></Timeline>
    </div>
  );
}

export default App;
