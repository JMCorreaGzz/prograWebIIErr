const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.post("http://localhost:3000/src/api/endpoint", async (req, res) => {
  const { nameU, lastName, userName, email, password, createdDate, profilepic } = req.body;

  try {
    // Store the form data in the database using Prisma
    const user = await prisma.user.create({
      data: {
        nameU, 
        lastName,
        userName,
        email,
        password
      },
    });

    res.json({ message: 'Registration successful!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred during registration.' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});