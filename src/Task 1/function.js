//Решение первой задачи тестового задания.

function get(obj, path, defaultValue = undefined) {
    const array = path.split('.');
    let result = obj;
    for (let i = 0; i < array.length; i++) {
        if (array[i] in result) {
            result = result[array[i]];
        } else {
            result = defaultValue;
            break;
        }
    }
    return console.log(result);
}

const obj = {
    pupa: {
        lupa: {
            beep: 'boop'
        },
        foo: 'bar'
    }
};

get(obj, "pupa.lupa")
get(obj, "pupa.lupa.beep")
get(obj, "pupa.foo")
get(obj, "pupa.ne.tuda", "ERROR")
get(obj, 'pupa.x'); // undefined
get(obj, 'pupa.foo', true); // true
get(obj, 'pupa.lupa.foo', 'My default value')