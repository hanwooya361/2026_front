const table = document.querySelector('#table')
function 등록함수( ){
    const date = document.querySelector('#date').value
    const list = document.querySelector('#list').value
    const price = Number(document.querySelector('#price').value)
    
    table.innerHTML += `
        <tr>
            <td>${date}</td>
            <td>${list}</td>
            <td>${price.toLocaleString()}</td>
        </tr>
    `;
}
