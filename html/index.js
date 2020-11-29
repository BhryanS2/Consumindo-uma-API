async function getContent() {
    try {
        const response = await fetch('http://localhost:8000/ ')
        //console.log(response)
        const data = await response.json()

        View(data)
    } catch (error) {
        console.log(error)
    }
}

getContent()

function View(users){

    let list = ''
    //pega dados do users
    for(let user of users){
        list += `<li> ${user.name} </li>`
    }

    document.querySelector('main').innerHTML = list
}