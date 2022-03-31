const nav = document.querySelector('.navbar')
fetch('/navBar.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data
})


const head = document.querySelector('.header')
fetch('/header.html')
.then(res=>res.text())
.then(data=>{
    head.innerHTML=data
})

const arri = document.querySelector('.arrival')
fetch('/newArrival.html')
.then(res=>res.text())
.then(data=>{
    arri.innerHTML=data
})

const cat = document.querySelector('.prdCat')
fetch('/category.html')
.then(res=>res.text())
.then(data=>{
    cat.innerHTML=data
})

const prd = document.querySelector('.pProduct')
fetch('/popularProduct.html')
.then(res=>res.text())
.then(data=>{
    prd.innerHTML=data
})

const ft = document.querySelector('.ftr')
fetch('/footer.html')
.then(res=>res.text())
.then(data=>{
    ft.innerHTML=data
})



