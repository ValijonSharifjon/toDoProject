const LIST1=document.getElementById("list1")
const request1=async()=>{
    const id=window.location.href
    const ID=id.substring(35)
    const result=ID[ID.length-1]
    const response1=await fetch(`https://jsonplaceholder.typicode.com/todos/${result}`)
    const data1=await response1.json()
    const p1=document.createElement("p")
    p1.innerHTML=data1.title
    LIST1.append(p1)
    console.log(window.location)
}
request1()