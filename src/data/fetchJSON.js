import data from './data.json';


export default () => new Promise(resolve => {
    console.log(data);
    const tableData = data.map(item => {return [
        item.transaction.project.name,
        item.transaction.payment_method.name,
        item.user.name
    ]});
    resolve(tableData);
})