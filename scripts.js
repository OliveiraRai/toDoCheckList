function addTask() {
    const inputValue = document.getElementById("input").value

    const task = document.getElementById("taskContainer")
    task.innerHTML += `<div id="contentBox">
                            <div id="title">
                                <h4 id="titleText">${inputValue}</h4>
                            </div>
                            <div id="buttons">
                                <button onclick="deleteTask(this)"><ion-icon name="trash-outline"></ion-icon></button>
                                <input type="checkbox">
                            </div>
                        </div>`
    
    document.getElementById("input").value = ""
}

function deleteTask(button) {
    const contentBox = button.closest("#contentBox"); 
    contentBox.remove()
}

