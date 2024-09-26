import "./DishesPage.css"
const DishesPage = () => {
    return (
        <>
            <div className="splDishesContentBox">
                <div className="dishesHeadLine" data-aos="fade-right">
                    <h1 className="firstPart">Special <span>Dishes</span></h1>
                </div>
                <div className="dishesMainContent">
                    <div className="dishesBox" data-aos="flip-right">
                        <div className="imgPart">
                            <img src="./Images/chickpeaCurry.png" alt="imgOne" className="img" />
                        </div>
                        <div className="dishcontentPart">
                            <div className="dishNamePart">
                                <h2>Chick Pea Curry</h2>
                            </div>
                            <div className="ratings">
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star-half-o checked"></span>
                            </div>
                            <div className="amtOrder">
                                <div className="amt">
                                    <p>Cost: $99</p>
                                </div>
                                <div className="order">
                                    <button className="orderbtns">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dishesBox" data-aos="flip-right">
                        <div className="imgPart">
                            <img src="./Images/fruitSalad.png" alt="imgOne" className="img" />
                        </div>
                        <div className="dishcontentPart">
                            <div className="dishNamePart">
                                <h2>Fruit Salad</h2>
                            </div>
                            <div className="ratings">
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star-half-o checked"></span>
                            </div>
                            <div className="amtOrder">
                                <div className="amt">
                                    <p>Cost: $89</p>
                                </div>
                                <div className="order">
                                    <button className="orderbtns">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dishesBox" data-aos="flip-right">
                        <div className="imgPart">
                            <img src="./Images/vegSalad.png" alt="imgOne" className="img" />
                        </div>
                        <div className="dishcontentPart">
                            <div className="dishNamePart">
                                <h2>Vegetable Salad</h2>
                            </div>
                            <div className="ratings">
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star-half-o checked"></span>
                            </div>
                            <div className="amtOrder">
                                <div className="amt">
                                    <p>Cost: $79</p>
                                </div>
                                <div className="order">
                                    <button className="orderbtns">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dishesBox" data-aos="flip-left">
                        <div className="imgPart">
                            <img src="./Images/vegFriedRice.png" alt="imgOne" className="img" />
                        </div>
                        <div className="dishcontentPart">
                            <div className="dishNamePart">
                                <h2>Veg Fried Rice</h2>
                            </div>
                            <div className="ratings">
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star-half-o checked"></span>
                            </div>
                            <div className="amtOrder">
                                <div className="amt">
                                    <p>Cost: $69</p>
                                </div>
                                <div className="order">
                                    <button className="orderbtns">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dishesBox" data-aos="flip-left">
                        <div className="imgPart">
                            <img src="./Images/dosa.png" alt="imgOne" className="img" />
                        </div>
                        <div className="dishcontentPart">
                            <div className="dishNamePart">
                                <h2>Dosa</h2>
                            </div>
                            <div className="ratings">
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star-half-o checked"></span>
                            </div>
                            <div className="amtOrder">
                                <div className="amt">
                                    <p>Cost: $59</p>
                                </div>
                                <div className="order">
                                    <button className="orderbtns">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dishesBox" data-aos="flip-left">
                        <div className="imgPart">
                            <img src="./Images/vegRolls.png" alt="imgOne" className="img" />
                        </div>
                        <div className="dishcontentPart">
                            <div className="dishNamePart">
                                <h2>Veg Sausage Rolls</h2>
                            </div>
                            <div className="ratings">
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star-half-o checked"></span>
                            </div>
                            <div className="amtOrder">
                                <div className="amt">
                                    <p>Cost: $49</p>
                                </div>
                                <div className="order">
                                    <button className="orderbtns">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DishesPage;