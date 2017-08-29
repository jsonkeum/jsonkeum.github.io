
export default class MainMenu extends React.Component {
    constructor(props){
        super(props);
        this.menuSelect = this.menuSelect.bind(this);
        this.menuDropdown = this.menuDropdown.bind(this);
        this.menuDisppear = this.menuDisappear.bind(this);
    }
    
    menuSelect(e){
        this.menuDisappear();
        let choice = e.target.id;
        this.props.onMenu(choice);
    }
    
    menuDropdown(){
        document.getElementsByClassName("collections")[0].style.display="block";
    }
    menuDisappear(){
        document.getElementsByClassName("collections")[0].style.display="none";
    }
    render(){
        return (
          <li className="dropdown" onMouseOver={this.menuDropdown} onMouseOut={this.menuDisappear}>
            <div>&lt; &#47;&gt;</div>
            <div className="collections">
                {this.props.names.map(name => <p key={name._id} id={name._id} onClick={this.menuSelect} className="coll" >{name.name}</p>)}
            </div>
          </li>
        )
    }
}
