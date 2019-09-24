const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}

const makeStore = () => {
    const domString = 'test new';
    printToDom('store-container', domString);
};

export default { makeStore };