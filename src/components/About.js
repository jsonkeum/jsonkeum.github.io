

export default class About extends React.Component {
    render(){
        return (
            <div>
                <h2 className="text-center title">
                About
                </h2>
                <div id="about-me">
                    <h3><strong>Hi</strong>,</h3>
                    <p>I am a detail oriented problem solver with American legal experience and a new full-stack web developer seeking an entry level role with a B2B or B2C tech startup. As a long time power user of a variety of business applications, I am interested in developing practical solutions that strongly consider the needs of the end user. No unnecessary bells and whistles, just less time wasted at the office.</p>
                    <br></br>
                    <p>I started programming in May 2016 knowing absolutely zero about development. Through initiative and disciplined self-learning I can now build and deploy MERN-stack single page apps from scratch!</p>
                    <br></br>
                    <p>Although I’ve taken some college courses on algorithms, systems analysis and OOP (Java), most of what I know is self-taught. This page was built using Node.js with React components made browser-friendly using Gulp, and features some of the projects I’ve built so far. Enjoy, and shoot me a message on Linkedin if you’d like to chat.</p>
                    <br></br>
                    <p className="text-right signed">-Jason</p>                  
                </div>
            </div>  
        )
        
    }
}