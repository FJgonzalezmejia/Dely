function loadSalesHistory() {
    const salesHistory = JSON.parse(localStorage.getItem('salesHistory')) || [];
    const historyTable = document.getElementById('sales-history').querySelector('tbody');
    historyTable.innerHTML = '';

    salesHistory.forEach(sale => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${sale.date}</td>
            <td>${sale.time}</td>
            <td>${sale.details}</td>
            <td>Q${sale.total}</td>
        `;
        historyTable.appendChild(row);
    });
}

loadSalesHistory();
