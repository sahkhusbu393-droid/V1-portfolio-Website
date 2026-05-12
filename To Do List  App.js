function add(){
		const  taskInput = document.getElementById("taskInput");
		const taskText = taskInput.value.trim();

		if(taskText === "") return;

		const li = document.createElement("li")
		li.innerHTML = `
		<span onclick="toggledone(this)">${taskText}</span>
		<button class="db" onclick="deletebtn(this)">X</button>
		`
		document.getElementById("list").appendChild(li);
		taskInput.value = "";

		
	}
	function toggledone(element){
			element.parentElement.classList.toggle("done");
		}
		function deletebtn (button){
			button.parentElement.remove();
		}