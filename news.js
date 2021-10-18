let news=JSON.parse(localStorage.getItem('newsDetails'))
let newsDetail=document.getElementById('newsDetail')
console.log(news)

let div=document.createElement('div')
    // div.style.border='2px solid black'
    let img=document.createElement('img')
    let div2=document.createElement('div')
    div2.id='div2'
    let h4=document.createElement('h4')
    let p=document.createElement('p')
    let p2=document.createElement('p')

    p2.textContent=news.publishedAt;
    img.src=news.urlToImage;
    h4.textContent=news.title
    p.textContent=news.description;
    div2.append(h4,p,p2)
    div.append(img,div2)
    newsDetail.append(div)