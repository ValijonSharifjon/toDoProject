const LIST1=document.getElementById("list1")
const request1=async()=>{
    const id=window.location.href
    const ID=id.substring(35)
    const result=ID[ID.length-1]
    const response1=await fetch(`https://jsonplaceholder.typicode.com/todos/${result}`)
    const data1=await response1.json()
    const p1=document.createElement("p")
    p1.innerHTML=`id:${data1.id}`
    const p2=document.createElement("p")
    p2.innerHTML=`title:${data1.title}`
    const p3=document.createElement("p")
    p3.innerHTML=`userId:${data1.userId}`
    LIST1.append(p1,p2,p3)
    console.log(data1)
}
request1()