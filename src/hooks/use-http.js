import React, { useState, useCallback } from "react";
const useHttp = () => {
  const [isLoadingHttp, setIsLoadingHttp] = useState(true);
  const [errorHttp, setErrorHttp] = useState(null);
  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoadingHttp(true);
    setErrorHttp(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
      });
      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      applyData(data);
      //   const loadedTasks = [];
      //   for (const taskKey in data) {
      //     loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      //   }
      //   setTasks(loadedTasks);
    } catch (err) {
      setErrorHttp(err.message || "Something went wrong! while fetching tasks");
    }
    setIsLoadingHttp(false);
  }, []);
  return {
    isLoadingHttp,
    errorHttp,
    sendRequest
  };
};

export default useHttp;
