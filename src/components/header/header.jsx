import './style.css'
import {useState} from "react";

export const Header = () => {
    const count = useState(0)
    return (
        <div className="header">
            <div className="container">
                <div className="header-inner">
                    <div className="logo">
                        <img src="/img/Logo.png" alt="logo"/>
                    </div>
                    <div className="nav">
                        <ul>
                            <li>О проекте <img src="/icons/chevron-down.png" alt="more"/></li>
                            <li>Анкета нуждающегося</li>
                            <li>Магазин</li>
                            <li>
                                <img src="/icons/shopping-cart.png" alt="more"/>
                                Корзина
                                <span>{count}</span>
                            </li>
                            <li>Қаз / Рус</li>
                        </ul>
                        <div className="header-action-button">
                            <button>
                                <img src="/icons/heart.png" alt="heart"/>
                                Пожертвовать
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}