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
                <section className='need-help'>
                    <div className='need-help-title'>
                        <p>Чем вы можете помочь?</p>
                        <h3>Каждый может быть полезен</h3>
                    </div>
                    <div className='need-help-body'>
                        <div className="card-img">
                            <img src="/img/need-help1.jpg" alt=""/>
                        </div>
                        <div className="card">
                            <img src="/icons/volounteer.png" alt=""/>
                            <h4>Волонтёры</h4>
                            <p>Мы рады объявить о запуске новой инициативы по привлечению волонтёров в различных регионах. Наша цель — объединить усилия активных и неравнодушных людей, которые готовы поддерживать проекты, способствующие развитию местных сообществ и улучшению качества жизни.</p>
                            <button>
                                <img src="/icons/add-icon.png" alt=""/>
                                Оставить заявку
                            </button>
                        </div>
                        <div className="card">
                            <img src="/icons/patner.png" alt=""/>
                            <h4>Партнёрство</h4>
                            <p>Мы рады объявить о возможности партнёрства с компаниями, стремящимися поддерживать социальные и благотворительные инициативы. Наша организация активно работает над реализацией проектов, которые помогают улучшать жизнь людей и развивать местные сообщества.</p>
                            <button>
                                <img src="/icons/add-icon.png" alt=""/>
                                Оставить заявку
                            </button>
                        </div>
                        <div className="card-img">
                            <img src="/img/need-help2.jpg" alt=""/>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}