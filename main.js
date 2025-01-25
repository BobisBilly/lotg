function insertT(value) {
    const characters = String(value).split('');
    const randomIndex = Math.floor(Math.random() * (characters.length + 1));
    characters.splice(randomIndex, 0, 'T');
    return characters.join('');
}

console.lotg = (...args) => console.log(...args.map(arg => typeof arg === "string" ? insertT(arg) : arg))