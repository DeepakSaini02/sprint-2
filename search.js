let searchDetals=JSON.parse(localStorage.getItem('searchDetals'))
let topHeadlines=document.getElementById('topHeadlines');
function showHeadline(d){
topHeadlines.innerHTML=null;
d.forEach(({description,title,urlToImage,publishedAt})=>{
    let div=document.createElement('div')
    // div.style.border='2px solid black'
    let img=document.createElement('img')
    let h4=document.createElement('h4')
    let p=document.createElement('p')

    img.src=urlToImage;
    h4.textContent=title
    p.textContent=description;

    div.append(h4,p,img)
    topHeadlines.append(div)
    div.onclick=function(){
        localStorage.setItem('newsDetails',JSON.stringify({description,title,urlToImage,publishedAt}))
        window.location.href='news.html';
    }
})


} 
showHeadline(searchDetals)