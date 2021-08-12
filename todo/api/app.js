const express =  require('express');
const connectDB = require('./config/db');
connectDB();
const cors = require('cors');
const todos = require('./routes/todos');

const app = express();
var corsOptions = {
    origin: 'http://localhost:3000',
  }
app.use(cors(corsOptions))


app.use(express.json());
app.use('/api', todos);

app.get('/', (req, res) => {
    res.send('API is running...')
})


app.listen(5001, console.log(`Server running on port 5000`));
