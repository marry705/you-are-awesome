
const createEnumerableProperty = (propertyName = '') => {
    this._name = propertyName;
    return this._name;
};
const createNotEnumerableProperty = (propertyName = '') => {
    this._name = propertyName;
    return Symbol(this._name);
};
const createProtoMagicObject = () => {
    let m = new Function(); //для создание уникального объекта с типом данных 'этот объект'
    m.__proto__ = m.prototype; 
    return m;
};

let value = 0;

const incrementor = () => { 
    value++; //накапливает решения
    return incrementor; 
};

incrementor.toString = () => value; //выводит итог

let asyncvalue = 0;

const asyncIncrementor = () => {
    asyncvalue++; //накапливает решение
    asyncIncrementor.valueOf = () => asyncvalue; //записывает в значение
    return new Promise(function (resolve, reject) { 
        resolve(asyncIncrementor);
    });
};

const createIncrementer = () => {
    const b = [];
    b.value = 0;
    b.next = function () { 
        b.value++;
        return this;
    }
    return b;
};

// return same incrementorument not earlier than in one second, and not later, than in two

const returnBackInSecond = (param = '') => {
    return new Promise( function (resolve, reject) {
        setTimeout(() => {
            resolve(param);
        }, 1000);
    });
}

//перевести объект в строку, и посчитать '}' - 1, открывающий исходный объект
const getDeepPropertiesCount = (obj = {}) => {
    let b = obj;
    const count = JSON.stringify(b).match(/}/g).length-1; 
    return count;
}

const createSerializedObject = () => {
    const b = new String(new Object);
    return b; 
}

//const toBuffer = () => {}; ???

const sortByProto = (arr = []) => {
    const buf = arr;
    buf.sort((left, right) => right.value - left.value);
    return buf;
}    

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;