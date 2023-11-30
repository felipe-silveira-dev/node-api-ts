import express from 'express';
import routes from './routes/routes';
import cors from 'cors'

const app = express();
app.use(cors())
app.use(routes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
