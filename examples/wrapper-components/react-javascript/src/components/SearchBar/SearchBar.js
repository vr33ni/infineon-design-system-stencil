import React from 'react';
import { IfxSearchBar } from '@infineon/infineon-design-system-react';

function SearchBar() {
  const handleSearch = (event) => {
    console.log("handling search: ", event.detail?.detail)
  };
  return (
    <div  >
      <IfxSearchBar onIfxChange={handleSearch} style={{ width: '100%' }} show-close-button="true"></IfxSearchBar>

    </div>
  )
}

export default SearchBar;


