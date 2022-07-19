const express = require('express');

const app = express();
require('@babel/register');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();

// импорт вспомогательных ф-й
const session = require('express-session');
const dbCheck = require('./db/dbCheck');
const sessionConfig = require('./lib/sessionConfig');

// импорт роутов
const indexRoutes = require('./routes/indexRoutes');
const authRoutes = require('./routes/authRoutes');
const apiRoutes = require('./routes/apiRoutes');
const searchRoutes = require('./routes/searchRoutes');
const errorRoutes = require('./routes/errorRoutes');

// вызов функции проверки соединения c базоый данных
dbCheck();

app.use(express.static(path.resolve('public')));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sessionConfig));

// роутеры
app.use('/', indexRoutes);
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);
app.use('/search', searchRoutes);
app.use('*', errorRoutes);

const PORT = process.env.PORT || 3100;
app.listen(PORT, (err) => {
  if (err) return console.log('Ошибка запуска сервера.', err.message);
  console.log(`Сервер запущен на http://localhost:${PORT} `);
});
