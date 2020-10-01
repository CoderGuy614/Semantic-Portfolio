import axios from "axios";

const githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
const githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
const codewarsKey = process.env.REACT_APP_CODEWARS_KEY;

export const loadRepos = async () => {
  try {
    const res = await axios.get(
      `https://api.github.com/users/coderguy614/repos?&sort=updated:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    if (res.data) {
      return res.data;
    }
  } catch (error) {
    return error;
  }
};

export const loadUser = async () => {
  try {
    const res = await axios.get(
      `https://api.github.com/users/coderguy614?client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    if (res.data) {
      return res.data;
    }
  } catch (error) {
    return error;
  }
};

export const loadCodewarsUser = async () => {
  try {
    const res = await axios(
      `https://cors-anywhere.herokuapp.com/codewars.com/api/v1/users/CoderGuy614?access_key=${codewarsKey},`,
      {
        method: "GET",
        mode: "no-cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        credentials: "same-origin",
      }
    );
    if (res.data) {
      return res.data;
    }
  } catch (error) {
    return error;
  }
};

export const loadCodewarsChallenges = async () => {
  try {
    const res = await axios(
      `https://cors-anywhere.herokuapp.com/www.codewars.com/api/v1/users/CoderGuy614/code-challenges/completed?page=0&per_page=3&?access_key=${codewarsKey}`,
      {
        method: "GET",
        mode: "no-cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        credentials: "same-origin",
      }
    );
    if (res.data) {
      return res.data;
    }
  } catch (error) {
    return error;
  }
};
