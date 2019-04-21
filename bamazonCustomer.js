var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table2")


// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "Mookie18!",
    database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    console.log("connected as id " + connection.threadId);
    if (err) throw err;
    // run the start function after the connection is made to prompt the user

    connection.query("SELECT * FROM products", function (err, res) {
        if (err) return err;
        var table = new Table({
            head: ["Item ID","Product Name","Department Name", "Price","Stock Quantity"]
        });
        var row = [];
        for (var i = 0; i < res.length; i++) {
            row.push(res[i].item_id);
            row.push(res[i].product_name);
            row.push(res[i].department_name);
            row.push(res[i].price);
            row.push(res[i].stock_quantity);
            table.push(row);
            row = [];
        }
        console.log(table.toString())
        // Log all results of the SELECT statement
        // console.log(res);
        // console.log("--------------------------------------------------------------------------------");
        start();
    });

    //connection.end();
});

function start() {
    inquirer.prompt([
        {
            name: "item_id",
            type: "input",
            message: "Please enter the Item ID which you would like to purchase.",
            filter: Number
        },
        {
            name: "quantity",
            type: "input",
            message: "How many units of this item would you like?",
            filter: Number
        }
    ]).then(function (input) {
        console.log("--------------------------------------------------------------------------------");
        console.log('Customer has selected: \n    Item_id = ' + input.item_id + '\n    Quantity = ' + input.quantity);
        console.log("--------------------------------------------------------------------------------");

        var item = input.item_id;
        var quantity = parseInt(input.quantity);
        var query = "SELECT * FROM products where ? "
        connection.query(query,{item_id: item}, function(err, res){
                if (res.length > 0) {
                    // console.log("The quantity available for this item is " + res[0].stock_quantity);
                    if (parseInt(res[0].stock_quantity) > quantity){
                        var new_quantity = parseInt(res[0].stock_quantity) - quantity
                        var total_cost = parseFloat(res[0].price) * quantity
                        query = "UPDATE products SET ? WHERE ?"
                        connection.query(query, [{stock_quantity: new_quantity, },{item_id: item}], function(err, res){
                                if (err) return err;

                                console.log("Order's processing..");
                                console.log("Total Cost of Items Purchased: $" + total_cost);
                                console.log("---------------------------------------------------------------------------------------------");
                                console.log("Thank you for shopping at Bamazon! And remember, DON'T LET YOUR DREAMS BE DREAMS!");
                                console.log("---------------------------------------------------------------------------------------------");
                        })
                    }
                    else {
                        console.log("Unfortunately we do not have enough of this item. Please select a smaller quantity or choose a different item.");
                    }
                }
                //}
        });
        // connection.end();
    })
}