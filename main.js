let residentsBtn = document.querySelector('#residentsBtn')

const clickButton = () => {
    console.log('button clicked')
    axios.get('https://swapi.dev/api/planets/?search=alderaan')
    .then(res => {
        let residents = (res.data.results[0].residents)
        for (i = 0; i < residents.length; i++){
            axios.get(residents[i]).then(res => {
                console.log(res.data.name)
                let newRes = document.createElement("h2")
                newRes.innerHTML = res.data.name
                document.body.appendChild(newRes)
            })
        }
    })
}
residentsBtn.addEventListener('click', clickButton)
