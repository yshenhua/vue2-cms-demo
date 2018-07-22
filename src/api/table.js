import axios from 'axios'

const getTableData1 = function () {
  const url = '/api/tableData1'

  const config = {
    method: 'post',
    data: {
      code: 1
    }
  }

  return axios(url, config)
}

const getTableData2 = function () {
  const url = '/api/tableData2'

  const config = {
    method: 'post',
    data: {
      code: 1
    }
  }

  return axios(url, config)
}

export {getTableData1, getTableData2}
