let inps = document.querySelectorAll('input')
let form = document.forms.login
let h1 = document.querySelector('.error_counter')
let h2 = document.querySelector('.succes_counter')
form.onsubmit = (event) => {
    event.preventDefault();
    let error = false
    let error_counter = 0
    let succes_counter = 0
    inps.forEach(inp => {
        let span_error = inp.nextElementSibling
        if(inp.parentElement.classList.contains('error-field') || inp.value.length === 0 && inp.parentElement.classList.contains('required')) {
            span_error.innerHTML = `Need to fill ${inp.name} field!`
            error_counter++
            inp.parentElement.classList.add('error-field')
        } else {
            span_error.innerHTML = ""
            succes_counter++
        }
    })
    
    h1.innerHTML = `Error: ${error_counter}/7`
    h2.innerHTML = `Succes: ${succes_counter}/12`
    if(error) {
        alert('Error')
    } else {
        submit()
    }
    
}

  
function submit() {
    let user = {}

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    })

    console.log(user);
}

let patterns = {
    name: /^[a-z ,.'-]+$/i,
    surname: /^[a-z ,.'-]+$/i,
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ig,
    phone: /^\+998([- ])?(90|91|93|94|95|98|99|33|97|71)([- ])?(\d{3})([- ])?(\d{2})([- ])?(\d{2})$/g,
    age: /^\d{1,2}|100$/,
    
}


inps.forEach(inp => {
    inp.onkeyup = () => {
        console.log(patterns[inp.name].test(inp.value));
        if (patterns[inp.name].test(inp.value)) {
            inp.parentElement.classList.remove('error-field')
        } else {
            inp.parentElement.classList.add('error-field')
        }
    }
})

