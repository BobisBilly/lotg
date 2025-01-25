exports.lotg = function(value) {
    const characters = value.split("")
    characters.splice((characters.length + 1) * Math.random() | 0, 0, 'T')
    console.log(characters.join(""))
}