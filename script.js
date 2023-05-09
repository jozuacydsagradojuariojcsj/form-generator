

const insert = () => {
    let type = document.querySelector('#type').value 
    let label = document.querySelector('#label').value 

    switch(type){
        case 'text': appendText(label)
            break
        case 'button': appendButton(label)
            break
        case 'radio': appendRadio(label)
            break
        case 'checkbox': appendCheckbox(label)
            break
    }
}



const appendText = (label = "No label") => {
    let el = document.createElement('input')

    el.setAttribute('type', 'text')
    el.setAttribute('class', 'form-control mt-2')
    el.setAttribute('placeholder', label)

    document.querySelector('#display').append(el)
    
}

const appendButton = (label = "No label") => {
    let el = document.createElement('button')

    el.setAttribute('type', 'text')
    el.setAttribute('class', 'btn btn-primary mt-2') 
    el.textContent = label

    document.querySelector('#display').append(el)
}

const appendRadio = (label = "No Label") => {
    let el = document.createElement('input')

    el.setAttribute('type','radio')
    el.setAttribute('name','radio-group')
    el.setAttribute('id','label')
    el.setAttribute('class','form-check-input')
    el.textContent = label

    

    let container = document.createElement('div')
    container.setAttribute('class', 'form-check mt-2')
    container.append(el, label)

    document.querySelector('#display').append(container)
}

const appendCheckbox= (label="No Label") => {
    let el = document.createElement('input')

    el.setAttribute('type','checkbox')
    el.setAttribute('id',label)
    el.setAttribute('class','form-check-input')
    el.textContent = label

    let container = document.createElement('div')
    container.setAttribute('class', 'form-check mt-2')
    container.append(el, label)
   

    document.querySelector('#display').append(container)
}

function question(){
    let questionContainer = document.createElement('div')
    let question1 = document.createElement('text')
    question1.textContent="Hello World"
    questionContainer.setAttribute('id','questionbox')
    questionContainer.setAttribute('class','d-flex flex-column container px-4 py-3 boxes bg-black rounded mt-3  ' )
    document.querySelector('#display').append(questionContainer)

}
const removeElements = () => {
    let insertedElement = document.querySelector('#display > *:last-child');
    if (insertedElement) {
      insertedElement.remove();
    }
  }