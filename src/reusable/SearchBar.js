import React from 'react';
import Button from 'Button';

function Searchbar({onSearch}) {
   const [searchTerm, setSearchTerm] = useState ('');

   const handleInput = (event) => {
    setSearchTerm(event.target.value);
   };

   const handleSubmit= (event) => {
    event.preventDefault();
    onSearch(searchTerm);
   };

   return (
    <div>
        <form onSubmit= {handleSubmit}>
            <input
            type='text'
            placeholder= 'Search...'
            value={searchTerm}
            onChange={handleInput}
        />
        <Button type='submit'/>
            Search
        
        </form>
    </div>
   );
  
};

export default Searchbar;