import react from 'react';
import './Info.css';
import pic from './profile-pic.jpg';

function Info() {
    return (
        <>
            <div className="container">
                <div className="img-container">
                    <div className='set-img-style-container'>
                        <img className="set-img-style" src={pic} /></div>
                    <div className='personal-info'>
                        <div className='name'><h1>Lisa</h1></div>
                        <div className='developer'>
                            <span ><h5>Frontend Developer</h5></span>
                        </div>
                        <div><h6>jacksmith.website</h6></div>
                        <div className='btns' >
                            <button className='btn-1'><i class='fa fa-envelope'></i>  Email</button>
                            <button className='btn-2'> <i class='fa fa-linkedin'></i>  Linkedin</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Info;