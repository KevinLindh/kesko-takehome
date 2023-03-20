import React, { useEffect, useState } from 'react'

function Orders(props:any){
    const [filteredList, setFilteredList] = useState([])
    const [productFilter, setproductFilter] = useState('');
    const [shipped, setShipped] = useState(false);
  
    // Shipped toggle handler
    const toggleShipped = (e:any) => {
      e.preventDefault()
      // When the handler is invoked
      // inverse the boolean state of shipped
      setShipped(!shipped);
    };

    useEffect(() => {
        if (shipped) {
          setFilteredList(props.data.filter((item:any) => item.ShippedDate));
        } else {
          setFilteredList(props.data);
        }
      }, [props.data, shipped]);

    return (
        <div>
        <form>
          <label htmlFor="productFilter">Filter orders by product name</label>
          <input value={productFilter} onChange={(e) => setproductFilter(e.target.value)}type="text" placeholder="Filter by product" id="productFilter" name="productFilter" />
          <label><input type="checkbox" className='checkBox' key={Math.random()} checked={shipped} onChange={toggleShipped} /> Show only shipped orders</label>
        </form>
        <p>{shipped.toString()}</p>
        <p>{filteredList.length}</p>
        {filteredList.map( (element:any) => {
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