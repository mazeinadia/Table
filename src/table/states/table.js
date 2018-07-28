import data from '../../data/data.json';

export default function (state) {
    return {
        ...state,
        transactions: data,
        tableHeader: ['Проект', 'Метод платежа', 'Имя пользователя'],
        tableData: data.map(item => {
            return [
                item.transaction.project.name,
                item.transaction.payment_method.name,
                item.user.name
            ]
        })
    }
}