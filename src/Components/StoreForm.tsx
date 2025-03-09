import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addStore } from "../redux/storeSlice";

const StoreForm: React.FC = () => {
  const [storeName, setStoreName] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!storeName.trim()) return;

    dispatch(addStore({ id: Date.now(), name: storeName }));
    setStoreName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Store Name"
        value={storeName}
        onChange={(e) => setStoreName(e.target.value)}
      />
      <button type="submit">Add Store</button>
    </form>
  );
};

export default StoreForm;
