import axios from "axios";

const BASE_URL = "https://hp-api.onrender.com/api/";

export async function fetchStudents() {
  const url = `${BASE_URL}characters/students`;
  return await axios
    .get(url)
    .then(function (response) {
      if (response.status !== 200) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.data;
    })
    .catch((error) => {
      console.error("Error in fetchStudents:", error);
      throw error;
    });
}
