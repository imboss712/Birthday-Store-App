# Birthdates-Store-App

Birthday Store App is terminal based application developed in [NodeJS](https://nodejs.org/en/). In this application user can add a friend with his date of birth, can delete and can list all friends with their respective birth dates. I have also used [Moment.js](https://momentjs.com) to format date of births and to show current age.

## Commands with Demo Images:

###### ( Run commands in terminal )

### Add a new friend

`node app.js add --name="Shashi Kant Yadav" --dob="07-12-1998"`

<p align="center">
  <img src="./Images/addFriend.png">
</p>

If name already present, It will show error

<p align="center">
  <img src="./Images/alreadyAdded.png">
</p>

### Remove a friend

`node app.js remove --name="Shashi Kant Yadav"`

<p align="center">
  <img src="./Images/deleteFriend.png">
</p>

If name is not present in JSON file, then it will show error

<p align="center">
  <img src="./Images/notFoundToDelete.png">
</p>

### Read a friend's birthday

`node app.js read --name="Shashi Kant Yadav"`

<p align="center">
  <img src="./Images/readFriend.png">
</p>

If name not found then it will show an error

<p align="center">
  <img src="./Images/notFoundToRead.png">
</p>

### List all friends's birthday

`node app.js list`

<p align="center">
  <img src="./Images/listFriend.png">
</p>

If No friend in JSON File, then it will show something like this

<p align="center">
  <img src="./Images/emptyDatabase.png">
</p>

### Sort all friends's birthdate

`node app.js sort`

<p align="center">
  <img src="./Images/sortFriend.png">
</p>

If No birthdate in JSON File, then it will show something like this

<p align="center">
  <img src="./Images/notFoundBday.png">
</p>

### Get latest single upcoming birthdate

`node app.js latest`

<p align="center">
  <img src="./Images/latest.png">
</p>

### About Developer

`node app.js developer`

<p align="center">
  <img src="./Images/aboutDev.png">
</p>

### Yargs Version

`node app.js --version`

<p align="center">
  <img src="./Images/version.png">
</p>

### Help Command

`node app.js --help`

<p align="center">
  <img src="./Images/helpCommand.png">
</p>

If you need help in specific command. eg: need help in `add` command -

`node app.js add --help`

<p align="center">
  <img src="./Images/helpForAddCommand.png">
</p>

## Built With :

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [NodeJS](https://nodejs.org/en/)
- [Chalk](https://www.npmjs.com/package/chalk)
- [Yargs](https://www.npmjs.com/package/yargs)
- [Moment.js](https://www.npmjs.com/package/moment)

## Developed By :

- [Shashi Kant Yadav](https://github.com/shashikant712)

## License :
- [ISC License](https://choosealicense.com/licenses/isc/)

Copyright (c) 2020, [Shashi Kant Yadav](https://github.com/shashikant712)
