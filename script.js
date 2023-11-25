let inps = document.querySelectorAll('input')
let form = document.forms.login
form.onsubmit = (event) => {
    event.preventDefault();
    let error = false

    inps.forEach(inp => {
        if(inp.parentElement.classList.contains('error-field') || inp.value.length === 0 && inp.parentElement.classList.contains('required')) {
            error = true
            inp.parentElement.classList.add('error-field')
        }
    })


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