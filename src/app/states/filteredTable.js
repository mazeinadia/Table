export default function (state, filter) {
    debugger
    return {
        ...state,
        tableData: state.transactions.map(item => {
            if (item.transaction.project.name.indexOf(filter) !== -1) {
                return [
                    item.transaction.project.name,
                    item.transaction.payment_method.name,
                    item.user.name
                ]
            }
        })
    }
}