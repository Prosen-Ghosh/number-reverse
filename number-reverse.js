module.exports = (val) => {
    if(typeof val !== 'number'){
        throw TypeError(`expects number got ` + (typeof val));
    }
    return +[...val.toString()].reverse().join('');
}