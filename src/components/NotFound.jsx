const NotFound = ()=> {
    return(
        <div style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#f5f5f5'

        }}>
            <img src="./images/not-found.svg" alt="Not Found"  width='720'/>
            <h1 style={{
                color: '#6C63FF'
            }}>Page not found !</h1>
        </div>
    )
}

export default NotFound;