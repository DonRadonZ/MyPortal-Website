import { ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";
import Select from "../form/Select";

type SortByProps = {
    options: Array<{ value: string; label: string }>
};

function SortBy({ options }: SortByProps){
    const [searchParams, setSearchParams] = useSearchParams();
    const sortBy = searchParams.get("sortBy")  || "";

    function handleChange(e: ChangeEvent<HTMLSelectElement>){
        searchParams.set("sortBy", e.target.value);
        setSearchParams(searchParams);
    }

    return (
        <Select
            options={options}
            type="white"
            value={sortBy}
            onChange={handleChange}
        />
    )
}

export default SortBy;