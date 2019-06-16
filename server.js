const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
let nextId = 7;

function getNewId() {
  return nextId++;
}

let friends = [
  {
    id: 1,
    name: 'Ben',
    age: 30,
    email: 'ben@lambdaschool.com',
    location: "Uganda",
    category: "friend",
  },
  {
    id: 2,
    name: 'Austen',
    age: 32,
    email: 'austen@lambdaschool.com',
    location: "Oakland",
    category: "friend",
  },
  {
    id: 3,
    name: 'Ryan',
    age: 35,
    email: 'ryan@lambdaschool.com',
    location: "Brazil",
    category: "co-worker",
  },
  {
    id: 4,
    name: 'Sean',
    age: 35,
    email: 'sean@lambdaschool.com',
    location: "Russia",
    category: "acquaintance",
  },
  {
    id: 5,
    name: 'Michelle',
    age: 67,
    email: 'michelle@gmail.com',
    location: "Manchester",
    category: "friend",
  },
  {
    id: 6,
    name: 'Luis',
    age: 47,
    email: 'luis@lambdaschool.com',
    location: "Spain",
    category: "co-worker",
  },
  {
    id: 7,
    name: 'Maxime',
    age: 120,
    email: 'maxime@gmail.com',
    location: "Manchester",
    category: "project manager",
  },
  {
    id: 8,
    name: 'Freeman',
    age: 65,
    email: 'freeman@lambdaschool.com',
    location: "Spain",
    category: "co-worker",
  },
  {
    id: 9,
    name: 'Luther',
    age: 22,
    email: 'luther@outlook.com',
    location: "Spain",
    category: "co-worker",
  },
];

app.use(cors());
app.use(bodyParser.json());

app.get('/friends', (req, res) => {
  res.status(200).json(friends);
});

app.get('/friends/:id', (req, res) => {
  const { id } = req.params;
  let friend = friends.find(friend => friend.id == id);
  res.status(200).json(friend);
});

app.post('/friends', (req, res) => {
  const friend = { id: getNewId(), ...req.body };
  friends = [...friends, friend];
  res.status(201).json(friends);
});

app.put('/friends/:id', (req, res) => {
  const { id } = req.params;
  let friendIndex = friends.findIndex(friend => friend.id == id);

  if (friendIndex >= 0) {
    friends[friendIndex] = { ...friends[friendIndex], ...req.body };
    res.status(200).json(friends);
  } else {
    res
      .status(404)
      .json({ message: `The friend with id ${id} does not exist.` });
  }
});

app.delete('/friends/:id', (req, res) => {
	friends = friends.filter(friend => friend.id != req.params.id);
	res.status(200).json(friends);
});

app.listen(5000, () => {
  console.log('server listening on port 5000');
});
