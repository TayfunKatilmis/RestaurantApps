import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')
    const searchApi = async (searchTerms) => {
        try {
            const response = await yelp.get("/search", {
                params: {
                    limit: 50,
                    location: "İstanbul",
                    term: searchTerms
                }
            });
            setResults(response.data.businesses);
            setErrorMessage("");
        } catch (error) {
            setErrorMessage("Bağlantı hatası")
        }      
        
    };
    useEffect(() => {
        searchApi("Toast");
    }, []);

    return [searchApi, results, errorMessage];
}