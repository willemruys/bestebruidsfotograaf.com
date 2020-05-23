import React from "react"

class ContactForm extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    emailAddress: "",
    text: "",
  }

  handleInputChange = event => {
    const target = event.target 
    const value = event.value
    const name = target.name 

    this.setState({
      [name]: value,
    })
  }

  render () {
    return (
      <div class="site-section">
      <div class="container">
  
        <div class="row mb-5 ">
          <div class="col-md-7 text-center mx-auto">
            <h2 class="serif">Neem vrijblijvend contact met me op</h2>
          </div>
        </div>
        <div class="row mb">
          <div class="col-lg-12 mb-5" >
            <iframe frameborder="0" border="0" width="100%" height="1100px" scrolling="yes" src="https://shootzilla.com/contact/dab02d5d9bae56d33efa?embedded=1"></iframe>
          </div>
        </div>
      </div>
    </div> 
  )
  }
}


export default ContactForm;