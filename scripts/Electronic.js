import  navbar  from "../components/navbar.js";
import fetchData from "./fetch.js";
import append from "./append.js";

document.getElementById("navbar").innerHTML = navbar();

let url = ` https://fakestoreapi.com/products/category/electronics`;

let data = await fetchData(url);
let container = document.getElementById("container");
append(data,container);
