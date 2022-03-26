var toastTrigger = document.getElementsByClassName('cardbotones')
var toastLiveExample = document.getElementById('liveToast')
var submit = document.getElementById('submit')

if (submit) {
    alert("Funcionalidad no disponible")
}

if (toastTrigger[0]) {
    toastTrigger[0].addEventListener('click', function () {
        var toast = new bootstrap.Toast(toastLiveExample)
    
        toast.show()
    })
} 

if (toastTrigger[1]) {
    toastTrigger[1].addEventListener('click', function () {
        var toast = new bootstrap.Toast(toastLiveExample)
    
        toast.show()
    })
} 

if (toastTrigger[2]) {
    toastTrigger[2].addEventListener('click', function () {
        var toast = new bootstrap.Toast(toastLiveExample)
    
        toast.show()
    })
} 

if (toastTrigger[3]) {
    toastTrigger[3].addEventListener('click', function () {
        var toast = new bootstrap.Toast(toastLiveExample)
    
        toast.show()
    })
} 