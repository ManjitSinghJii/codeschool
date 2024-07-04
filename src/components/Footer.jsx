import { Link } from "react-router-dom";

const Footer = ()=> {

    return (
        <footer style={{
            background: '#263254',
            padding: '80px 10%',
            display: 'flex',
            gap: '20px'
        }}>
            <div style={{width: '100%'}}>
                <h2 style={{
                    color: 'white', 
                    fontWeight: '600',
                    margin: 0
                }}>Jis College</h2>
                <p style={{color: 'white'}}>is a Engineering college located in Kalyani, West Bengal, India. </p>
            </div>

            <div style={{width: '100%'}}>
                <h2 style={{
                    color: 'white', 
                    fontWeight: '600',
                    margin: 0
                }}>Popular Links</h2>
                <ul style={{
                    padding: 0,
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16
                }}>
                    <li>
                       <Link to="/" style={{
                        color: 'white',
                        textDecoration: 'none'
                       }}>Home</Link>
                    </li>

                    <li>
                       <Link to="/teachers" style={{
                        color: 'white',
                        textDecoration: 'none'
                       }}>Teachers</Link>
                    </li>

                    <li>
                       <Link to="/holidays" style={{
                        color: 'white',
                        textDecoration: 'none'
                       }}>Holidays</Link>
                    </li>

                    <li>
                       <Link to="/contact-us" style={{
                        color: 'white',
                        textDecoration: 'none'
                       }}>Contact Us</Link>
                    </li>
                </ul>
            </div>

            <div style={{width: '100%'}}>
                <h2 style={{
                    color: 'white', 
                    fontWeight: '600',
                    margin: 0
                }}>Social Profiles</h2>
                <ul style={{
                    padding: 0,
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16
                }}>
                    <li>
                       <Link to="https://www.youtube.com/channel/UClEe813Dx3UFIgIADNy0MRg" style={{
                        color: 'white',
                        textDecoration: 'none'
                       }}>
                            <i className="ri-youtube-line" style={{marginRight: 6}}></i>
                            You Tube
                        </Link>
                    </li>

                    <li>
                       <Link to="https://www.facebook.com/profile.php?id=100014281624582" style={{
                        color: 'white',
                        textDecoration: 'none'
                       }}>
                            <i className="ri-facebook-circle-line" style={{marginRight: 6}}></i>
                            Facebook
                        </Link>
                    </li>

                    <li>
                       <Link to="https://www.linkedin.com/in/manjit-singh-16798b214/" style={{
                        color: 'white',
                        textDecoration: 'none'
                       }}>
                            <i className="ri-linkedin-box-line" style={{marginRight: 6}} ></i>
                            Linkedin
                        </Link>
                    </li>

                    <li>
                       <Link to="https://github.com/ManjitSinghJii" style={{
                        color: 'white',
                        textDecoration: 'none'
                       }}>
                            <i className="ri-github-fill" style={{marginRight: 6}}></i>
                            GitHub
                        </Link>
                    </li>
                </ul>
            </div>

            <div style={{width: '100%'}}>
                <h2 style={{
                    color: 'white', 
                    fontWeight: '600',
                    margin: 0
                }}>Contact us</h2>
                <form style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16,
                    marginTop: 16
                }} >
                    <input 
                        type="text" 
                        required 
                        name="fullname"
                        placeholder="Full Name"
                        style={{
                            border: 'none',
                            padding: 12,
                            borderRadius: 4,
                            width: '100%',
                            
                        }}
                    />

                    <input 
                        type="email" 
                        required 
                        name="email"
                        placeholder="abc@gmail.com"
                        style={{
                            border: 'none',
                            padding: 12,
                            borderRadius: 4,
                            width: '100%'
                        }}
                    />

                    <textarea
                        required 
                        name="message"
                        placeholder="message"
                        style={{
                            border: 'none',
                            padding: 12,
                            borderRadius: 4,
                            width: '100%'
                        }}
                        rows="3"
                    >
                    </textarea>

                    <button style={{
                        border: 'none',
                        padding: '12px 20px',
                        borderRadius: 4,
                        width: 'fit-content',
                        background: '#f38e1e',
                        color: 'white'
                    }}>Submit</button>
                </form>
            </div>
            
        </footer>
    )
}

export default Footer;