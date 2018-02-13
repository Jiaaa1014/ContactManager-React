import React, { Component } from 'react';
import { Panel, FormGroup, Button, FormControl } from 'react-bootstrap'
import AppActions from '../actions/AppActions';

let id = 11
export default class ContactListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newContact: {
        name: '',
        email: '',
        phone: '',
      }
    }
  }

  handleSubmit(e) {
    console.log(id)
    if (!this.name.value) alert('type your name')
    else {
      this.setState({
        newContact: {
          name: this.name.value,
          email: this.email.value,
          phone: this.phone.value,
          id: id
        }
      }, () => {
        AppActions.saveContact(this.state.newContact)
      })
      id++
    }
    this.name.value = ''
    this.email.value = ''
    this.phone.value = ''
    e.preventDefault()
  }
  render() {
    return (
      <Panel>
        <Panel.Heading>Add Contact</Panel.Heading>
        <Panel.Body>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup>
              <FormControl
                type="text"
                inputRef={ref => this.name = ref}
                placeholder="Add name"
              />
            </FormGroup>
            <FormGroup>
              <FormControl
                type="text"
                inputRef={ref => this.email = ref}
                placeholder="Add email"
              />
            </FormGroup>
            <FormGroup>
              <FormControl
                type="text"
                inputRef={ref => this.phone = ref}
                placeholder="Add phone"
              />
            </FormGroup>
            <Button type="submit">Submit</Button>
          </form>

        </Panel.Body>
      </Panel>
    );
  }
}

