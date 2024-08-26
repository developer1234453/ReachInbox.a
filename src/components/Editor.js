import React from 'react';

const Editor = ({ value, onChange }) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      className="w-full h-48 p-4 border rounded"
    />
  );
};

export default Editor;
