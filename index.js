const express = require('express');

require('dotenv').config();
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const quizRouter = require('./router/quiz.router');

const {loginRouter,signupRouter} = require('./router/auth.router');
const routeNotFound = require("./middleware/routerNotFound");
const quizzes = require("./db/quizzes")


const PORT = 3000;

app.get('/', (req, res) => {
  res.json(quizzes);
});
app.use('/quiz', quizRouter);
app.use('/auth/login',loginRouter); 
app.use('/auth/signup',signupRouter);
app.use(routeNotFound);


app.listen(process.env.PORT || PORT, () => {
  console.log(`server is up and running`);
});