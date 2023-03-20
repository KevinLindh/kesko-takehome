import React from "react"

function Orders(props:any){
    return (
        <div>
        {props.data.map( (element:any) => {
            return <div key={element.OrderID} className="entireOrder">
                    <div className="orderDetails">
                        <p className="upperDetails">Shipping address</p>
                        { element.ShippingAddress ? 
                            element.ShippingAddress.split("; ").map((shipping:string) =>
                            <p className="lowerDetails">{shipping}</p>
                            ) : <p className="lowerDetails">No Address</p>
                        }
                        <p className="lowerDetails">{element.ShipAddress}</p>
                    </div>
                    <div className="orderDetails">
                        <p className="upperDetails">Customer name</p>
                        <p className="lowerDetails">{element.ContactName}</p>
                    </div>
                    <div className="orderDetails">
                        <p className="upperDetails">Products</p>
                        { element.ProductNames.split(",").length <= 5 ?
                            element.ProductNames.split(",").map((prods:string) => 
                            <p className="lowerDetails">{prods}</p>
                            )
                        :
                        <div>
                            {element.ProductNames.split(",").slice(0, 3).map((prods:string) => 
                                <p className="lowerDetails">{prods}</p>
                                )
                            }
                            <p className="lowerDetails">+{element.ProductNames.split(",").length - 3} more...</p>
                        </div>
                        }
                    </div>
                    <p>{element.ShippedDate}</p>
                    <a href='' className="viewDetailsBtn">View Details</a>
                </div>
        })
        }
    </div>
    )
  }

export default Orders