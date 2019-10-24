

export default class About extends React.Component {
    render(){
        return (
            <div>
                <h2 className="text-center title">
                About
                </h2>
                <div id="about-me">
                    <h3><strong>Hello!</strong>,</h3>
                    <p>These are some old projects I made several years ago while learning how to code.</p>
                    <br></br>
                    <p>Enjoy!</p>
                    <br></br>
                    <p>Feel free to <a href="https://www.linkedin.com/messaging/compose/" target="_blank">shoot me a message</a> if you'd like to connect over all things tech. Cheers!</p>
                    <br></br>
                    <p className="text-right signed">-  Jason</p>                  
                </div>
            </div>  
        )
        
    }
}