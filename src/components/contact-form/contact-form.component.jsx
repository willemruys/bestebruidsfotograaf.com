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
       
        <div class="row">
          <div class="col-lg-8 mb-5" >
            <iframe frameborder="0" border="0" width="100%" height="1100px" scrolling="yes" src="https://shootzilla.com/contact/dab02d5d9bae56d33efa?embedded=1"></iframe>
          </div>
          <div class="col-lg-4 ml-auto">
            <div class="bg-white p-3 p-md-5">
              <h3 class="text-black mb-4">Contact</h3>
              <ul class="list-unstyled footer-link">
                <li class="d-block mb-3">
                <span class="d-block text-black">Asim Bari bruidsfotografie</span><br />
                  <span class="d-block text-black">Address:</span>
                  <span>2de Middellandstraat 19b, 3021 BL Rotterdam</span></li>
                <li class="d-block mb-3"><span class="d-block text-black">Telefoonnummer:</span><span>06-15151555</span></li>
                <li class="d-block mb-3"><span class="d-block text-black">Email:</span><span>info@asim-bari.com</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div> 
  )
  }
}


export default ContactForm;