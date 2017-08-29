
var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;
var Label = ReactBootstrap.Label;
const months = ["January", "February", "March", "April",
                "May", "June", "July", "August",
                "September", "Octoboer", "November", "December"]

export default class ProjectCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showModal:false
        }
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
    }
    
    open(){
        this.setState({ showModal:true })
    }
    
    close(){
        this.setState({ showModal:false })
    }
    
    render(){
        let project = this.props.project;
        return(
            <div className="col-xs-12 col-sm-6 col-md-4">
                <div onClick={this.open} className="card" style={{backgroundImage:"url(./src/assets/images/"+ project.image +")"}} >
                    <div>
                        <h2 className="projTitle">{project.name}</h2>
                    </div>
                </div>
                <div>
                <Modal show={this.state.showModal} onHide={this.close} dialogClassName="custom-modal">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-9">
                            <img className="img-responsive coverphoto" src={"./src/assets/images/" + project.image } />
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-3">
                            <div className="captionTitle">
                                <h3><strong>{project.name}</strong></h3>
                            </div>
                            <div className="row tags">
                                <div className="col-xs-6 col-sm-12 col-md-12">
                                    {project.tags.map(function(tag){
                                        return <Label key={tag}>{tag}</Label>;
                                    })}
                                </div>
                                <div className="col-xs-6 col-sm-12 col-md-12 row">
                                    <div>
                                        <p className="text-right date">- { months[project.date.getMonth()] + " " + project.date.getDate() + ", " + project.date.getFullYear()}</p>
                                    </div>
                                    <div className="description">
                                        {project.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Modal.Footer>
                        <div className="btnTray" style={{textAlign:"center"}}>
                            <Button bsSize="large" href={project.link} target="_blank" bsStyle="success">Visit</Button>
                            <Button bsSize="large" href={project.source} target="_blank" bsStyle="warning">Source</Button>
                            <Button bsSize="large" onClick={this.close}>Close</Button>
                        </div>
                    </Modal.Footer>
                </Modal>
                </div>
            </div>
        )
    }
}