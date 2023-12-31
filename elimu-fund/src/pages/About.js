import '../App.css';
import AfterLoginNavbar from '../components/AfterLoginNavbar';
import Footer from '../components/Footer';

const About = () => {
    return(
        <>
        <AfterLoginNavbar />
        <div className="aboutUs">
            <div id="about-elimufund">
            <section  className="aboutUs-containers">
            <h1>About Us<br></br>  ElimuFund - Transforming Lives Through Education</h1>

            <p>
                            At ElimuFund, we are on a mission to redefine the educational 
                        landscape in Tanzania by removing financial obstacles that hinder 
                        university and college students from pursuing their dreams.
                        We are a digital fundraising platform that firmly believes 
                        education should be accessible to all, regardless of economic
                        constraints.
            </p>
            </section>
                <section className="aboutUs-containers">
                    <h3>Our Mission</h3>
                    <p >
                        Our mission is unwavering: to empower Tanzanian students to break free
                        from financial barriers and access higher education.
                        We are dedicated to making dreams a reality through the power of education.
                        </p>
                        {/* <img  id="mission" src='./vision.jpg'/> */}
                </section>

                

                <section className="aboutUs-containers">
                    <h3>Our Difference</h3>
                    <p>
                    ElimuFund is more than just a fundraising platform;
                    it's a force for changeThrough our digital
                    platform, we connect compassionate donors with deserving students,
                    fostering a community of empowerment, resilience, and success.
                </p>

                </section>


                <section className="aboutUs-containers">
                <h3>Why We Exist</h3>
                    <p>
                    In Tanzania, countless talented students face the harsh reality of halted academic journeys due to economic hardships.<br></br>
                    ElimuFund emerged in response to this pressing issue, aiming to provide hope, support,<br></br>
                    and opportunities for these resilient individuals.
                    </p>
                    <ol>
                        <li>
                            <h3>Student Profiles:</h3> 
                                <p>Our platform showcases the stories and aspirations of determined students 
                                    who are grappling with financial challenges.Each student profile serves as a window into their dreams, 
                                     ambitions, and educational pursuits.
                                </p>
                        </li>

                        <li> 
                            <h3>Donor Engagement:</h3> 
                                <p>We extend an invitation to individuals, organizations, and philanthropists
                                    to partner with us in turning these dreams into reality. Donors can explore student profiles,
                                    choose a cause close to their hearts, 
                                    and directly impact a student's educational journey.
                                </p>
                        </li>

                        <li>
                            <h3>Transparency and Accountability:</h3>
                                We uphold the values of transparency and accountability in our operations.
                                Donors can easily track the progress of their
                                contributions and witness the tangible impact they are creating.
                        </li>
                    </ol>

                </section>

                
            
                    

          

        </div>
        </div>
        <Footer/>
        </>
    ) 
}

export default About;