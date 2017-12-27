const express = require('express')
const router = express.Router()
const Mock = require('mockjs')

var Random = Mock.Random
router.post('/tableData1', (req, res) => {
  // console.log(req)
  const mockData = Mock.mock({
    'rows|1-10': [
      {
        'id|+1': 1,
        'name': _ => Random.cname(),
        'sex|0-1': 1,
        'tel': /^1(3|4|5|7|8)\d{9}$/,
        'date': _ => Random.date()
      }
    ]
  })
  res.send(mockData)
})

router.post('/tableData2', (req, res) => {
  // console.log(req)
  const mockData = Mock.mock({
    'rows|1-10': [
      {
        'order|+1': 1514273771809,
        'goods': _ => Random.cword(3, 10),
        'price|1-99.1': 1,
        'count|1-99': 1
      }
    ]
  })
  res.send(mockData)
})

module.exports = router
