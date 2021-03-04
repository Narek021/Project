const data = [
    {
        img: "./Assets/apart1.jpg",
        apartmentName: 'Апартаменты в «башне ОКО»',
        lotNumber: 'Лот № 4536',
        totalPrice: '25 600 000 ₽',
        picePerMater: '365 714 ₽ за м²',
        apartmentArea: 'Площадь 70 м²',
        floor: 'Этаж 52'
    },
    {
        img: "./Assets/apart2.jpg",
        apartmentName: 'Апартаменты в «башне Империя»',
        lotNumber: 'Лот № 4547',
        totalPrice: '27 900 000 ₽',
        picePerMater: '420 000 ₽ за м²',
        apartmentArea: 'Площадь 62 м²',
        floor: 'Этаж 35'
    },
    {
        img: "./Assets/apart3.jpg",
        apartmentName: 'Апартаменты в «Neva Towers»',
        lotNumber: 'Лот № 4548',
        totalPrice: '19 000 000 ₽',
        picePerMater: '475 000 ₽ за м²',
        apartmentArea: 'Площадь 40 м²',
        floor: 'Этаж 16'
    },
    {
        img: "./Assets/apart4.jpg",
        apartmentName: 'Апартаменты в комплексе «Федерация»',
        lotNumber: 'Лот № 4549',
        totalPrice: '59 500 000 ₽',
        picePerMater: '540 909 ₽ за м²',
        apartmentArea: 'Площадь 110 м²',
        floor: 'Этаж 84'
    },
    {
        img: "./Assets/apart5.jpg",
        apartmentName: 'Апартаменты в «башне ОКО»',
        lotNumber: 'Лот № 4550',
        totalPrice: '34 900 000 ₽',
        picePerMater: '396 590 ₽ за м²',
        apartmentArea: 'Площадь 88 м²',
        floor: 'Этаж 29'
    },
    {
        img: "./Assets/apart6.jpg",
        apartmentName: 'Апартаменты в «Город столиц»',
        lotNumber: 'Лот № 4551',
        totalPrice: '28 400 000 ₽',
        picePerMater: '498 245 ₽ за м²',
        apartmentArea: 'Площадь 57 м²',
        floor: 'Этаж 48'
    },
    {
        img: "./Assets/apart7.jpg",
        apartmentName: 'Апартаменты в «Город столиц»',
        lotNumber: 'Лот № 4552',
        totalPrice: '38 200 000 ₽',
        picePerMater: '553 623 ₽ за м²',
        apartmentArea: 'Площадь 69 м²',
        floor: 'Этаж 58'
    },
    {
        img: "./Assets/apart8.jpg",
        apartmentName: 'Апартаменты в «башне Империя»',
        lotNumber: 'Лот № 4553',
        totalPrice: '41 000 000 ₽',
        picePerMater: '554 054 ₽ за м²',
        apartmentArea: 'Площадь 74 м²',
        floor: 'Этаж 41'
    },
    {
        img: "./Assets/apart9.jpg",
        apartmentName: 'Апартаменты в «Город столиц»',
        lotNumber: 'Лот № 4554',
        totalPrice: '53 200 000 ₽',
        picePerMater: '565 957 ₽ за м²',
        apartmentArea: 'Площадь 94 м²',
        floor: 'Этаж 59'
    },
    {
        img: "./Assets/apart10.jpg",
        apartmentName: 'Апартаменты в «Neva Towers»',
        lotNumber: 'Лот № 4555',
        totalPrice: '89 900 000 ₽',
        picePerMater: '642 142 ₽ за м²',
        apartmentArea: 'Площадь 140 м²',
        floor: 'Этаж 61'
    }
]
const app = document.querySelector('.app')

for (let i = 0; i < data.length; i++) {
    app.innerHTML += `<div class = "app-wrap">
                    <div class ="app-img-desc">
                        <img src = "${data[i].img}"/>
                        <div class ="app-description">
                            <h3 id = "apart-name">${data[i].apartmentName}</h3>
                            <p id = "lot-number">${data[i].lotNumber}</p>
                            <div class= "app-desc-flex">
                                <div>
                                    <p id = "total-price">${data[i].totalPrice}</p>
                                    <p>${data[i].picePerMater}</p>
                                </div>
                                <div>
                                    <p>${data[i].apartmentArea}</p>
                                    <p>${data[i].floor}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <input id = "app-see-btn" type = "button" value="Назначить просмотр"></input>
                </div>`
}
const btn = document.querySelector('.btn')
const arr20 = [1, "str"]
const array = {
    push1:(arr, variable) => {
        arr[arr.length] = variable;
        console.log(arr);
    }
}

btn.onclick = () => array.push1(arr20, undefined);
