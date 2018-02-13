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
  },
  saveContact: (url, contact) => {
    return new Promise((resolve, reject) => {
      request
        .post(url)
        .send(contact)
        .end((err, res) => {
          if (err) reject(err)
          resolve(JSON.parse(res.text))
        })
    })
  },
  deleteContact: (url) => {
    return new Promise((resolve, reject) => {
      // url有傳成功
      request
        .delete(url)
        .end((err, res) => {
          if (err) reject(err)
          resolve(JSON.parse(res.text))
        })
    })
  }

}