

export default class About extends React.Component {
    render(){
        return (
            <div>
                <h2 className="text-center title">
                About
                </h2>
                <div id="about-me">
                    <h3><strong>Hi</strong>,</h3>
                    <p>I am a detail oriented problem solver and a new full-stack web developer seeking a growing role with a B2B or B2C tech startup. Formerly I worked as lawyer in New York focusing on labour and employment litigation and e-discovery. As a long time power user of a variety of business applications, I am interested in developing practical solutions that strongly consider the needs of the end user.</p>
                    <br></br>
                    <p>I started programming in May 2016 knowing absolutely zero about development. Through initiative and disciplined self-learning (and patience) I can now build and deploy MERN-stack single page apps from scratch! I’ve taken some college courses on algorithms, systems analysis and OOP (Java), but most of what I know is self-taught. While I still have much more to learn, I am enjoying every minute of the journey.</p>
                    <br></br>
                    <p>Feel free to <a href="https://www.linkedin.com/messaging/compose/" target="_blank">shoot me a message</a> if you'd like to connect over all things tech. Cheers!</p>
                    <br></br>
                    <p className="text-right signed">-  Jason</p>                  
                </div>
            </div>  
        )
        
    }
}