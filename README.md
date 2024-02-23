## 获取BTC价格的函数

以下是我们用来获取BTC价格的函数：

```python
def get_btc_price():
  response = request.get("https://api.coindesk.com/v1/bpi/currentprice/BTC.json")
  return response.json()["bpi"]["USD"]["rate"]
