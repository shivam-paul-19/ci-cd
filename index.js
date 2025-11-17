import express from "express";
import { sum, subtract, multiply, divide } from "./calc.js";

const app = express();

app.listen("8080", (req, res) => {
    console.log("listening");
});

// a sample route to test the workflow
app.get("/test", (req, res) => {
    res.send("The error deployed");
});

app.get("/sum/:a/:b", (req, res) => {
    let {a, b} = req.params;
    res.send(`Here it is: ${sum(a, b)}`);
});

app.get("/subt/:a/:b", (req, res) => {
    let {a, b} = req.params;
    res.send(`Here it is: ${subtract(a, b)}`);
});

app.get("/mult/:a/:b", (req, res) => {
    let {a, b} = req.params;
    res.send(`Here it is: ${multiply(a, b)}`);
});

app.get("/div/:a/:b", (req, res) => {
    let {a, b} = req.params;
    res.send(`Here it is: ${divide(a, b)}`);
});