
import Header from "./Components/Header/Header";
import react, { useState } from "react";
import "./App.css"
import Images from "./Components/Images/Images";



function App() {
  const [ imagesArray, setImagesArray ] = useState([]);
  const [ score, setScore ] = useState(0)
  const [ bestScore, setBestscore ] = useState(0)

  const updateScore = () => {
    setScore(score + 1)
    console.log(score)
}

  function checkImagesArray(image) {
    if(!imagesArray.includes(image)) {
      setBestscore(0);
      setImagesArray([...imagesArray, image])
      updateScore();
    } else {
      setBestscore(score);
      setScore(0);
      setImagesArray([]);
      alert("You lost, you clicked on the same image twice :(")
    }
  }


  return (
    <div className="App" >
      <Header 
      score={score}
      bestScore={bestScore}
      />
      <Images 
      checkImagesArray={checkImagesArray}
      />
    </div>
  );
}

export default App;
