import React from "react";
import Select from "react-select";

const MultiSelectField = ({ options, onChange,placeholder, name, value }) => {
    const optionsArray =
        !Array.isArray(options) && typeof options === "object"
            ? Object.values(options)
            : options;

    const handleChange = (value) => {
        onChange({ name: name, value });
    };
    return (
        <div className="mb-4">
            <Select
                isMulti
                closeMenuOnSelect={false}
                value={value}
                options={optionsArray}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={handleChange}
                name={name}
                placeholder={placeholder}
            />
        </div>
    );
};

export default MultiSelectField;
