// import * as ReactDOMServer from "react-dom/server";
import style from "./ImageGalleryItem.module.css";
import { Audio } from  'react-loader-spinner';

export const ImageGalleryItem = ({requestedImgArr}) => {
  // const svgStr = encodeURIComponent( 
  //   ReactDOMServer.renderToStaticMarkup(
  //     <Audio
  //       position = 'absolute'
  //       height = "80"
  //       width = "80"
  //       radius = "9"
  //       color = 'green'
  //       ariaLabel = 'three-dots-loading'     
  //       wrapperStyle
  //       wrapperClass
  //     />
  //   )
  // )
  // style={{backgroundImage: `"data:image/svg+xml,${svgStr}"`}
    return requestedImgArr.map(elem => {
      return <li key={elem.id} className={style.imageGalleryItem}>
        <Audio
          height = "80"
          width = "80"
          radius = "9"
          color = 'green'
          ariaLabel = 'three-dots-loading'     
          wrapperStyle = {{
            'position': 'absolute',
            'marginTop': '25%',
            'marginLeft': '38%',
          }}
          wrapperClass = {style.wrapper}
        >
        </Audio>

        <img className={style.imageGalleryItemImage} src={`${elem.webformatURL}`} alt={`${elem.tags}`}/>
      </li>
    })
}