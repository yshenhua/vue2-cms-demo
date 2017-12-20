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
        'tel|13500000000-17900000000': 15728042052,
        'date': _ => Random.date()
      }
    ]
  })
  res.send(mockData)
})

module.exports = router
