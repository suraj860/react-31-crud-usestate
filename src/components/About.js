function About(){
    return(
        <>
        <div className = "container-fluid about-container">
            <div className="row">
                <div className="col-lg-6 col-md-12 profile-div" >
                    <h1> <img className="profile" src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg" alt="d"/>
                     Suraj Patil</h1>
                     <div className ="allinfo">
                    <p className ="data"><span> Qualification : </span> B.E. Mechanical Engineering , Shivaji University.</p>
                    <p className ="data"><span>Skills:</span> </p>
                    <img className="skill1" src="https://firebearstudio.com/blog/wp-content/uploads/2015/03/HTML-CSS-and-JavaScript.png" alt="k"/><br/>
                    <img className="skill2" src="https://www.mindinventory.com/blog/wp-content/uploads/2021/06/mern-stack.png" alt="e"/>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 imgdiv">
                    <img style={{width:"100%" , height:"470px" , textAlign:"center"}}  src="https://www.contract-jobs.com/blog/wp-content/uploads/2021/01/19362653-scaled.jpg" alt="v" />
                </div>
            </div>
        </div>
        </>
    )
}

export default About;