const yargs = require("yargs");
const chalk = require("chalk");
const {
  addFriend,
  removeFriend,
  readFriend,
  listFriends,
  sortBirthdates,
  getLatest
} = require("./friends");

// Help --> node app.js --help

// Yargs version
// node app.js --version

yargs.version("1.1.0");

// Add a friend
// node app.js add --name="Shashi Kant Yadav" --dob="07-12-1998"
// Help --> node app.js add --help

yargs.command({
  command: "add",
  describe: "Add a new friend",
  builder: {
    name: {
      describe: "Name of the friend",
      demandOption: true,
      type: "string"
    },
    dob: {
      describe: "Date of birth (dd-mm-yyyy)",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    addFriend(argv.name, argv.dob);
  }
});

// Remove a friend
// node app.js remove --name="Shashi Kant Yadav"
// Help --> node app.js remove --help

yargs.command({
  command: "remove",
  describe: "Remove a friend",
  builder: {
    name: {
      describe: "Name of the friend",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    removeFriend(argv.name);
  }
});

// Read a friend
// node app.js read --name="Shashi Kant Yadav"
// Help --> node app.js read --help

yargs.command({
  command: "read",
  describe: "Read a friend",
  builder: {
    name: {
      describe: "Name of the friend",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    readFriend(argv.name);
  }
});

// List all friends
// node app.js list
// Help --> node app.js list --help

yargs.command({
  command: "list",
  describe: "List all friends",
  handler(argv) {
    listFriends();
  }
});

// Sort all upcoming birthdates
// node app.js sort
// Help --> node app.js sort --help

yargs.command({
  command: "sort",
  describe: "Sort all birthdates",
  handler(argv) {
    sortBirthdates();
  }
});

// Get Latest birthday of a friend
// node app.js latest
// Help --> node app.js latest --help

yargs.command({
  command: "latest",
  describe: "Get latest upcoming birthdate of a friend",
  handler(argv) {
    getLatest();
  }
});

// About developer
// node app.js developer
// Help --> node app.js developer --help

yargs.command({
  command: "developer",
  describe: "About Developer",
  handler(argv) {
    console.log(
      chalk.green.inverse(
        "\n Shashi Kant Yadav : https://github.com/shashikant712 \n"
      )
    );
  }
});

yargs.parse();

