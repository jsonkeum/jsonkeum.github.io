

export default class Bio extends React.Component {
    render() {
        return(
            <div id="bio" className="col-xs-12 col-sm-2 col-md-2 row">
                <div className="col-xs-3 col-sm-12 col-md-12">
                    <img src="./src/assets/images/me.jpg" className="img-responsive img-rounded img-thumbnail biopic" />
                    <div style={{textAlign:"center"}}></div>
                </div>
                <div className="col-xs-9 col-sm-12 col-md-12 masthead">
                    <div className="col-xs-8 col-sm-12 col-md-12 signature">
                        <div><strong>@quanchifootball</strong></div>
                        <div><em><strong>Full Stack Portfolio</strong></em></div>
                        <div>
                            <div><i className="fa fa-graduation-cap" aria-hidden="true"></i><span style={{color:"#003c79"}}> BCIT</span></div>
                            <div><i className="fa fa-graduation-cap" aria-hidden="true"></i><span style={{color:"#740303"}}> Boston University School of Law</span></div>
                            <div>
                            <i className="fa fa-graduation-cap" aria-hidden="true"></i><span style={{color:"#003c79"}}> Qu</span><span style={{color:"#a3a300"}}>ee</span><span style={{color:"#740303"}}>n's</span>
                            </div>
                        </div>
                        <div><em>Vancouver, BC</em></div>
                    </div>
                    <div className="col-xs-4 col-sm-12 col-md-12 icons">
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 col-md-6">
                                <a href="https://github.com/quanchifootball" target="_blank"><img src="./src/assets/images/github.png" className="img-responsive" /></a>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-6">
                                <a href="https://linkedin.com/in/jasonkeum" target="_blank"><img src="./src/assets/images/linkedin.png" className="img-responsive" /></a>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
        )
    }
}