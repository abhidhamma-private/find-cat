import { useState } from "react";
import "./App.css";
import Head from "./assets/head.png";
import { Popup } from "./Popup";

// import { Popup } from './popup'

function App() {
  const [isShowCat, setShowCat] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const emptyStyle: React.CSSProperties = {
    cursor: "pointer",
    width: "85px",
    height: "95px",
    top: "19.5%",
    left: "48%",
    position: "relative",
    // backgroundColor:'red'
  };

  const catStyle: React.CSSProperties = {
    cursor: "pointer",
    width: "150px",
    height: "120px",
    top: "18.7%",
    left: "42%",
    position: "relative",
    marginTop: "0px",
    backgroundImage: `url(${Head})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "150px",
  };

  const onCatClick = () => {
    // alert("이거 고양이 맞아요")
    setShowCat((showCat) => !showCat);
    setIsOpen((open) => !open);
  };

  return (
    <>
      <h1 className="title">고양이 찾기</h1>
      <div className="catFrame">
        <div
          style={isShowCat ? catStyle : emptyStyle}
          onClick={onCatClick}
        ></div>
      </div>
      <Popup
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isShowCat={isShowCat}
        setShowCat={setShowCat}
      />
    </>
  );
}

export default App;
