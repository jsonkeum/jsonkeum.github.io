import IndexPage from './components/IndexPage.js';

ReactDOM.render(
 <IndexPage />,
 document.getElementById('app')
);

function fadeIn(){
    document.getElementById("welcome").style.opacity = 1;
    document.getElementById("welcome").style.marginTop = "120px";
}

window.onload = fadeIn;