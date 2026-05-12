 let ab = document.getElementById("display")

  function pree (input){
    display.value += input;
  }

  function Cleardisplay(){
    display.value = '';
  }

   function backspace() {
      display.value = display.value.slice(0, -1);
    }
  function calculator(){
    try{
      display.value = eval(display.value)
    }
    catch{
      display.value = "error";
    }
  }