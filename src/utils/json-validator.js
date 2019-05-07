const isEmptyObject = (obj) => {
    for (let key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}


const isJsonString = (string) => {
    try {

        let json = JSON.parse(string)
        return true

    } catch (err) {
        return false
    }
}

const isValidJSON = (input) => {
    let str = input.toString();

    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }

    return true;
}

export {
    isEmptyObject,
    isValidJSON,
    isJsonString
}