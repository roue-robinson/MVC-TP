
class View {
  
  constructor(){

    //creation of the main div wich will include the elements
    this.div = document.createElement('div');
    this.div.setAttribute('class', 'bottom');

    //button to disable the modification of the number
    this.disableButton = document.createElement('button');
    this.disableButton.textContent = 'disable';
    this.disableButton.id = 'disable';
    this.div.appendChild(this.disableButton);

    //button to substract 1 from the number
    this.minusButton = document.createElement('button');
    this.minusButton.textContent = '-';
    this.disableButton.id = 'minus';
    this.div.appendChild(this.minusButton);

    //button to add 1 to the number
    this.plusButton = document.createElement('button');
    this.plusButton.textContent = '+';
    this.disableButton.id = 'plus';
    this.div.appendChild(this.plusButton);

    //textefield to display and enter the number
    this.numberDisplay = document.createElement('input');
    this.numberDisplay.type = 'text';
    this.numberDisplay.id = 'number';
    this.numberDisplay.value = 5;
    this.div.appendChild(this.numberDisplay);
    
    //container for the slider
    this.sliderContainer = document.createElement('div');
    this.sliderContainer.className = 'slidecontainer';

    //slider to modify the number
    this.slider = document.createElement('input');
    this.slider.type = 'range';
    this.slider.min = '0';
    this.slider.max = '10';
    this.slider.value = '5';
    this.slider.className = 'slider';
    this.slider.id = 'myRange';

    this.sliderContainer.appendChild(this.slider);
    this.div.appendChild(this.sliderContainer);
    

    let nodeParent = document.querySelector('#outer');
    nodeParent.appendChild(this.div);
  }

  
}
