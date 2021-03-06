import React from 'react';

const Search = ({search}) => (
    <div className="search-bar">
      <input
        className="question-search-bar-actual"
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
        onChange={(e) => {
          if (e.target.value.length > 2) {
            search(e.target.value);
          }
          if (e.target.value.length === 0) {
            search('');
          }
        }}
      />
      <img className="QandA-search-bar-image" alt="" src="./assets/magnifying_glass.svg" />
    </div>
);

export default Search;

// const onInputChange = (event) => {
//   changeInputText(event.target.value);
//   search(inputText);
// };
