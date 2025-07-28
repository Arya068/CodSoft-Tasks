 const count = document.querySelector('.count')
 const minusBtn = document.querySelector('.minusBtn')
 const plusBtn = document.querySelector('.plusBtn')
 const changeBy = document.querySelector('.changeBy')
 const resetBtn = document.querySelector('.resetBtn')
 

 minusBtn.addEventListener('click', () => {
    const countValue = parseInt(count.innerText)
    const changeByValue = parseInt(changeBy.value)
    count.innerText = countValue - changeByValue
 })

 plusBtn.addEventListener('click', () => {
    const countValue = parseInt(count.innerText)
    const changeByValue = parseInt(changeBy.value)
    count.innerText = countValue + changeByValue
}) 

 resetBtn.addEventListener('click', () => {
    count.innerText = 0
})
