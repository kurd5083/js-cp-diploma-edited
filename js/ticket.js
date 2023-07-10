  value.ticket()
        let sales = JSON.parse(localStorage['sales'])
        localStorage.clear()
        console.log('Очищено')
        localStorage['sales'] = JSON.stringify(sales)

