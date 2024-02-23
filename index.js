// 引入需要的模块
const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// 定义获取BTC价格的函数
async function getBTCPrice() {
  try {
    const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
    return response.data.bpi.USD.rate;
  } catch (error) {
    // 如果发生错误，抛出这个错误
    throw error;
  }
}

app.get('/btc', async (req, res) => {
  try {
    // 调用getBTCPrice函数并发送结果
    const price = await getBTCPrice();
    res.send(`The current price of Bitcoin is ${price} USD.`);
  } catch (error) {
    // 如果发生错误，发送一个错误响应
    res.status(500).send({message: 'There was a problem fetching the price of Bitcoin'});
  }
});

// 启动服务器
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});