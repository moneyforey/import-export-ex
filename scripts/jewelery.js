import  navbar  from "../components/navbar.js";
import fetchData from "./fetch.js";
import append from "./append.js";

document.getElementById("navbar").innerHTML = navbar();

//url :- https://fakestoreapi.com/products/category/jewelery

let url = `https://fakestoreapi.com/products/category/jewelery`;

let data = await fetchData(url);
let container = document.getElementById("container");
append(data,container);
