import React, { useState } from 'react';

export const FileDrop = ({fileInputRef }) => {
    const [isDragActive, setIsDragActive] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragEnter = () => {
    setIsDragActive(true);
  };

  const handleDragLeave = () => {
    setIsDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragActive(false);
    fileInputRef.current.files = e.dataTransfer.files;
  };

  return (
    <label
      htmlFor="files"
      className={`drop-container ${isDragActive ? 'drag-active' : ''}`}
      id="dropcontainer"
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <span className="drop-title">فایل خود را بکشید</span>
      {' یا انتخاب کنید'}
      <input
        type="file"
        id="files"
        accept="*"
        required
        ref={fileInputRef}
      />
    </label>
  );
}

