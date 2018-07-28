export default function (state) {
    return {
        ...state,
        projects: [...new Set(state.transactions.map(item =>
            item.transaction.project.name))]
    }
}