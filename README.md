# Birthdates-Store-App

Birthday Store App is terminal based application developed in [NodeJS](https://nodejs.org/en/). In this application user can add a friend with his date of birth, can delete and can list all friends with their respective birth dates. I have also used [Moment.js](https://momentjs.com) to format date of births and to show current age.

## Commands with Demo Images:

###### ( Run commands in terminal )

### Add a new friend

`node app.js add --name="Shashi Kant Yadav" --dob="07-12-1998"`

<p align="center">
  <img src="">
</p>

If name already present, It will show error

<p align="center">
  <img src="">
</p>

### Remove a friend

`node app.js remove --name="Shashi Kant Yadav"`

<p align="center">
  <img src="">
</p>

If name is not present in JSON file, then it will show error

<p align="center">
  <img src="">
</p>

### Read a friend's birthday

`node app.js read --name="Shashi Kant Yadav"`

<p align="center">
  <img src="">
</p>

If name not found then it will show an error

<p align="center">
  <img src="">
</p>

### List all friends's birthday

`node app.js list`

<p align="center">
  <img src="">
</p>

If No friend in JSON File, then it will show something like this

<p align="center">
  <img src="">
</p>

### About Developer

`node app.js developer`

<p align="center">
  <img src="">
</p>

## Built With :

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [NodeJS](https://nodejs.org/en/)
- [Chalk](https://www.npmjs.com/package/chalk)
- [Yargs](https://www.npmjs.com/package/yargs)
- [Moment.js](https://www.npmjs.com/package/moment)

## Developed By :

- [Shashi Kant Yadav](https://github.com/shashikant712)
