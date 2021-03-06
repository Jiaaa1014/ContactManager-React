import AppDispatcher from '../dispatcher/AppDispatcher'
import AppConstants from '../constants/AppConstants'
import { EventEmitter } from 'events'

const CHANGE_EVENT = 'change'

let _contacts = []

const setContacts = (contacts) => _contacts = contacts.sort(SortByName)
const setContact = (contact) => {
  _contacts.push(contact)
  setContacts(_contacts)
  console.log(_contacts)
}
const deleteContact = (id) => {
  console.log(_contacts)

  let index = _contacts.findIndex(x => x.id === id)
  _contacts.splice(index, 1)
}
const SortByName = (a, b) => {
  const aName = a.name.toLowerCase()
  const bName = b.name.toLowerCase()
  return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0))
}

class AppStoreClass extends EventEmitter {

  // emitChange = () => this.emit(CHANGE_EVENT)
  // addChangeListener = (callback) => this.on(CHANGE_EVENT, callback)
  // removeChangeListener = (callback) => this.removeListener(CHANGE_EVENT, callback)
  // getContacts = () => _contacts
  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  getContacts() {
    return _contacts;
  }


}

const AppStore = new AppStoreClass()

// 在這裡使用action乘載的payload然後在store裡更新view
AppStore.dispatcherToken = AppDispatcher.register(action => {
  switch (action.actionType) {

    case AppConstants.RECIEVE_CONTACTS:
      setContacts(action.contacts)
      AppStore.emitChange()
      break

    case AppConstants.RECIEVE_CONTACTS_ERROR:
      alert(action.message)
      AppStore.emitChange()
      break

    case AppConstants.RECIEVE_CONTACT:
      setContact(action.contact)
      AppStore.emitChange()
      break

    case AppConstants.RECIEVE_CONTACT_ERROR:
      alert(action.message)
      AppStore.emitChange()
      break

    case AppConstants.DELETE_CONTACT:
      deleteContact(action.id)
      AppStore.emitChange()
      break

    case AppConstants.DELETE_CONTACT_ERROR:
      alert(action.message)
      AppStore.emitChange()
      break
    default:
  }
})
export default AppStore