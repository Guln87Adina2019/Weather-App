let container = document.querySelector('.container')
let btn = document.getElementById('search-btn')



window.addEventListener('load',async function(){
    try{
        let response = await this.fetch(`https://api.openweathermap.org/data/2.5/weather?q=Dubai&appid=e3ad77404dc88bee59f4a50942c3dbc6&units=metric`)
        if(!response.ok){
            throw new Error("new error")
        }

        let data = await response.json()

        console.log(data);

        let div = document.createElement('div')
        div.className="box1"

        let date = new Date()
        // this.alert(date)
        let day = date.getDate()
        let month = date.getMonth()+1

        switch(month){
            case 1: 
              month = "Jan"
              break;
            case 2:
              month = "Feb"
              break;
            case 3:
              month = "March"
              break;
            case 4:
              month = "Apr"
              break;
            case 5:
              month = "May"
              break;
            case 6:
              month = "June"
             break;
            case 7:
               month = "July"
               break;
            case 8:
                month = "Aug"
                break;
            case 9:
                month = "Sep"
                break;
            case 10:
                month = "Oct"
                break;
            case 11:
                month = "Nov"
                break;
            case 12:
                month = "Dec"
                break;
        }

        div.innerHTML= `
                <div class="box1_A">
                <p>${day} ${month}</p>
               </div>
               <div class="box1_B">
                    <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="" width="30px">
               </div>`
        let div2 = document.createElement('div')
        div2.className = "box2"

        div2.innerHTML= `<p>Weather: ${data.weather[0].description}</p>`

        let div3 = document.createElement('div')
        div3.className = 'box3'

        div3.innerHTML = `
            <div class="box3_A">
                    <p>Humidity</p>
                    <p>${data.main.humidity}%</p>
                </div>
                <div class="box3_B">
                    <p>City</p>
                    <p>${data.name}</p>
                </div>
                <div class="box3_C">
                    <p>Pressure</p>
                    <p>${data.main.pressure}</p>
                </div>
                <div class="box3_D">
                    <p>Ветер</p>
                    <p>${data.wind.speed} m/s</p>
                </div>
            `
        container.appendChild(div)

        container.appendChild(div2)
        
        container.appendChild(div3)
    }catch(err){
        console.error(err);
    }
})

btn.addEventListener('click',(e)=>{
    e.preventDefault()

    let input = document.getElementById('input').value
    console.log(input);
    if(input){
        sessionStorage.setItem('',JSON.stringify(input))
        return window
        

    }else{
        alert('Қаланың атын енгізіңіз!')
    }
})