import {Link} from 'react-router-dom'
import "./navbar.css"

const menus = [
    {
        label: 'Home',
        herf: '/'
    },
    {
        label: 'Teachers',
        herf: '/teachers'
    },

    {
        label: 'Holidays',
        herf: '/holidays'
    },

    {
        label: 'Contact Us',
        herf: '/contact-us'
    }
]

const Navbar = ()=> {
   return (
    <nav 
        className='sticky top-0 left-0 z-50'
        style={{
            background: '#f7f2f2',
            display: 'flex',
            justifyContent: 'space-between',
            padding: '8px 48px',
            boxShadow: '0 8px 8px 0 rgba(0,0,0, 0.1)'
        }}
    >
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
        }}>
        <img src="./images/logo.png" width="60" />
        <h1 className='text-2xl font-bold'>JIS College</h1>
        </div>

        <ul style={{
            listStyle: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: 32
            
        }}>

            {
                menus.map(function(menu,index){
                    return (
                        <li key={index}>
                            <Link to={menu.herf} style={{
                            textDecoration: 'none',
                            color: '#323232',
                            fontSize: 17,
                            }}>{menu.label}</Link>
                        </li>
                    )
                })
            }


            {/* <li>
                <Link to="/" style={{
                    textDecoration: 'none',
                    color: '#323232',
                    fontSize: 17,
                }}>Home</Link>
            </li> */}

            
        </ul>
    </nav>
   )
}
export default Navbar;



    // <li><a href="#">Teachers</a></li>
    //             <li><a href="#">Holidays</a></li>
    //             <li><a href="#">Contact us</a></li>