
const Head=()=>{
    console.log('checking code');
    console.warn('warning code');
    const heading =React.createElement('div',{id:"parent"},'I am Main Tag');
    return heading;
}


// console.log(heading,'heading');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(Head);