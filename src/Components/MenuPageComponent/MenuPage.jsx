import './MenuPage.css'
const MenuPage = () => {
    return (
        <>
            <div className="menuContentBox">
                <div className="headLine" data-aos="fade-right">
                    <h1>Me<span className='nuPart'>nu</span></h1>
                </div>
                <div className="menuMainContent">
                    <div className="mDishBox" data-aos="flip-right">
                        <div className="mimgPart">
                            <div className="mdishImg">
                                <img src="./Images/fruitSalad.png" alt="curryOne" className='mimg' />
                            </div>
                        </div>
                        <div className="mdishContentPart" >
                            <div className="mratings">
                                <span className="fa fa-star mchecked"></span>
                                <span className="fa fa-star mchecked"></span>
                                <span className="fa fa-star mchecked"></span>
                                <span className="fa fa-star mchecked"></span>
                                <span className="fa fa-star-half-o mchecked"></span>
                            </div>
                            <div className="mdishNamePart">
                                <h1>Fruit Salad</h1>
                            </div>
                            <div className="expln">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quas!</p>
                            </div>
                            <div className="mamtOrder">
                                <div className="mamt">
                                    <p>Cost: $99</p>
                                </div>
                                <div className="morder">
                                    <button className='morderbtns'>Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mDishBox" data-aos="flip-right">
                        <div className="mimgPart">
                            <div className="mdishImg">
                                <img src="./Images/vegSalad.png" alt="curryOne" className='mimg' />
                            </div>
                        </div>
                        <div className="mdishContentPart">
                            <div className="mratings">
                                <span className="fa fa-star mchecked"></span>
                                <span className="fa fa-star mchecked"></span>
                                <span className="fa fa-star mchecked"></span>
                                <span className="fa fa-star mchecked"></span>
                                <span className="fa fa-star-half-o mchecked"></span>
                            </div>
                            <div className="mdishNamePart">
                                <h1>Vegetable Salad</h1>
                            </div>
                            <div className="expln">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quas!</p>
                            </div>
                            <div className="mamtOrder">
                                <div className="mamt">
                                    <p>Cost: $99</p>
                                </div>
                                <div className="morder">
                                    <button className='morderbtns'>Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mDishBox" data-aos="flip-right">
                        <div className="mimgPart">
                            <div className="mdishImg">
                                <img src="./Images/chickpeaCurry.png" alt="curryOne" className='mimg' />
                            </div>
                        </div>
                        <div className="mdishContentPart">
                            <div className="mratings">
                                <span className="fa fa-star mchecked"></span>
                                <span className="fa fa-star mchecked"></span>
                                <span className="fa fa-star mchecked"></span>
                                <span className="fa fa-star mchecked"></span>
                                <span className="fa fa-star-half-o mchecked"></span>
                            </div>
                            <div className="mdishNamePart">
                                <h1>Chick Pea Curry</h1>
                            </div>
                            <div className="expln">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quas!</p>
                            </div>
                            <div className="mamtOrder">
                                <div className="mamt">
                                    <p>Cost: $99</p>
                                </div>
                                <div className="morder">
                                    <button className='morderbtns'>Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mDishBox" data-aos="flip-left">
                        <div className="mimgPart">
                            <div className="mdishImg">
                                <img src="./Images/dosa.png" alt="curryOne" className='mimg' />
                            </div>
                        </div>
                        <div className="mdishContentPart">
                            <div className="mratings">
                                <span className="fa fa-star mchecked"></span>
                                <span className="fa fa-star mchecked"></span>
                                <span className="fa fa-star mchecked"></span>
                                <span className="fa fa-star mchecked"></span>
                                <span className="fa fa-star-half-o mchecked"></span>
                            </div>
                            <div className="mdishNamePart">
                                <h1>Dosa</h1>
                            </div>
                            <div className="expln">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quas!</p>
                            </div>
                            <div className="mamtOrder">
                                <div className="mamt">
                                    <p>Cost: $99</p>
                                </div>
                                <div className="morder">
                                    <button className='morderbtns'>Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mDishBox" data-aos="flip-left">
                        <div className="mimgPart">
                            <div className="mdishImg">
                                <img src="./Images/vegFriedRice.png" alt="curryOne" className='mimg' />
                            </div>
                        </div>
                        <div className="mdishContentPart">
                            <div className="mratings">
                                <span className="fa fa-star mchecked"></span>
                                <span className="fa fa-star mchecked"></span>
                                <span className="fa fa-star mchecked"></span>
                                <span className="fa fa-star mchecked"></span>
                                <span className="fa fa-star-half-o mchecked"></span>
                            </div>
                            <div className="mdishNamePart">
                                <h1>Veg Fried Rice</h1>
                            </div>
                            <div className="expln">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quas!</p>
                            </div>
                            <div className="mamtOrder">
                                <div className="mamt">
                                    <p>Cost: $99</p>
                                </div>
                                <div className="morder">
                                    <button className='morderbtns'>Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mDishBox" data-aos="flip-left">
                        <div className="mimgPart">
                            <div className="mdishImg">
                                <img src="./Images/vegRolls.png" alt="curryOne" className='mimg' />
                            </div>
                        </div>
                        <div className="mdishContentPart">
                            <div className="mratings">
                                <span className="fa fa-star mchecked"></span>
                                <span className="fa fa-star mchecked"></span>
                                <span className="fa fa-star mchecked"></span>
                                <span className="fa fa-star mchecked"></span>
                                <span className="fa fa-star-half-o mchecked"></span>
                            </div>
                            <div className="mdishNamePart">
                                <h1>Veg Sausage Rolls</h1>
                            </div>
                            <div className="expln">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quas!</p>
                            </div>
                            <div className="mamtOrder">
                                <div className="mamt">
                                    <p>Cost: $99</p>
                                </div>
                                <div className="morder">
                                    <button className='morderbtns'>Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MenuPage;