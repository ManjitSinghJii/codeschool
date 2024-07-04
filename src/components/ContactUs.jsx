import {useState} from 'react'
import Swal from 'sweetalert2'

import Navbar from "./Navbar";
import Footer from "./Footer";

const ContactUs = ()=> {


    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const ContactUs = (e)=>{
        e.preventDefault();
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Thank You ! we will try to reach you soon'

        })
    }

    return (
        <div>
            <Navbar/>
            <div style={{
                display: 'flex',
                padding: 64
            }}>
                <img 
                    src="./images/contact.svg" 
                    alt="contact us"
                    width={"50%"}

                />
                <div style={{
                    width: "50%"
                }}>
                    <form onSubmit={ContactUs} action="" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 24
                    }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 8
                        }}>
                            <label style={{
                                fontSize: 18,
                                fontWeight: 500
                            }}>Full Name</label>
                            <input 
                                onChange={(e)=>setFullname(e.target.value)}
                                placeholder="Enter Name here"
                                name="fullname"
                                required
                                type="text" 
                                style={{
                                    border: '1px solid #ccc',
                                    borderRadius: 4,
                                    padding: 14
                                }}/>
                        </div>

                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 8
                        }}>
                            <label style={{
                                fontSize: 18,
                                fontWeight: 500
                            }}>Email</label>
                            <input 
                                onChange={(e)=>setEmail(e.target.value)}
                                placeholder="abc@gmail.com"
                                name="email"
                                required
                                type="email" 
                                style={{
                                    border: '1px solid #ccc',
                                    borderRadius: 4,
                                    padding: 14
                                }}/>
                        </div>

                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 8
                        }}>
                            <label style={{
                                fontSize: 18,
                                fontWeight: 500
                            }}>Message</label>
                            <textarea 
                                onChange={(e)=>setMessage(e.target.value)}
                                placeholder="Write your query or message here"
                                rows={4}
                                name="message"
                                required
                                type="text" 
                                style={{
                                    border: '1px solid #ccc',
                                    borderRadius: 4,
                                    padding: 14
                                }}/>
                        </div>
                        <button style={{
                            border: 'none',
                            width: 'fit-content',
                            padding: '14px 32px',
                            borderRadius: 5,
                            background: '#6c63ff',
                            color: 'white',
                            fontWeight: 600
                        }}>SUBMIT</button>

                    </form>

                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ContactUs;