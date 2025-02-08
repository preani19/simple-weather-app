let f = document.forms[0]
let h1 = document.querySelector("h1")
let inp = document.querySelector("input")


f.addEventListener("submit",(event)=> {
    event.preventDefault();
    getd(inp.value).then((response) => {
        console.log(response)
        let temp = response.current.temp_c
        let ic = response.current.condition.icon
        let cond = response.current.condition.text
        p(temp,cond,ic,inp.value)
        inp.value=""
    })
})

async function getd(inp) {
    try{
        const result = await fetch(`https://api.weatherapi.com/v1/current.json?key=1868b239ad23454d8be184230250602&q=${inp}&aqi=no`)
        const dat = result.json()
        inp=""
        return dat
    }catch (err){
        console.log(err)
    }      
}

function p(temp,cond,ic,city){
    document.querySelector(".tp").innerHTML =""
    document.querySelector(".condition").innerHTML =""
    document.querySelector(".city").innerHTML =""
    


    document.querySelector(".weather").style.display="flex"
    
    let r1 = document.createTextNode(temp+"°C")
    document.querySelector(".tp").appendChild(r1)
    
    let r2 = document.createTextNode(cond)
    document.querySelector(".condition").appendChild(r2)

    document.querySelector("img").src = ic

    let r3 = document.createTextNode(city)
    document.querySelector(".city").appendChild(r3)

}
