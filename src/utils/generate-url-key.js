export default function generateUrlKey(string = '', removeShortWords = false) {
    let string_array = string
        .toString()
        .trim()
        .replace(/\s\s+/g, ' ')
        .split(" ");

    if (removeShortWords)
        string_array.map((item, index) => {
            if (item.length < 2)
                string_array.splice(index, 1);

            return item;
        });

    return string_array.join('-');
}
