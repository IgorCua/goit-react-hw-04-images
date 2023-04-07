import style from "./ImageGallery.module.css";

export const ImageGallery = (props) => {
    const {children} = props;
    return <ul className={style.imageGallery}>
      {children}
    </ul>
}