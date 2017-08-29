
import ProjectCard from './ProjectCard.js';
import About from "./About.js";


export default class MainPage extends React.Component {
    render(){
        if(this.props.about){
            return <About />
        } else {
            return (
              <div>
                <h2 className="text-center title">{this.props.coll.collectionName}</h2>
                <div className="row">
                    {this.props.coll.collection.map(function(project){
                        return <ProjectCard key={project.id} project={project} />
                    })}
                </div>
              </div>
            )
        }
    }
}
