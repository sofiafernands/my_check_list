import React, { useState } from "react";



function useLocalStorage(itemName, initialValue) {

  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);


  React.useEffect(() => {
  setTimeout (() => {
    try {
      const localStorageItem = localStorage.getItem(itemName);

      let parsedItem;

      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = [];
      }
      else {
        parsedItem = JSON.parse(localStorageItem);
        setItem(parsedItem)
      }

      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError(true)
    }
  }, 2000)
  }, []); 

  const saveItem = (newItem) => {
    localStorage.setItem('TODOSVERSION1', JSON.stringify(newItem))
    setItem(newItem)
  }
  return { item, saveItem, error, loading }
}

export { useLocalStorage }