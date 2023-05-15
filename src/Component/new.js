import React, { useState } from "react";
import { Bar } from "react-chartjs-2";

function WordFrequency() {
  const [textData, setTextData] = useState("");

  const fetchTextData = async () => {
    const response = await fetch("https://www.terriblytinytales.com/test.txt");
    const data = await response.text();
    setTextData(data);
  };

  const handleSubmit = () => {
    fetchTextData();
  };

  const calculateWordFrequencies = () => {
    const words = textData.split(/\s+/);
    const wordFrequencies = words.reduce((acc, word) => {
      if (!acc[word]) {
        acc[word] = 1;
      } else {
        acc[word] += 1;
      }
      return acc;
    }, {});
    return wordFrequencies;
  };

  const wordFrequencies = calculateWordFrequencies();
  console.log(wordFrequencies); // Output the word frequencies to console for testing

