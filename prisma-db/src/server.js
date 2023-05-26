const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

const port = 3000; // Choose the desired port number
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});