"use client";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Field } from "../ui/field";
import { Select } from "../ui/select";

const SearchBar = () => {
  const itemsPrices = [
    {
      label: "Select Price",
      value: null,
    },
    {
      label: "Low to High",
      value: "low-price",
    },
    {
      label: "High to Low ",
      value: "high-price",
    },
  ];
  return (
    <div>
      <Field orientation="horizontal">
        <Input type="search" placeholder="Search..." />
        <Button>Search</Button>
      </Field>
      <Select></Select>
    </div>
  );
};

export default SearchBar;
