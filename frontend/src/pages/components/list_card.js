const ListCard = ( {list_item} ) => {

    return (
            <div class="listCard">
                <div class="">
                    <div className="list-left">
                        <img src={list_item.image} alt="food" className="mt-3 listImage"></img>
                    </div>
                    <div className="list-right">
                        <div className="list-name">
                        <p>{list_item.name} &#40;{list_item.grocer}&#41;</p>
                        </div>
                        <div className="list-priceinfo">
                            <p className="listInfo">Quantity: {list_item.quantity} Price: ${list_item.price}ea. Total: ${list_item.price * list_item.quantity}</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ListCard