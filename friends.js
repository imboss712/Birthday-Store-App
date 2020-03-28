const fs = require("fs");
const chalk = require("chalk");
const moment = require("moment");

// Add a friend

const addFriend = (name, dob) => {
  const friends = loadFriends();
  const duplicate = friends.find(friend => friend.name === name);
  if (!duplicate) {
    const friend = {
      name,
      dob: moment(dob, "DD-MM-YYYY").format("DD-MM-YYYY")
    };
    friends.push(friend);
    saveFriend(friends);

    console.log(
      chalk.green.inverse("\n " + friend.name + " added successfully !!! ")
    );
    console.log(
      chalk.blue.inverse("\n " + friends.length + " friend(s) total. \n")
    );
  } else {
    console.log(
      chalk.red.inverse("\n Friend with this name already exists !!! \n")
    );
  }
};

// Remove a friend

const removeFriend = name => {
  const friends = loadFriends();
  const duplicate = friends.filter(friend => friend.name !== name);
  if (duplicate.length < friends.length) {
    saveFriend(duplicate);
    console.log(
      chalk.green.inverse("\n " + name + " deleted successfully !!! ")
    );
    console.log(
      chalk.blue.inverse("\n " + duplicate.length + " friend(s) remaining. \n")
    );
  } else {
    console.log(chalk.red.inverse("\n " + name + " not found !!! \n"));
  }
};

// Read a friend

const readFriend = name => {
  const friends = loadFriends();
  const friend = friends.find(friend => friend.name === name);
  if (!friend) {
    console.log(
      chalk.red.inverse("\n " + name + " not present in our database !!! \n")
    );
  } else {
    console.log(chalk.blue.inverse("\n " + name + " found. \n"));
    console.log(
      chalk.white.inverse(chalk.bold(" Name : ") + friend.name + " ")
    );
    console.log(
      chalk.white.inverse(
        chalk.bold(" Date of Birth : ") +
          moment(friend.dob, "DD-MM-YYYY").format("dddd") +
          ", " +
          friend.dob +
          " "
      )
    );
    console.log(
      chalk.white.inverse(
        chalk.bold(" Current Age : ") +
          moment(friend.dob, "DD-MM-YYYY").fromNow(true)
      ) + " \n"
    );
  }
};

// List all friends

const listFriends = () => {
  const friends = loadFriends();
  if (!friends || friends.length === 0) {
    console.log(chalk.red.inverse("\n No friend found !!! \n"));
  } else {
    console.log(
      chalk.blue.inverse("\n " + friends.length + " friend(s) total !!! \n")
    );
    friends.forEach(friend => {
      console.log(
        chalk.white.inverse(chalk.bold(" Name : ") + friend.name + " ")
      );
      console.log(
        chalk.white.inverse(
          chalk.bold(" Date of Birth : ") +
            moment(friend.dob, "DD-MM-YYYY").format("DD-MM-YYYY") +
            " \n"
        )
      );
    });
  }
};

// Save friend in JSON file

const saveFriend = friend => {
  fs.writeFileSync("Birthdates.json", JSON.stringify(friend));
};

// Load all friends from JSON file

const loadFriends = () => {
  try {
    const friends = fs.readFileSync("Birthdates.json", "utf8");
    return JSON.parse(friends);
  } catch (err) {
    return [];
  }
};

module.exports = {
  addFriend,
  removeFriend,
  readFriend,
  listFriends
};
