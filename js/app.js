console.log('connected!');

	const addToInput = document.querySelector('#addTo');
	const toDo = document.querySelector('.slt-to-do');
	const doing = document.querySelector('.slt-doing');
	const done = document.querySelector('.slt-done');
	const addPara = document.querySelectorAll('#add');
	const input = document.querySelector('.formulario-background');
	const inputField = document.querySelector('.addNote');
	const formAddBtn = document.querySelector('.add');
	const addedToToDo = [];
	const addedToDoing = [];
	const addedToDone = [];


//FUNCTION FOR THE TO DO COLUMN
function toDoFunction(){
	addPara[0].addEventListener('click', () =>{
		addToInput.setAttribute("value", toDo.className);
		input.style.display = 'block';
	});
}
toDoFunction();


function doingFunction(){
	addPara[1].addEventListener('click', () =>{
		addToInput.setAttribute("value", doing.className);
		input.style.display = 'block';
	});
}
doingFunction();

function doneFunction(){
	addPara[2].addEventListener('click', () =>{
		addToInput.setAttribute("value", done.className);
		input.style.display = 'block';
	});
}
doneFunction();

formAddBtn.addEventListener('click', () =>{
	const selectedInput = addToInput.value;
	let arrayToValidate = null;
	let listToCheck = null;

	if(selectedInput.includes("slt-to-do")) {
		arrayToValidate = addedToToDo;
		listToCheck = toDo;
	} else if(selectedInput.includes("slt-doing")) {
		arrayToValidate = addedToDoing;	
		listToCheck = doing;
	} else if(selectedInput.includes("slt-done")){
		arrayToValidate = addedToDone;	
		listToCheck = done;
	} else {
		alert('O input de insercao não existe');
	}

	if(inputField.value.length == 0){
		alert('Impossivel adicionar tarefa vazia');
		arrayToValidate = null;
	}else if(arrayToValidate.includes(inputField.value)){
		alert('Item existente');
		arrayToValidate = null;
	}else{
		alert('Tarefa adicionada!');
		arrayToValidate.push(inputField.value);
		listToCheck.innerHTML += addNewCard(inputField.value);	
	}
	inputField.value = "";
	console.log(arrayToValidate);
});

const fechar = document.getElementById('fecharJanela');
fechar.addEventListener('click', () =>{
	input.style.display = 'none';
	inputField.value = "";
	addToInput.value = null;
});

function addNewCard(value) {
	return `<div class="card">
			<p>${value} <img src="icons/delete.png" id="delete"></p>
		</div>`
	;
}

/*let see = document.querySelectorAll('card')[0] = localStorage.Todo;
console.log(see);

const saveData = function(){
	let slt_to_do = addedToToDo;
	let slt_doing = addedToDoing;
	let slt_done = addedToDone;
	localStorage.setItem("Todo", slt_to_do);
	localStorage.setItem("Doing", slt_doing);
	localStorage.setItem("Done", slt_done);
	console.log(slt_to_do);
}
document.onchange = saveData;
*/
//=============================================================================
//=============================================================================
