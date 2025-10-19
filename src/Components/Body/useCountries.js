import { useState, useMemo, useEffect } from "react";
//import data from "../../data.json";

const ITEMS_PER_PAGE = 8;

export function useCountries() {
    const [data, setData] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [dropdownOption, setDropdownOption] = useState("Filter by Region");
    const [currentPage, setCurrentPage] = useState(1);
    const [animationDirection, setAnimationDirection] = useState("");

    useEffect(() => {
        fetch(
            "https://restcountries.com/v3.1/all?fields=name,capital,population,flags,region,subregion,tld,currencies,languages,borders"
        )
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => console.error(err));
    }, []);

    const filteredData = useMemo(() => {
        setCurrentPage(1); // Reset to page 1 whenever the filters change
        let filtered = data;

        if (inputValue) {
            // When searching, reset the region filter
            if (dropdownOption !== "Filter by Region") {
                setDropdownOption("Filter by Region");
            }
            filtered = data.filter((country) =>
                country.name.common
                    .toLowerCase()
                    .includes(inputValue.toLowerCase())
            );
        } else if (dropdownOption !== "Filter by Region") {
            filtered = data.filter(
                (country) => country.region === dropdownOption
            );
        }

        return filtered;
    }, [data, inputValue, dropdownOption]);

    const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedData = filteredData.slice(startIndex, endIndex);

    return {
        data,
        paginatedData,
        totalPages,
        currentPage,
        setCurrentPage,
        inputValue,
        setInputValue,
        dropdownOption,
        setDropdownOption,
        animationDirection,
        setAnimationDirection,
    };
}
