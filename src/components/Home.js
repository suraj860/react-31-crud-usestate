import "./home.css"

function Home(){
    return(
        <>
        <div className ="parent-div">
            <div>
                <p className="homeTitle">LEARN REACT AND BUILD YOUR FIRST APP WITH  <span className="react">REACT.APP</span></p> 
                <p className="miniSlogan">Easy to learn and understand</p>
            </div>
           
                <div className="row tools">
                    <div className="col-lg-3 ">
                        <div className="child-div">
                            <h2>React</h2>
                        </div>   
                    </div>
                    <div className="col-lg-3 ">
                        <div className="child-div">
                            <h2>Bootstarp</h2>
                        </div>
                    </div>
                    <div className="col-lg-3 ">
                        <div className="child-div">
                            <h2>Router-dom</h2>
                        </div>
                       
                    </div>
                    <div className="col-lg-3">
                        <div className="child-div">
                            <h2>Material-UI</h2>
                        </div>
                        
                    </div>
                </div>

            </div>
       
        </>
    )
}

export default Home;