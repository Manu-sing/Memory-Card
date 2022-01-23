import React, { useState, useEffect } from "react";
import bird from "./bird.jpg"
import bird1 from "./bird1.jpg"
import bird2 from "./bird2.jpg"
import bird3 from "./bird3.jpg"
import owl from "./owl.jpg"
import owl1 from "./owl1.jpg"
import owl2 from "./owl2.jpg"
import penguin from "./penguin.jpg"
import penguin1 from "./penguin1.jpg"
import penguin3 from "./penguin3.jpg"
import sloth from "./sloth.jpg"
import sloth1 from "./sloth1.jpg"
import "./Images.css"


const Images = ( { checkImagesArray } ) => {

    const [images, setImages] = useState([
        {name: bird}, 
        {name: bird1}, 
        {name: bird2},
        {name: bird3}, 
        {name: owl}, 
        {name: owl1},
        {name: owl2}, 
        {name: penguin}, 
        {name: penguin1},
        {name: penguin3}, 
        {name: sloth}, 
        {name: sloth1}])

    useEffect(() => {
        const images = document.querySelectorAll(".image");
        images.forEach((image) => {
            image.addEventListener("click", shuffledImages)
        })
        }, [images])

    const shuffledImages = () => {
        setImages(shuffleImages(images))
    }
    
    const shuffleImages = (array) => {
        
        let counter = array.length;

        // While there are elements in the array
        while (counter > 0) {
            // Pick a random index
            let index = Math.floor(Math.random() * counter);
    
            // Decrease counter by 1
            counter--;
    
            // And swap the last element with it
            let temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }
    
        return array;
    }


    
        
  return <div className="grid-container" >
            {images.map((image, index)=>
        <div 
        key={index} 
        className="image-container">
            <img 
            src={image.name}
            className="image"
            id={image.name}
            onClick={(e) => checkImagesArray(e.target.id)}
            />
        </div>
        )}
        </div>;
};

export default Images;
