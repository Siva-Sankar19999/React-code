
const Head=()=>{
    const heading =React.createElement('div',{id:"parent"},'I am Main Tag');
    return heading;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(Head);