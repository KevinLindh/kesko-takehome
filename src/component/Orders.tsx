import React, { useEffect, useState } from 'react'
import searchIcon from "../pngegg.png";
import { dateChecker } from '../utils/utils';

function Orders(props:any){
    const [filteredList, setFilteredList] = useState([])
    const [productFilter, setproductFilter] = useState('');
    const [selectedProduct, setSelectedFilter] = useState("");
    const [shipped, setShipped] = useState(false);
  
    // Shipped toggle handler
    const toggleShipped = (e:any) => {
      e.preventDefault()
      // When the handler is invoked
      // inverse the boolean state of shipped
      setShipped((shipped:boolean)=> !shipped);
    };

    useEffect(() => {
        let filtered = props.data;
        if (shipped) {
          filtered = filtered.filter((item:any) => dateChecker(item.ShippedDate));
        }
        
        if (productFilter && selectedProduct.length === 0) {
            filtered = filtered.filter((item:any) =>
            item.ProductNames.toLowerCase().includes(productFilter.toLowerCase()),
            setSelectedFilter("")
          );
        }
        if (selectedProduct) {
            filtered = filtered.filter((item:any) =>
            item.ProductNames.toLowerCase().split(",").includes(productFilter.toLowerCase())
          );
        }
        setFilteredList(filtered);
      }, [props.data, shipped, selectedProduct, productFilter]);

      const handleProductNameFilterChange = (e:any) => {
        setproductFilter(e.target.value);
        setSelectedFilter("");
      };

      
      const handleProductFilterKeyPress = (e:any) => {
        if (e.key === 'Enter') {
          e.preventDefault(); // Prevent form submission
        }
      };

      const filterProduct = (e:any) => {
          e.preventDefault();
          setSelectedFilter(productFilter);
      };

      let moreThanFour = (inputArray: Array <string>) => {
        return (
          <>
            {inputArray.slice(0, 3).map((prods:string, index:number) => 
              <p key={`moreThanFour-${index}`} className="lowerDetails">{prods}</p>
            )}
            <p className="lowerDetails" key={`moreThanFour-more`}>+ {inputArray.length - 3} more...</p>
          </>
        );
      };
      
      let lessThanFive = (inputArray: Array <string>) => {
        return (
          inputArray.map((prods:string, index:number) => 
            <p key={`lessThanFive-${index}`} className="lowerDetails">{prods}</p>
          )
        );
      };

    return (
        <div>
        <section className='topInput'>
            <form>
            <label htmlFor="productFilter" id='productFilter'>Filter orders by product name (press magnifying glass for only exact product)</label>
            <div id='inputWithImage'>
                <input className='inputFinder' value={productFilter} onKeyDown={handleProductFilterKeyPress} onChange={handleProductNameFilterChange}type="text" placeholder="Filter by product" id="productFilter" name="productFilter" />
                <img id='searchImg' src={searchIcon} alt="Search icon" onClick={filterProduct}/>
            </div>
            <label htmlFor="toggleShipped"><input id="toggleShipped" type="checkbox" className='checkBox' key={Math.random()} checked={shipped} onChange={toggleShipped} /> Show only shipped orders</label>
            </form>
        </section>
        <span className='resultsFound'>Results: {filteredList.length}</span>
        {filteredList.map( (element:any, index:number) => {
            return <div key={element.OrderID} className="entireOrder">
                    <span className='numbering'>#{index+1}</span>
                    <div key={`${element.OrderID}Shipping`} className="orderDetails">
                        <p className="upperDetails">Shipping address</p>
                        { element.ShippingAddress ? 
                            element.ShippingAddress.split(";-;").map((shipping:string, index:number) =>
                            <p className="lowerDetails" key={`${element.OrderID}ShippingAddress${index}`}>{shipping}</p>
                            ) : <p className="lowerDetails">No Address</p>
                        }
                        <p className="lowerDetails">{element.ShipAddress}</p>
                    </div>
                    <div className="orderDetails" key={`${element.OrderID}Customer`} >
                        <p className="upperDetails">Customer name</p>
                        <p className="lowerDetails">{element.ContactName}</p>
                    </div>
                    <div className="orderDetails" key={`${element.OrderID}Products`} >
                      <p className="upperDetails">Products</p>
                      { element.ProductNames.split(",").length <= 4 ?
                        <>{lessThanFive(element.ProductNames.split(","))} </>
                        :
                        <>{moreThanFour(element.ProductNames.split(","))}</>
                      }
                    </div>
                    <a href={`/order/${element.OrderID}`} className="viewDetailsBtn">View Details</a>
                </div>
        })
        }
    </div>
    )
  }

export default Orders