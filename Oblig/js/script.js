QUnit.module('add', function () {
    QUnit.test('lenght of date', function (assert) {
        let actual = dateCheck('20.202020');
        let expected = false;
        assert.equal(actual, expected);
    });
    QUnit.test('period positioning', function (assert) {
        let actual = dateCheck('2.0022.020');
        let expected = false;
        assert.equal(actual, expected);
    });
    QUnit.test('year lenght', function (assert) {
        let actual = dateCheck('20.02.202');
        let expected = false;
        assert.equal(actual, expected);
    });
    QUnit.test('lenght of month', function (assert) {
        let actual = dateCheck('20.2.2020');
        let expected = false;
        assert.equal(actual, expected);
    });
    QUnit.test('month is 12 or lower', function (assert) {
        let actual = dateCheck('20.13.2020');
        let expected = false;
        assert.equal(actual, expected);
    });
    QUnit.test('day is above 31', function (assert) {
        let actual = dateCheck('32.03.2020');
        let expected = false;
        assert.equal(actual, expected);
    });
    QUnit.test('day is above 31 in even month', function (assert) {
        let actual = dateCheck('31.04.2020');
        let expected = false;
        assert.equal(actual, expected);
    });
    QUnit.test('day is above 28 in feb and its not leapyear', function (assert) {
        let actual = dateCheck('29.02.2001');
        let expected = false;
        assert.equal(actual, expected);
    });
    QUnit.test('29th of feb leapyear', function (assert) {
        let actual = dateCheck('29.02.2000');
        let expected = true;
        assert.equal(actual, expected);
    });
    QUnit.test('lenght of day', function (assert) {
        let actual = dateCheck('2.02.2020');
        let expected = false;
        assert.equal(actual, expected);
    });
    QUnit.test('date is correct', function (assert) {
        const isValid = dateCheck('03.02.2020');
        assert.equal(isValid, true);
    });
});








function dateCheck(dato) {
    if(
    lengthCheck(dato) && 
    punktumPosisjonCheck(dato) && 
    yearCheck(dato) && 
    monthCheck(dato) && 
    dayValueCheck(dato) && 
    dayMonthCheck(dato)  
    ) {
        return true
    } else {
        return false
    }

}

function lengthCheck(dato) {
    return (dato.length === 10);
}

function punktumPosisjonCheck(dato) {
    return (dato.includes(".", 2)  && dato.includes(".", 5));
}

function yearCheck(dato) {
    const year = dato.slice(6, 10)
    return (year.length === 4 && year >= 0000 && year <= 9999);
}

function leapYear(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

function monthCheck(dato) {
    const month = dato.slice(3, 5);
    return (month.length === 2 && month <= 12 && month >= 01);
}

function dayValueCheck(dato) {
    const day = dato.slice(0, 2);
    return (!day.includes(".") && day >= '01' && day <= '31');
}
function dayMonthCheck(dato) {
    const day = dato.slice(0, 2);
    const month = dato.slice(3, 5);
    const year = dato.slice(6, 10);

    return ((month == 02 && day <= 28) ||
            (!month.includes(".") && month > 2 && month % 2 == 0 && day <= 30) ||
            (!month.includes(".") && month % 2 !== 0 && day <= 31) ||
            (leapYear(year) && month == 02 && day <= 29)) 
}
