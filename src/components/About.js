

export default class About extends React.Component {
    render(){
        return (
            <div>
                <h2 className="text-center title">
                About
                </h2>
                <div id="about-me">
                    <h3><strong>Hi</strong>,</h3>
                    <p>I am an aspiring full stack developer currently residing in Vancouver. Just a few years back I was working as a trial lawyer in New York, where I represented clients in labour and employment matters. Practicing law was a rewarding gig, and I got to use cool phrases like <em>double jeopardy</em> and <em>beyond a reasonable doubt</em>. <strong>*</strong> </p>
                    <br></br>
                    <p>My goal is to get involved in developing solutions that combine law and technology. I have the law part down and am now working on the technology side. Although I’ve taken some college courses on algorithms, systems analysis and OOP, most of what I know is self-taught.</p>
                    <br></br>
                    <p>This page was built using Node.js with React components made browser-friendly using Gulp, and features some of the projects I’ve built so far. Enjoy, and shoot me a message on Linkedin if you’d like to chat.</p>
                    <br></br>
                    <p className="text-right signed">-Jason</p>
                    <p id="postscript"><strong>*</strong> I was not a criminal lawyer so I guess I never actually used those phrases, but they’re still fun to think about.</p>
                    
                </div>
            </div>  
        )
        
    }
}