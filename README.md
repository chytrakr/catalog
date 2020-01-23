## Catalog

#### Steps to run the project

1. Clone the project from github
2. Navigate to inside the project folder on terminal
3. Do an npm install for installing all the project dependencies
4. Then npm start OR node app.js OR to get the app running on localhost

// make sure you have installed Node.JS in your system before doing the above steps

******************************************************************

#### API’s: 

Category creation api: <base route>/api/v1/categories
Method: POST
Required fields to create category: 
category* [name of category], 
catId*, 
image        
[* marked fields are mandatory]

******************************************************************

Categories list api: <base route>/api/v1/categories
Method: GET
Search option [key: search]: category

******************************************************************

Product creation api: <base route>/api/v1/products
Method: POST
Required fields to create products: 
productName*, 
category*, 
catId*, 
image, 
mrp*, 
sellingPrice*, 
quantity*        
// [* marked fields are mandatory]

******************************************************************

Products list api: <base route>/api/v1/products
Method: GET
Search option [key: search]: productName and category
