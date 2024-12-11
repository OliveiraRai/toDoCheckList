function addTask() {
    const inputValue = document.getElementById("input").value

    const task = document.getElementById("taskContainer")
    task.innerHTML += `<div id="contentBox">
                            <div id="title">
                                <h4>${inputValue}</h4>
                            </div>
                            <div id="buttons">
                                <button onclick="deleteTask(this)"><ion-icon name="trash-outline"></ion-icon></button>
                                <input type="checkbox">
                            </div>
                        </div>`
}

function deleteTask(button) {
    const contentBox = button.closest("#contentBox"); 
    contentBox.remove()
}