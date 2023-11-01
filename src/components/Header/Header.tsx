import style from "./Header.module.css"
import Ignitelogo from "../../assets/Ignite-logo.svg"

export function Header() {
    return(
        <div className="">
            <header className={style.header}>
                <img src={Ignitelogo} alt="Logotipo do Ignite" />
                <h1>Ignite Feed</h1>
            </header>
        </div>
    )
}