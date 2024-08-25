import React, { useState, useContext } from 'react';
import axios from 'axios';
import { FilterContext } from './FilterContext'; // Assuming you've created a FilterContext

function InputForm() {
    const [jsonInput, setJsonInput] = useState('');
    const [error, setError] = useState(null);
    const { selectedFilter } = useContext(FilterContext); // Access selected filter from context

    const handleSubmit = async () => {
        try {
            const parsedData = JSON.parse(jsonInput);
            let filteredData;

            switch (selectedFilter) {
                case 'numbers':
                    filteredData = parsedData.filter((item) => typeof item === 'number');
                    break;
                case 'strings':
                    filteredData = parsedData.filter((item) => typeof item === 'string');
                    break;
                default:
                    filteredData = parsedData;
                    break;
            }

            const response = await axios.post('https://bajaj-test-0ac3.onrender.com/bfhl/', filteredData); // Update with your API URL
            onResponse(response.data);
            setError(null);
        } catch (err) {
            setError('Invalid JSON or API error');
        }
    };

    return (
        <div>
            <textarea
                value={jsonInput}
                onChange={(e) => setJsonInput(e.target.value)}
                placeholder='Enter your JSON here'
            />
            <button onClick={handleSubmit}>Submit</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

export default InputForm;