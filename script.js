function agregar(valor) {
    document.getElementById('pantalla').value += valor
}

function borrar() {
    document.getElementById('pantalla').value = ''
}

function calcular() {
    const a = document.getElementById('pantalla').value
    const res = eval(a)
    document.getElementById('pantalla').value = res
}