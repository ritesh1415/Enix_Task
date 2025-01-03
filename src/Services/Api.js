import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);

const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Mack" },

];

const userDetails = {
  1: { id: 1, name: "John Doe", mobile: "1234567890", skype: "john.doe", email: "john@example.com" },
  2: { id: 2, name: "Jane Smith", mobile: "9876543210", skype: "jane.smith", email: "jane@example.com" },
  3: { id: 3, name: "Mack", mobile: "987655568", skype: "mack.m", email: "mg@123.com" },

};

mock.onGet("/users").reply(200, users);
mock.onGet(/\/user\/\d+/).reply((config) => {
  const id = config.url.split("/").pop();
  return [200, userDetails[id] || null];
});

export default axios;
