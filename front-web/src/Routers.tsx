import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Orders from "./Orders";


function Routers () {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/orders" element={<Orders />}></Route>
                <Route path="/" element={<Home />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routers;