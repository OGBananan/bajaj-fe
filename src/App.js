import React, { useState, useEffect } from 'react';
import InputForm from './InputForm';
import FilterDropdown from './FilterDropdown'; // Assuming this component exists
import ResponseDisplay from './ResponseDisplay'; // Assuming this component exists

function App() {
  const [response, setResponse] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    document.title = "21BEC0819";
  }, []);

  const handleResponse = (apiResponse) => {
    setResponse(apiResponse);
  };

  return (
    <div className="App">
      <h1>API Processor</h1>
      <InputForm onResponse={handleResponse} />
      {response && (
        <>
          <FilterDropdown
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
          />
          <ResponseDisplay
            response={response}
            selectedOptions={selectedOptions}
          />
        </>
      )}
    </div>
  );
}

export default App;