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
        chalk.green.inverse(
          chalk.bold(" Date of Birth : ") +
            moment(friend.dob, "DD-MM-YYYY").format("DD-MM-YYYY") +
            " "
        )
      );
      console.log(
        chalk.white.inverse(
          chalk.bold(" Current Age : ") +
            moment(friend.dob, "DD-MM-YYYY").fromNow(true)
        ) + " \n"
      );
    });
  }
};

// Sort all friends's birthdates

const sortBirthdates = () => {
  const friends = upcomingBday();
  if (!friends || friends.length === 0) {
    console.log(chalk.red.inverse("\n No birthdate found !!! \n"));
  } else {
    console.log(chalk.white.bgGreen("\n Upcoming birthdates !!! \n"));
    const sortedList = friends.sort((a, b) => {
      return moment(a.dob, "DD-MM-YYYY").diff(moment(b.dob, "DD-MM-YYYY"));
    });
    sortedList.forEach(friend => {
      console.log(
        chalk.white.bgBlue(
          " " +
            moment(friend.dob, "DD-MM-YYYY").format("dddd DD MMMM YYYY") +
            " - " +
            friend.name +
            " "
        )
      );
      console.log(
        chalk.white.bgRed(
          " " + moment(friend.dob, "DD-MM-YYYY").fromNow() + " \n"
        )
      );
    });
  }
};

// Get Latest single upcoming birthdate

const getLatest = () => {
  const friends = upcomingBday();
  if (!friends || friends.length === 0) {
    console.log(chalk.red.inverse("\n No birthdate found !!! \n"));
  } else {
    console.log(chalk.white.bgMagenta("\n Latest upcoming birthdate !!! \n"));
    console.log(
      chalk.white.bgBlue(
        " " +
          moment(friends[0].dob, "DD-MM-YYYY").format("dddd DD MMMM YYYY") +
          " - " +
          friends[0].name +
          " "
      )
    );
    console.log(
      chalk.white.bgRed(
        " " + moment(friends[0].dob, "DD-MM-YYYY").fromNow() + " \n"
      )
    );
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

// Update all friends's birthdates from JSON file

const upcomingBday = () => {
  const friends = loadFriends();
  if (!friends || friends.length === 0) {
    return [];
  } else {
    const Upcoming = friends.filter(friend => {
      let newDob = moment(friend.dob, "DD-MM-YYYY").set(
        "year",
        moment().year()
      );

      if (newDob.diff(moment()) < 0) {
        newDob = moment(friend.dob, "DD-MM-YYYY").set(
          "year",
          moment().year() + 1
        );
      }
      friend.dob = moment(newDob, "DD-MM-YYYY");
      return true;
    });
    return Upcoming;
  }
};

module.exports = {
  addFriend,
  removeFriend,
  readFriend,
  listFriends,
  sortBirthdates,
  getLatest
};
