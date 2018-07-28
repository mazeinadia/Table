export default function (state, filter) {
    return {
        ...state,
        tableData: state.transactions.filter(item => {
            let result = true;
            filter.split(' ').map(filterWord => {
                if (item.transaction.project.name.toLowerCase().indexOf(filterWord.toLowerCase()) === -1) {
                    result = false
                }
            });
            return result
        }).map(item => {
            return [
                item.transaction.project.name,
                item.transaction.payment_method.name,
                item.user.name
            ]
        })
    }
}