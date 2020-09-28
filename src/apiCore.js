import axios from "axios";

const githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
const githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;

export const loadRepos = async () => {
  try {
    const res = await axios.get(
      `https://api.github.com/users/coderguy614/repos?per_page=3&sort=updated:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
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
