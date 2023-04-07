import { Component } from "react";
import style from "./App.module.css"
import { ImageFinder } from "./ImageFinder/ImageFinder";

export class App extends Component {
  
  render(){ 
    return (
      <div
        className={style.App}
      >
        <ImageFinder></ImageFinder>
      </div>
    )
  };
};
