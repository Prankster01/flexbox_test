function child_element(container, amount){

    for(let i = 0; i < amount; i++){
        const div = document.createElement("div");
        div.classList.add("box");
        div.textContent = i+1;
        container.appendChild(div);
    }
}

const con = document.querySelector(".con");

child_element(con, 16*16);

