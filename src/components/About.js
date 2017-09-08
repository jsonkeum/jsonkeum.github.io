

export default class About extends React.Component {
    render(){
        return (
            <div>
                <h2 className="text-center title">
                About
                </h2>
                <div id="about-me">
                    <h3><strong>Hi</strong>,</h3>
                    <p>Formerly I worked as a lawyer in the States focusing on labour and employment litigation and e-discovery. I grew passionate about programming after gaining exposure to a wide variety of B2B applications in my career.</p>
                    <br></br>
                    <p>I am self-taught in full-stack javascript development. As a part-time student in BCIT's Applied Software Development program, I am also learning about Java application development along with object oriented programming and systems analysis. In the future I hope to learn more about data and data visualization.</p>
                    <br></br>
                    <p>Feel free to <a href="https://www.linkedin.com/messaging/compose/" target="_blank">shoot me a message</a> if you'd like to connect over all things tech. Cheers!</p>
                    <br></br>
                    <p className="text-right signed">-  Jason</p>                  
                </div>
            </div>  
        )
        
    }
}