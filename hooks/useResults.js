import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const searchApi = async (searchTerms) => {        
        const response = await yelp.get("/search", {
            params: {
                limit: 50,
                location: "İstanbul",
                term: searchTerms
            }
        });
        setResults(response.data.businesses);
    };
    useEffect(() => {
        searchApi("Toast");
    }, []);

    return [searchApi, results];
}