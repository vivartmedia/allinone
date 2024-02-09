const addNumbers = async (num1, num2) => {
    const promise = await fetch(`https://younathanaafo.azurewebsites.net/AddNum/Adding/${num1}/${num2}`);
    const response = await promise.text();
    return response;
}

export { addNumbers };