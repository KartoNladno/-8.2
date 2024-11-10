let x = 0;
while (x <= 10) {
    console.log(x)
    x++

}

for (let y = 0; y <= 10; y++) {
    console.log(y)
}

// 2
for (let z = 0; z <= 20; z++) {
    if (z % 2 == 0) {
        console.log(z)
    }
}

// 3
let name = prompt(`Введите ваше имя`)
let city = prompt(`В каком городе вы проживаете?`)
let date = +prompt(`Введите ваш год рождения`)
if (date > 0) {
    let age = 2024 - date;
    console.log(`Добрый день ${name}, вы проживаете в городе ${city}. Ваш возраст – ${age} лет.`)
}
// 4-5

let buy = 15500
if (buy >= 2000 && buy <= 5000) {
    let disc = buy - (buy * 0.05)
    console.log(`В корзине товары на сумму ${buy} рублей. С учетом скидки – ${disc} рублей.`)

} else if (buy >= 5000 && buy <= 10000) {
    let disc = buy - (buy * 0.10)
    console.log(`В корзине товары на сумму ${buy} рублей. С учетом скидки – ${disc} рублей.`)
}

else if (buy >= 10000) {
    let disc = buy - (buy * 0.15)
    console.log(`В корзине товары на сумму ${buy} рублей. С учетом скидки – ${disc} рублей.`)
    if (disc >= 10000) {
        let uv = prompt(`Стоимость товаров в корзине – ${disc} руб. Введите промокод`)
        if (uv == `DELFA`) {
            let disc2 = buy / 2
            alert(`Скидка по промокоду составила 50%. Стоимость товаров - ${disc2} руб.`)
        } else {
            alert(`Данный промокод не подходит`)
        }
    } else {

    }
}

else {
    console.log(`Слишком маленькая сумма для скидки :( `)
}

// 6
for (let pass = 0; pass < 5;) {
    let word = prompt(`Введите пароль`)
    if (word == `QWERTY`) {
        alert(`Пароль введен верно, Добро пожаловать!`)
        break
    } else {
        pass++

    }
    if (pass == 5) {
        alert(`Попытки закончились`)
    }
}