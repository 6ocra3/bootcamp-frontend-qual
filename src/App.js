import s from "./index.module.scss"
import Timeline from "./components/Timeline";
import Bio from "./components/Bio";
function App() {
  console.log(s)
  return (
    <div className={s.App}>
      <Bio></Bio>
      <div style={{ overflow: "auto" }}>
        <Timeline></Timeline>
      </div>
    </div>
  );
}

export default App;
