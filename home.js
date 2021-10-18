let topHeadlines=document.getElementById('topHeadlines');

let timer;
async function searchNews(){
    let input=document.getElementById('news').value;
   
    let res=await fetch(`https://newsapi.org/v2/everything?q=${input}&from=2021-10-18&sortBy=popularity&apiKey=a61c996bbd7441f19f598b25e05a79f7`)
        let data=await res.json()
         console.log(data.articles)
         document.getElementById('news').value=null
         localStorage.setItem('searchDetals',JSON.stringify(data.articles))
            window.location.href='search.html';
}
    async function topstories(){
        let input =document.getElementById('news')
        let res=await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=a61c996bbd7441f19f598b25e05a79f7`)
        let data=await res.json()
         console.log(data.articles) 
         showHeadline(data.articles)
    }

  
 function showHeadline(d){
    topHeadlines.innerHTML=null;
    d.forEach(({description,title,urlToImage,publishedAt})=>{
        let div=document.createElement('div')
        div.style.border='2px solid black'
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
topstories()

async function main(){
    let input=document.getElementById('news').value;
    if(input.length<3){
        return false
    }
    let res=await searchNews()

    
}

function debouncing(f,t){
    if(timer){
        clearTimeout(timer)
    }
    timer=setTimeout(()=>{
      f()  
    },t)
}