export default function(state) {
    return {
        ...state,
        rating: getRating(state.transactions)
    }
}

function getRating (transactions){
    let uniqueMethod = [];
    transactions.map(item => {
        let isNew = true;
        uniqueMethod = uniqueMethod.map(methodItem => {
            if (item.transaction["payment_method"].name === methodItem.name) {
                isNew = false;
                return {
                    ...methodItem,
                    rate: methodItem.rate + 1
                }
            } else {
                return methodItem
            }
        });
        if (isNew) {
            uniqueMethod.push({
                name: item.transaction["payment_method"].name,
                rate: 1
            })
        }
    });

    uniqueMethod = uniqueMethod.map(item => {
        return {
            ...item,
            percent: Math.round((Number(item.rate) / Number(transactions.length) * 100))
        }
    });
    return uniqueMethod;
}