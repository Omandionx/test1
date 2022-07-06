const form = document.querySelector('form')
const value1 = document.querySelector('#value1')
const currency1 = document.querySelector('#currency1')
const currency2 = document.querySelector('#currency2')
const result = document.querySelector('#result')

form.addEventListener('submit', e => {
    e.preventDefault()
    let waluta1 = value1.value*1*currency1.value*1
    let waluta2 = currency2.value*1
    result.innerHTML = (waluta1/waluta2).toFixed(2)
})