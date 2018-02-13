import request from 'superagent/lib/client'


export default {
  getContacts: (url) => {
    return new Promise((resolve, reject) => {
      request
        .get(url)
        .end((err, res) => {
          if (err) reject(err)
          resolve(JSON.parse(res.text))
        })
    })
  }
}