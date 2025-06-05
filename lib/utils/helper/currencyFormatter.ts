export function currencyFormatter(amount:number) {
    const rupeesValues = amount / 100;
    const formattedValue = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
    }).format(rupeesValues);
    return formattedValue
}