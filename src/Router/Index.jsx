import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import Pricing from "@/pages/Pricing";
import Product from "@/pages/Product";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product" element={<Product />} />
    </Route>
  )
);

export default router;