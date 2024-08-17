import { useState } from 'react';

const DialPad = () => {
  const [number, setNumber] = useState('');

  const handleButtonClick = (value: string) => {
    setNumber((prev) => prev + value);
  };

  const handleSubmit = () => {
    alert(`Number entered: ${number}`);
  };

  const handleClear = () => {
    setNumber('');
  };

  return (
    <div className="mt-10 flex flex-col items-center">
      <input
        type="text"
        value={number}
        readOnly
        placeholder="Please enter mobile number"
        className="mb-3 w-60 border-b-2 p-2 text-center"
      />
      <div className="mb-3 grid grid-cols-3 gap-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'].map((item) => (
          <button
            key={item}
            onClick={() => handleButtonClick(item.toString())}
            className="h-16 w-16 rounded-md bg-gray-300 text-2xl shadow-md"
          >
            {item}
          </button>
        ))}
      </div>
      <div className="flex flex-col items-center space-y-3">
        <button
          onClick={handleSubmit}
          className="rounded-md bg-blue-500 px-6 py-2 text-white shadow-md"
        >
          Submit
        </button>
        <button
          onClick={handleClear}
          className="rounded-md bg-red-500 px-6 py-2 text-white shadow-md"
        >
          Clear
        </button>
        <button className="rounded-md bg-yellow-500 px-6 py-2 text-black shadow-md">
          Continue as guest
        </button>
      </div>
    </div>
  );
};

export default DialPad;
