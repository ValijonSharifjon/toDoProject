const BTN = document.getElementById("btn")
const LIST = document.getElementById("list")


const request =async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/")
        const data = await response.json()
        const fragment = document.createDocumentFragment()
        
        data.forEach(element => {
            const check=document.createElement("input")
            check.type="checkbox"
            check.className="form-check-input check"
            if (element.completed==true){
                check.checked=true
            }
            const p = document.createElement("p")
            p.innerHTML = `<a href="todo.html?id=${element.id}">${element.id} ${element.title}</a><hr>`
            p.className="p"
            const DIV=document.createElement("div")
            DIV.className="box"
            DIV.append(check)
            DIV.append(p)
            fragment.append(DIV)
}
        );
        LIST.append(fragment)
    } 
    
BTN.addEventListener("click", request)


