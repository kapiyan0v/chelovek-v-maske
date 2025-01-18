import './style.css'

export const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="footer-main">
                    <img src="/img/Logo.png" alt=""/>
                    <div className="footer-nav">
                        <ul>
                            <li>Магазин</li>
                            <li>Финансирование</li>
                            <li>+7 (702) 262 08 46</li>
                            <li>Миссия</li>
                            <li>Благотворительность</li>
                            <li>
                                chelovekvmaske@mail.ru <br/>
                                <small>
                                    Для всех вопросов
                                </small>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='footer-end'>
                    <p>2024. Все права защищены</p>
                    <p>Kazakhstan / Almaty <img src="/icons/compass.png" alt=""/></p>
                </div>
            </div>
        </div>
    )
}