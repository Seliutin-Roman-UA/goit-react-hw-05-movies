import image from "../../img/film_.svg"
import css from "./Spiner.module.css"

export function Spiner() {
    
    return <div className={css.backDrop}>
        <div className={css.modal}>
            <img src={image} alt="" className={css.img}/>
        </div>
    </div>
}