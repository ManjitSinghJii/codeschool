
import Navbar from "./Navbar";
import Footer from "./Footer";


const Holidays = ()=> {
    const holidays = [
        {
            title: 'Summer Vacation 2024',
            duration: '1 Months',
            data: '01-06-2024'
        },
        {
            title: 'Summer Vacation 2023',
            duration: '2 Months',
            data: '20-50-2023'
        },
        {
            title: 'Summer Vacation 2022',
            duration: '1.5 Months',
            data: '10-05-2022'
        },
        {
            title: 'Winter Vacation 2024',
            duration: '2.5 Months',
            data: '10-11-2023'
        },
        {
            title: 'Winter Vacation 2023',
            duration: '1 Months',
            data: '10-10-2024'
        }
    ]
    return (
        <div>
            <Navbar/>
            <div style={{
                width: '60%',
                margin: '0 auto',
                padding: '64px 0'
            }}>
                <h1 style={{
                    textAlign: 'center'
                }}>Your Holiday`s</h1>

                <table style={{width: '100%'}}>
                    <thead>
                        <tr style={{
                            background: '#ddd'
                        }}>
                            <th style={{padding: 14}}>S/No.</th>
                            <th>Title</th>
                            <th>Duration</th>
                            <th>Date</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            holidays.map((item,index)=>(
                                <tr style={{
                                    textAlign: 'center'
                                }}>
                                    <td style={{padding: 14, borderBottom: '1px solid #ccc'}}>{index+1}</td>
                                    <td style={{padding: 14, borderBottom: '1px solid #ccc'}}>{item.title}</td>
                                    <td style={{padding: 14, borderBottom: '1px solid #ccc'}}>{item.duration}</td>
                                    <td style={{padding: 14, borderBottom: '1px solid #ccc'}}>{item.data}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <Footer/>
        </div>
    )
}

export default Holidays;
