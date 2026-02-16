"use client";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Field } from "../ui/field";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useState } from "react";

const SearchBar = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replce } = useRouter();
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("search") || "",
  );
  console.log(pathname, searchParams);

  // filer items type
  interface filterItems {
    label: string;
    value: string;
  }
  // items for filter
  const items: filterItems[] = [
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
  // set or update url
  const updateUrl = (label: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value && value != "none") {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    replce(`${pathname}?${params.toString()}`);
  };
  // Handle the search
  const handleSearch = () => {
    updateUrl("search", SearchTerm);
  };
  // if enter handle search
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className="flex justify-center items-center gap-3 w-full max-w-3xl">
      <Field orientation="horizontal" className="flex w-full ">
        <Input
          type="search"
          className="flex-1"
          placeholder="Search..."
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearchTerm(e.target.value)
          }
          onKeyDown={handleKeyDown}
        />
        <Button onClick={handleSearch}>Search</Button>
      </Field>
      <Select items={items}>
        <SelectTrigger className="w-48">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Filter with Price</SelectLabel>
            {items.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SearchBar;
