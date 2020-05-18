// function expand(above, below) {
//     if (this.state[above] === above) {
//         return { height: "75vh", zIndex: 3 };
//     } else if (this.state[above] === below) {
//         return { height: "25vh", filter: "blur(5px)", zIndex: "2" };
//     }
//     return { height: "50vh" };
// }

function size(first, second) {
    this.setState({ [first]: first, [second]: first });
}
function leave() {
    this.setState({ top: null, bottom: null });
}

const expand=()=>{
    let top = document.querySelector('.Landing-top split')
    let bot = document.querySelector('.Landing-bottom split')
    top.addEventListener('onmouseenter',()=>{
        nav .classList.toggle('top-active')
    })
}

expand()