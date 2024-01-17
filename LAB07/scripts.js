document.addEventListener("DOMContentLoaded", function () {
    const todoList = document.getElementById("todo-list");
    const todoInput = document.getElementById("todo-input");
    const addButton = document.getElementById("add-button");
    // อาร์เรย์ส าหรับเก็บรายการ Todo
    let todos = [];
    // เพิ่มรายการ Todo
    function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText !== "") {
    const todoItem = {
    
    text: todoText,
    completed: false,
    };
    todos.push(todoItem);
    renderTodoList();
    todoInput.value = "";
    }
    }
    // ลบรายการ Todo
    function deleteTodo(index) {
        todos.splice(index, 1);
        renderTodoList();
        }
    
    // ตรวจสอบ/ยกเลิกการเสร็จสิ้นรายการ Todo
    function toggleComplete(index) {
        todos[index].completed = !todos[index].completed;
        renderTodoList();
        }
    
    // แสดงรายการ Todo บนหน้าเว็บ
    function renderTodoList() {
    console.log(todos);
    todoList.innerHTML = "";
    for (let i = 0; i < todos.length; i++) {
    const todoItem = todos[i];
    const listItem = document.createElement("li");
    listItem.textContent = todoItem.text;
    if (todoItem.completed) {
    listItem.classList.add("completed");
    }
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "ลบ";
    deleteButton.addEventListener("click", () => deleteTodo(i));
    const completeButton = document.createElement("button");
    completeButton.textContent = todoItem.completed ? "ยกเลิก" : "เสร็จ";
    completeButton.addEventListener("click", () => toggleComplete(i));
    listItem.appendChild(completeButton);
    listItem.appendChild(deleteButton);
    todoList.appendChild(listItem);
    }
    }
    // การกดปุ่ ม "เพิ่ม"
    addButton.addEventListener("click", addTodo);
    // การกด Enter ใน input
    todoInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
    addTodo();
    }
    });
    
    // แสดงรายการ Todo คร้ังแรก
    renderTodoList();
    });


//addTodo: ในการเพิ่มรายการ Todo ใหม่ลงในอาร์เรย์ todos และเรียกใช้ renderTodoList เพื่อแสดงรายการใหม่
//deleteTodo: ในการลบรายการ Todo จากอาร์เรย์ todos ด้วย index ที่ระบุ และเรียกใช้ renderTodoList เพื่อแสดงรายการใหม่.
//toggleComplete: ในการเปลี่ยนสถานะการเสร็จสิ้นหรือยกเลิกการเสร็จสิ้นของรายการ Todo ด้วย index ที่ระบุ และเรียกใช้ renderTodoList เพื่อแสดงรายการใหม่.
//renderTodoList: ในการแสดงรายการ Todo บนหน้าเว็บ, พร้อมทั้งตรวจสอบว่ารายการไหนที่เสร็จสิ้นแล้วและเพิ่ม class "completed" ให้กับรายการนั้น. 