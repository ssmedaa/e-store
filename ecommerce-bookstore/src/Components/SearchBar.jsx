import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import { useEffect } from "react";

export default function SearchBar({ onSearch, category }) {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    onSearch(searchTerm, category); // Re-run search whenever category or search term changes
  }, [searchTerm, category]);


  return (
    // <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
    //   <TextField
    //     label="Search Books"
    //     variant="outlined"
    //     value={searchTerm}
    //     onChange={(e) => setSearchTerm(e.target.value)}
    //   />
    //   <IconButton onClick={handleSearch} color="primary">
    //     <SearchIcon />
    //   </IconButton>
    // </Box>
    <Box sx={{ maxWidth: "1200px", mx: "auto", py: 4 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <TextField
            label="Search products..."
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <IconButton onClick={() => onSearch(searchTerm, category)} color="primary">
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
