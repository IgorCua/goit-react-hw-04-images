import style from "./Button.module.css";

export const Button = ({loadMore, reqImgArrLength, total}) => {
    return <>
        {reqImgArrLength !== total && <button className={style.button} onClick={loadMore}>Load more</button>}    
    </>
}