import logo2 from '../../Footer/LogoFoot.svg';

export default function NotFound(){
    return(
        <>
            <header className="row">         
                <div className="col  bg-dark " style={{height:'30px'}}></div>
            </header> 
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex align-items-center justify-content-center">
                        <h1>Not Found</h1>
                    </div>
                </div>
            </div>
            <footer>
                <div className="row">
                    <div className="col colorFoot">
                        <div className="container" >  
                            <div className="row align-items-center justify-content-center pt-3 pb-3 " >
                                <div className="col-6 d-flex justify-content-end">
                                    <a href="/"><img src={logo2} alt="/" /></a>
                                </div>
                                <div className="col-6 font d-flex justify-content-start ">Вдохновение за мгновение<span style={{color:'black'}}>...</span>.</div>
                                    
                            </div>       
                        </div>
                    </div>
                </div>
                    <div className="row">         
                        <div className="col " style={{height:'30px', backgroundColor:'rgba(161, 68, 59, 1)'}}></div>
                    </div>
            </footer>
        </>
    );
}