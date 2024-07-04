import Navbar from './Navbar'
import Footer from './Footer';

const teachers = [
    {
        image: './images/teachers/a.jpg',
        name: 'Manjit Singh',
        qua: 'MCA (Indian University)'
    },

    {
        image: './images/teachers/b.jpg',
        name: 'Sonu Kumar Singh',
        qua: 'BCA (Indian University)'
    },

    {
        image: './images/teachers/c.jpg',
        name: 'Sunil Singh',
        qua: 'B.Tech (Indian University)'
    },

    {
        image: './images/teachers/d.jpg',
        name: 'Ankit Gupta',
        qua: 'M.Tech (Indian University)'
    },

    {
        image: './images/teachers/e.jpg',
        name: 'Rahul Kumar Singh',
        qua: 'BCA (Indian University)'
    },
    {
        image: './images/teachers/f.jpg',
        name: 'Rahul Mahato',
        qua: 'MCA (MAKUT)'
    },

    {
        image: './images/teachers/g.jpg',
        name: 'Nidhi Kumari Singh',
        qua: 'BCA (Kolkata University)'
    },

    {
        image: './images/teachers/h.jpg',
        name: 'Sunil Panday',
        qua: 'B.Tech (Delhi University)'
    },

    {
        image: './images/teachers/i.jpg',
        name: 'Sonam Singh',
        qua: 'M.Tech (Indian University)'
    },

    {
        image: './images/teachers/j.jpg',
        name: 'Manjit Singh',
        qua: 'BCA (Indian University)'
    },
    {
        image: './images/teachers/k.jpg',
        name: 'Rahul Singh',
        qua: 'MCA (Indian University)'
    },

    {
        image: './images/teachers/l.jpg',
        name: 'Sonu Kumar Singh',
        qua: 'BCA (Indian University)'
    }
]

const Teachers = ()=> {
    return (
        <div>
            <Navbar/>
            <div>
                <header style={{
                    height: 280,
                    backgroundImage: 'radial-gradient( circle farthest-corner at 48.4% 47.5%,  rgba(122,183,255,1) 0%, rgba(21,83,161,1) 90% )',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <h1 style={{
                        fontSize: 60,
                        color: 'white'
                    }}>
                        <i className="ri-presentation-line" style={{marginRight: 18}}></i>
                        Teachers
                    </h1>
                </header>

                <section style={{
                    width: '80%',
                    margin: '0 auto',
                    padding: '80px 0',
                    display: 'flex',
                    flexWrap: 'wrap',
                    columnGap: '5%',
                    rowGap: 48

                }}>
                    {
                        teachers.map(function(teacher, index) {
                            return (
                                <div style={{width: "20%"}} key={index}>
                                    <img src={teacher.image} alt="Rahul Gupta" width='100%'/>
                                    <h2 style={{padding: 0, marginBottom: 4}}>{teacher.name}</h2>
                                    <p style={{padding: 0, margin: 0, color: 'gray'}}>{teacher.qua}</p>
                                </div>
                            )
                        })
                    }
                
                </section>
            </div>
            <Footer/>
        </div>
    )
}

export default Teachers;