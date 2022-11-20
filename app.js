import get from "./utils/getElement.js";
import getUser from "./utils/fetchUser.js";
import displayUser from "./utils/display.user.js";

const btn = get(".btn");

const showUser = async () => {
  // get user from api
  // getUser().then((data) => console.log(data));
  const person = await getUser();
  displayUser(person);

  // display user
};

window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);
