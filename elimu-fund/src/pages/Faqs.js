import AfterLoginMobileNavbar from "../components/AfterLoginMobileNavbar";
import AfterLoginNavbar from "../components/AfterLoginNavbar";
import Footer from "../components/Footer";
import UniversityDashboard from "../components/UniversityDashboard";
const Faqs = () => {
    return (
        <>
        <AfterLoginNavbar />
        <div className="aboutUs">
        <div id="about-elimufund">
        <section  className="aboutUs-containers">

        <p>
                    1. <b>Question</b>: How does this fundraising platform work?<br></br>

            <b>Answer: </b>Our fundraising platform is designed to help students in need cover their school fees. 
            To get started, students or their guardians can create a campaign on our website, 
            sharing their story and fundraising goals. Supporters can then contribute funds directly to these campaigns.
            Once a campaign reaches its goal, the funds are disbursed to the student's educational institution.
            It's a transparent and efficient way to bridge the financial gap for students.
        </p>
        </section>
            <section className="aboutUs-containers">
               
                <p >
                                
                2. <b>Question</b>: Are donations tax-deductible?<br></br>

                <b>Answer</b>: Yes, donations made through our platform may be tax-deductible.

                We partner with registered nonprofit organizations to ensure that your contributions are eligible for tax deductions.
                After making a donation, you will receive a receipt that can be used for tax purposes.
                Please consult with your tax advisor or local tax laws for specific details on deductions in your region.
  </p>
            </section>

            

            <section className="aboutUs-containers">
                <p>
                                3. <b>Question</b>: How can I start a fundraising campaign for a student in need?<br></br>

                <b>Answer</b>: Starting a fundraising campaign is easy! Simply click on the "STARTELIMUFUND" button on our website and follow the step-by-step instructions. You'll need to provide some details about the student, their educational institution, and the amount you're aiming to raise. You can also share the student's story and include photos or videos to make your campaign more compelling.
                Once your campaign is live, you can share it with friends, family, and on social media to gather support.
            </p>

            </section>


            <section className="aboutUs-containers">
                <p>
                       4. <b>Question</b>: What happens if a campaign doesn't reach its fundraising goal?<br></br>

                    <b>Answer</b>: If a campaign doesn't reach its fundraising goal, 
                    the funds collected will still be disbursed to the student's educational institution.
                        Every contribution helps, and even if the goal isn't met, it can alleviate some of the financial burden for the student.
                        However, we encourage campaigners to actively promote their campaigns to maximize their chances of success. Additionally,
                        if a campaign surpasses its goal, the excess funds will also go towards supporting other students in need through our platform.
                </p>
                

            </section>

            
        
                

      

    </div>
    </div>
        <Footer />
        </>
)
     
    
}

export default Faqs;