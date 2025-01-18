import './style.css'

export const MainPage = () => {
    return (
        <div className='main-page'>
            <div className="container">
                <section className='main-section'>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <div className='main-section-text'>
                            <div className='main-section-text-main'>
                                <h2>Участвуйте в <br/>
                                    благом вместе <br/>
                                    с нами
                                </h2>
                                <p>Благотворительный фонд “Человек в маске” меняет <br/>
                                    судьбы людей и даёт шанс на счастье и здоровое <br/>
                                    будущее
                                </p>
                            </div>
                            <div className='main-section-text-action'>
                                <p>Подпишитесь на регулярные пожертвования</p>
                                <div className='main-section-text-action-body'>
                                    <input type="text"/>
                                    <select name="" id="">
                                        <option>₸
                                        </option>
                                        <option>$
                                        </option>
                                    </select>
                                    <button>Хочу помогать</button>
                                </div>
                            </div>
                        </div>
                        <div className='main-section-img'>
                            <img src="/img/kazakhstan.png" alt=""/>
                        </div>
                    </div>
                    <div className='main-section-info'>
                        <ul>
                            <li>
                                <h3>150+</h3>
                                <p><img src="/icons/user-check.png" alt=""/> семей</p>
                            </li>
                            <li>
                                <h3>3+</h3>
                                <p><img src="/icons/compass.png" alt=""/> стран</p>
                            </li>
                            <li>
                                <h3>55</h3>
                                <p><img src="/icons/home.png" alt=""/> квартир</p>
                            </li>
                            <li>
                                <h3>2021</h3>
                                <p><img src="/icons/star.png" alt=""/> года существуем</p>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    )
}