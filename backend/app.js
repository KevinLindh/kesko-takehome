const sqlite3 = require("sqlite3").verbose();
const express = require('express');
const cors = require("cors")

const app = express();
const port = 7000;

app.use(cors())
let sql;

let data = [];

app.use(cors())

app.use((req, res, next)=>{
    res.send(data)
})

//Connect to DB
const db = new sqlite3.Database('./northwind.db', sqlite3.OPEN_READWRITE, (err)=>{
    if(err) return console.log(err.message);
})

// query the data

sql = `SELECT o.OrderID, c.ContactName, o.ShipAddress || ';-;' || o.ShipCity || ';-;' || o.ShipRegion || ';-;' || o.ShipPostalCode || ';-;' || o.ShipCountry AS ShippingAddress, GROUP_CONCAT(p.ProductName) AS ProductNames, o.ShippedDate
FROM Orders o
JOIN Customers c ON o.CustomerID = c.CustomerID
JOIN [Order Details] od ON o.OrderID = od.OrderID
JOIN Products p ON od.ProductID = p.ProductID
GROUP BY o.OrderID
ORDER BY o.OrderID;`;

db.all(sql,[],(err, rows)=>{
        if(err){
            console.log(err.message);
        } else {
        rows.forEach(row=>{
            data.push(row);
        })
    }
    })


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });