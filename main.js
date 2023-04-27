const nombre = document.getElementById('name')
const apellido = document.getElementById('last-name')
const cc = document.getElementById('id')
const fecha = document.getElementById('date')
const enviar = document.getElementById('enviar')
const tbody = document.getElementById('cuerpoTabla')
class Persona{
    constructor(nombre,apellido,cc,fecha){
        this.nombre = nombre
        this.apellido = apellido
        this.cc = cc
        this.fecha = fecha
    }
}
let Personas = []
enviar.addEventListener('click',(evento)=>{
    evento.preventDefault()
    const datos = new Persona(nombre.value, apellido.value, cc.value, fecha.value,) 
    Personas.push(datos)
    console.log(Personas)
    Personas.forEach(item=>{
        tbody.innerHTML+= `${nombre.value}`
    })
    })