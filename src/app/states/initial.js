export default function () {
    return {
        tabs: [
            {
                name: 'Транзакции',
                value: 'transactions'
            },
            {
                name: 'Проекты',
                value: 'projects'
            },
            {
                name: 'Платежные системы',
                value: 'payments'
            }
        ],
        content: 'transactions',
        transactions: [],
        tableHeader: [],
        tableData: [],
        projects: [],
        rating: []
    }
}