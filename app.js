document.getElementById(`btn`).addEventListener(`click`, buttonOnClick)

let number = `latest`;

function buttonOnClick(){
    let container = document.getElementById(`container`);
    container.innerHTML = '<h1>LOADING...</h1>'
    let url = 'https://xkcd.vercel.app/?comic='
    if (!(number === `latest`)){
        number = Math.floor(Math.random() * (number-1) + 1)
        
    }else if (number === 0){
        let number = 'latest'
    }
    axios.request({
        methods: `get`,  
        url: url + number,  
    }).then(successFunction).catch(failureFunction);
}

function successFunction(request){
    console.log(request)
    number = request.data.num

    let container = document.getElementById(`container`);
    container.innerHTML = ''
    container.insertAdjacentHTML(`beforeend`, `
    <h1>${request.data.safe_title}</h1>
    <img src="${request.data.img}">
    `)
}

function failureFunction(error){
    console.log(`error: `, error)
}