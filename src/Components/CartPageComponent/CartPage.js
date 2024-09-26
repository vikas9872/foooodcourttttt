import './CartPage.css'
const CartPage = () => {
    return (
        <>
            <div className="cartBox">
                <div className="cartheadingPart">
                    <h1>Item Added to the Cart</h1>
                </div>
                <div className="addedItemPart">
                    <table>
                        <thead>
                            <tr>
                                <th>Item No</th>
                                <th>Item Name</th>
                                <th>Cost</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default CartPage;