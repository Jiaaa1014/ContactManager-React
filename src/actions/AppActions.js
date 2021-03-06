import AppDispatcher from '../dispatcher/AppDispatcher'
import AppConstants from '../constants/AppConstants'
import ContactAPI from '../utils/ContactAPI'

// 不建議直接在這裡接json資料，讓flux架構和後端分離
// 其接資料的API另外設置在"../utils"
export default {
  recieveContacts: () => {
    ContactAPI
      .getContacts('https://jsonplaceholder.typicode.com/users')
      .then(contacts => {
        AppDispatcher.dispatch({
          actionType: AppConstants.RECIEVE_CONTACTS,
          contacts: contacts
        })
      })
      .catch(message => {
        AppDispatcher.dispatch({
          actionType: AppConstants.RECIEVE_CONTACTS.ERROR,
          message: message
        })
      })
  },
  saveContact: (contact) => {
    ContactAPI
      .saveContact('https://jsonplaceholder.typicode.com/users', contact)
      .then(() => {
        AppDispatcher.dispatch({
          actionType: AppConstants.RECIEVE_CONTACT,
          contact
        })
      })
      .catch(message => {
        AppDispatcher.dispatch({
          actionType: AppConstants.RECIEVE_CONTACT.ERROR,
          message: message
        })
      })
  },
  deleteContact: (id) => {
    console.log(id)
    ContactAPI
      .deleteContact('https://jsonplaceholder.typicode.com/users/' + id)
      .then(contact => {
        AppDispatcher.dispatch({
          actionType: AppConstants.DELETE_CONTACT,
          id: id
        })
      })
      .catch(message => {
        AppDispatcher.dispatch({
          actionType: AppConstants.DELETE_CONTACT.ERROR,
          message: message
        })
      })
  }
}