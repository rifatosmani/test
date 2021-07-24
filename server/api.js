const express = require("express");
const bodyParser = require('body-parser');
const pool = require("./db");
const app = express();




app.use(express.json())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/getAreas", async (req, res) => {
    try {
        const areas = await pool.query("select * from area");
        res.json(areas.rows);
    } catch (error) {
        console.log(error.message);
    }
})

app.get("/getAreaById/:id", async (req, res) => {
    try {
        const area = await pool.query("select a.*,p.person_id, p.name as manager_name, p.surname as manager_surname from area a join person p on a.manager = p.person_id where a.area_id = " + req.params.id);
        const people = await pool.query("select p.person_id,p.name,p.surname,p.position from person p where p.area_id = " + req.params.id);
        const products  = await pool.query("select p.product_id,p.name,p.description from product p where p.area_id = " + req.params.id);

        const result={
            "area":area.rows,
            "people":people.rows,
            "products":products.rows
        }
        res.json(result);
        res.end();
    } catch (error) {
        console.log(error.message);
    }
})

app.get("/getPeople", async (req, res) => {
    try {
        const users = await pool.query("select * from person");
        res.json(users.rows);
        res.end();

    } catch (error) {
        console.log(error.message);
    }
})

app.get("/getPersonById/:id", async (req, res) => {
    try {
        const user = await pool.query("select p.*,a.area_id,a.name as area_name from person p join area a on(p.area_id = a.area_id) where person_id = " + req.params.id);
        const myManagedProducts = await pool.query("select p.name,p.product_id from product p join person pe on p.manager = pe.person_id where pe.person_id = " + req.params.id);
        const myProducts = await pool.query("select p.name,p.product_id from product p join works_for_product wfp on p.product_id = wfp.product_id where wfp.person_id = " + req.params.id);

        const data = {
            "person":user.rows,
            "myManagedProducts":myManagedProducts.rows,
            "myProducts":myProducts.rows
        }
        res.json(data);
        res.end();
    } catch (error) {
        console.log(error.message);
    }
})

app.get("/getProductsByPersonId/:id", async (req, res) => {
    try {
        console.log("by id");
        const products = await pool.query("select p.name,p.product_id from product p join works_for_product wfp on p.product_id = wfp.product_id where wfp.person_id = " + req.params.id);
        res.json(products.rows);
        res.end();
    } catch (error) {
        console.log(error.message);
    }
})

app.get("/getTeamByProductId/:id", async (req, res) => {
    try {
        const people = await pool.query("select p.person_id,p.name,p.surname,p.position from person p join works_for_product wfp on p.person_id = wfp.person_id where wfp.product_id = " + req.params.id);
        res.json(people.rows);
        res.end();
    } catch (error) {
        console.log(error.message);
    }
})

app.get("/getProducts", async (req, res) => {
    try {
        const users = await pool.query("select p.*, a.name as area_name from product p join area a on p.area_id =a.area_id");
        res.json(users.rows);
        res.end();
    } catch (error) {
        console.log(error.message);
    }
})

app.get("/getProductById/:id", async (req, res) => {
    try {
        const product = await pool.query("select p.*,a.area_id,a.name as area_name, pe.person_id, pe.name as manager_name, pe.surname as manager_surname from product p join area a on p.area_id =a.area_id join person pe on pe.person_id = p.manager where p.product_id = " + req.params.id);
        const team = await pool.query("select p.person_id,p.name,p.surname from person p join works_for_product wfp on p.person_id = wfp.person_id where wfp.product_id = " + req.params.id);

        const data ={
            "product":product.rows,
            "team":team.rows
        }
        res.json(data);
        res.end();
    } catch (error) {
        console.log(error.message);
    }
})


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
export default app;