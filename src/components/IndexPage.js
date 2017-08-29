
import MainPage from "./MainPage.js";
import MainMenu from "./MainMenu.js";
import Bio from "./Bio.js"
const projects = require("../assets/projects.js");

export default class IndexPage extends React.Component {
    constructor(props){
        super(props);
        let name = projects.map(function(collection){
            return {
                _id: collection.id,
                name: collection.collectionName
                   };
        })
        this.state = {
            about: true,
            collection: {},
            collectionNames: name
        };
        this.handleAbout = this.handleAbout.bind(this);
        this.handleMenu = this.handleMenu.bind(this);
    }

    handleAbout(){
        if(!this.state.about){
            this.setState({
              about : true
            });
        }
    }

    handleMenu(choice){
        if(this.state.collection.id != choice){
            let selection = projects.filter(function(coll){
                return coll.id == choice;
            });
            this.setState({
                about : false,
                collection : selection[0]
            });
        } else {
            this.setState({
                about : false,
            });
        }
    }

    render() {
        return (
          <div id="wrapper" className="container">
            <div id="navbar">
              <h1 id="name">Jason Keum</h1>
              <nav>
                <ul>
                  <li onClick={this.handleAbout}>About</li>
                  <MainMenu onMenu={this.handleMenu} names={this.state.collectionNames}/>
                </ul>
              </nav>
            </div>
            <div className="row">
              <Bio />
              <div id="main" className="col-xs-12 col-sm-9 col-sm-offset-1 col-md-9 col-md-offset-1">
                <MainPage about={this.state.about} coll={this.state.collection}/>
              </div>
            </div>
            <footer>
                <p className="text-center">&copy; 2017 by Jason Keum; Linkedin/Github icons by Freepik/Dave Gandy</p>   
            </footer>
          </div>
        )
    }
}
