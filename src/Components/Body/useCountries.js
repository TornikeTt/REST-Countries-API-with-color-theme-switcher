import { useState, useMemo } from "react";
import data from "../../data.json";

const ITEMS_PER_PAGE = 8;

export function useCountries() {
    const [inputValue, setInputValue] = useState("");
    const [dropdownOption, setDropdownOption] = useState("Filter by Region");
    const [currentPage, setCurrentPage] = useState(1);
    const [animationDirection, setAnimationDirection] = useState("");

    const filteredData = useMemo(() => {
        setCurrentPage(1); // Reset to page 1 whenever the filters change
        let filtered = data;

        if (inputValue) {
            // When searching, reset the region filter
            if (dropdownOption !== "Filter by Region") {
                setDropdownOption("Filter by Region");
            }
            filtered = data.filter((country) =>
                country.name.toLowerCase().includes(inputValue.toLowerCase())
            );
        } else if (dropdownOption !== "Filter by Region") {
            filtered = data.filter(
                (country) => country.region === dropdownOption
            );
        }

        return filtered;
    }, [inputValue, dropdownOption]);

    const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedData = filteredData.slice(startIndex, endIndex);

    return {
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
