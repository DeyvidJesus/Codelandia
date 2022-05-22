const div = document.getElementsByClassName('card-block')
let div1 = div[0]
let div2 = div[1]
let div3 = div[2]
const date = document.getElementsByClassName('date')
let date1 = date[0]
let date2 = date[1]
let date3 = date[2]

function mudarIcone(codigo){
    let icone = document.getElementsByClassName('icone')[codigo]

    if (icone.value == '&#9873'){
      icone.innerHTML = '&#9872'
    } else {
      icone.innerHTML = '&#9873'
    }
  }

date.innerHTML = ""
div.innerHTML = ""

let ajax = new XMLHttpRequest()

ajax.open('GET', 'https://newsapi.org/v2/top-headlines?country=br&apiKey=03f37961b6ed4461805af8114a2bc3b0')

ajax.send()

ajax.onreadystatechange = function(){

    let h5_1 = document.createElement('h5')
    let paragrafo_1 = document.createElement('p')

    let titulo1 = ""
    let texto1 = ""
    let data1 = ""

    if(ajax.readyState === 4){
        if(ajax.status === 200){
            articles = JSON.parse(ajax.responseText)

            if(articles["articles"][0].title !== null){

                titulo1 = document.createTextNode(articles["articles"][0].title)

                h5_1.appendChild(titulo1)
            }

            if(articles["articles"][0].description !== null){

              texto1 = document.createTextNode(articles["articles"][0].description)

              paragrafo_1.appendChild(texto1)
            }

            if(articles["articles"][0].publishedAt !== null){

              data1 = document.createTextNode(articles["articles"][0].publishedAt)
            }

            div1.appendChild(h5_1)
            div1.appendChild(paragrafo_1)
            date1.appendChild(data1)
        }

        let h5_2 = document.createElement('h5')
        let paragrafo_2 = document.createElement('p')

        let titulo2 = ""
        let texto2 = ""
        let data2 = ""

        if(articles["articles"][1].title !== null){

          titulo2 = document.createTextNode(articles["articles"][1].title)

          h5_2.appendChild(titulo2)
        }

        if(articles["articles"][1].description !== null){

          texto2 = document.createTextNode(articles["articles"][1].description)

          paragrafo_2.appendChild(texto2)
        }

        if(articles["articles"][1].publishedAt !== null){

          data2 = document.createTextNode(articles["articles"][1].publishedAt)
        }

        div2.appendChild(h5_2)
        div2.appendChild(paragrafo_2)
        date2.appendChild(data2)
      }

        let h5_3 = document.createElement('h5')
        let paragrafo_3 = document.createElement('p')

        let titulo3 = ""
        let texto3 = ""
        let data3 = ""

        if(articles["articles"][2].title !== null){

          titulo3 = document.createTextNode(articles["articles"][2].title)

          h5_3.appendChild(titulo3)
        }

        if(articles["articles"][2].description !== null){

          texto3 = document.createTextNode(articles["articles"][2].description)

          paragrafo_3.appendChild(texto3)
        }

        if(articles["articles"][2].publishedAt !== null){

          data3 = document.createTextNode(articles["articles"][2].publishedAt)
        }

        div3.appendChild(h5_3)
        div3.appendChild(paragrafo_3)
        date3.appendChild(data3)
    }
