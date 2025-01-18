import './style.css'

export const MainPage = () => {
    return (
        <div className='main-page'>
            <section className='main-section'>
                <div className="container">
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
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
                </div>
            </section>
            <section className='need-help'>
                <div className="container">
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
                            <p>Мы рады объявить о запуске новой инициативы по привлечению волонтёров в различных
                                регионах.
                                Наша цель — объединить усилия активных и неравнодушных людей, которые готовы
                                поддерживать
                                проекты, способствующие развитию местных сообществ и улучшению качества жизни.</p>
                            <button>
                                <img src="/icons/add-icon.png" alt=""/>
                                Оставить заявку
                            </button>
                        </div>
                        <div className="card">
                            <img src="/icons/patner.png" alt=""/>
                            <h4>Партнёрство</h4>
                            <p>Мы рады объявить о возможности партнёрства с компаниями, стремящимися поддерживать
                                социальные
                                и благотворительные инициативы. Наша организация активно работает над реализацией
                                проектов,
                                которые помогают улучшать жизнь людей и развивать местные сообщества.</p>
                            <button>
                                <img src="/icons/add-icon.png" alt=""/>
                                Оставить заявку
                            </button>
                        </div>
                        <div className="card-img">
                            <img src="/img/need-help2.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </section>
            <section className='anketa'>
                <div className="container">
                    <div className='anketa-main'>
                        <img src="/img/anketa-img.jpg" alt=""/>
                        <div className='anketa-main-body'>
                            <h2>Анкета нуждающегося</h2>
                            <p>Если вы сталкиваетесь с трудными жизненными ситуациями и нуждаетесь в поддержке, мы
                                готовы
                                помочь. Для того чтобы рассмотреть вашу заявку на помощь, пожалуйста, заполните нашу
                                анкету.</p>
                            <button>Хочу помогать</button>
                            <span>* Нажимая на кнопку, вы принимаете условия публичной оферты и даете согласие на обработку персональных данных</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className='about-us'>
                <div className="container">
                    <div className='about-us-title'>
                        <p>Что мы делаем?</p>
                        <h3>Оказываем помощь нуждающимся по направлениям</h3>
                    </div>
                    <div className='about-us-body'>
                        <div className="about-us-card">
                            <img src="/img/pavodki.jpg" alt=""/>
                            <h4>Паводки</h4>
                            <p>Присоединяйтесь к нам в этой благородной миссии спасения жизней и восстановления пострадавших регионов</p>
                            <button>
                                <img src="/icons/add-icon.png" alt=""/>
                                Пожертвовать
                            </button>
                        </div>
                        <div className="about-us-card">
                            <img src="/img/palestine.jpg" alt=""/>
                            <h4>Палестина</h4>
                            <p>Давайте вместе создадим положительное изменение в жизни людей, испытывающих тяжелые испытания!</p>
                            <button>
                                <img src="/icons/add-icon.png" alt=""/>
                                Пожертвовать
                            </button>
                        </div>
                        <div className="about-us-card">
                            <img src="/img/africa.jpg" alt=""/>
                            <h4>Африка</h4>
                            <p>Присоединяйтесь к нашему благородному стремлению создать устойчивое и процветающее будущее для жителей Африки</p>
                            <button>
                                <img src="/icons/add-icon.png" alt=""/>
                                Пожертвовать
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='last-news'>
                <div className="container">
                    <div className='last-news-title'>
                        <p>Последние новости о помощи</p>
                        <h3>Дальнейшая судьба героев проекта</h3>
                    </div>
                    <div className='last-news-body'>
                        <div className='last-news-body-info'>
                            <small>1 / 10</small>
                            <h3>История семьи, которая нашла “надежду” на новую жизнь</h3>
                            <p>
                                Сегодня семья чувствует поддержку и понимание со стороны общества. Они помогают другим семьям, столкнувшимся с похожими проблемами, и верят в то, что благодаря фонду “Человек в маске” можно добиться реальных перемен в жизни тех, кто в этом нуждается.
                                <br/>
                                <br/>
                                История семьи стала источником вдохновения и надежды для многих, кто сталкивается с трудностями, и подтверждением того, что даже маленькая помощь может изменить жизнь к лучшему.
                            </p>
                            <div className='last-news-body-info-arrows'>
                                <img src="/icons/left.png" alt=""/>
                                <img src="/icons/right.png" alt=""/>
                            </div>
                        </div>
                        <div className='last-news-body-img'>
                            <img src="/img/news-img.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </section>
            <section className='donation'>
                <div className="container">
                    <div className='donation-body'>
                        <div className='donation-body-info'>
                            <h4>Оформите ежемесячную подписку и станьте частью фонда “Человека в маске”</h4>
                            <p>Даже небольшие ежемесячные пожертвования могут оказать значительное влияние на жизни нуждающихся семей, улучшая их повседневность и способствуя сохранению их благополучия.</p>
                            <span>* Нажимая на кнопку, вы принимаете условия публичной оферты и даете согласие на обработку персональных данных</span>
                        </div>
                        <div className="donation-body-action">
                            <h4>Сумма пожертвования:</h4>
                            <div className="donation-body-action-sums">
                                <label className='donation-body-action-sum'>
                                    <input type="radio" name="option" value="1"/>
                                    <span className="radio-mark"></span>
                                    1000 тенге
                                </label>
                                <label className='donation-body-action-sum'>
                                    <input type="radio" name="option" value="2"/>
                                    <span className="radio-mark"></span>
                                    20 000 тенге
                                </label>
                                <label className='donation-body-action-sum'>
                                    <input type="radio" name="option" value="3"/>
                                    <span className="radio-mark"></span>
                                    5 000 тенге
                                </label>
                                <label className='donation-body-action-sum'>
                                    <input type="radio" name="option" value="4"/>
                                    <span className="radio-mark"></span>
                                    50 000 тенге
                                </label>
                                <label className='donation-body-action-sum'>
                                    <input type="radio" name="option" value="5"/>
                                    <span className="radio-mark"></span>
                                    10 000 тенге
                                </label>
                                <label className='donation-body-action-sum'>
                                    <input type="radio" name="option" value="6"/>
                                    <span className="radio-mark"></span>
                                    Другая сумма
                                </label>
                            </div>
                            <button>Хочу помогать</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}