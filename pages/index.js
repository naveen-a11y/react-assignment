import axios from "axios";
import { Header } from "../components/Header";
import Products from "../components/Products";

export default function Home({ data }) {
    return (
        <div className="bg-black text-white">
            <Header />
            <Products data={data} />
        </div>
    );
}

export async function getStaticProps() {
    const res = await axios.get("https://api.tjori.com/api/v7filters/na/women-all-products/?f_page=1&format=json");
    const data = await res.data.data.products;

    return {
        props: {
            data,
        },
    };
}
