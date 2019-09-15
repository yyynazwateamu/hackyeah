from train.models import Train

questions = [
    {
        "id": 1,
        "question": 'Which is the capital of Poland?',
        "answers": ['Krakow', 'Warsaw', 'Katowice', 'Wroclaw'],
        "right_answer": 2,
        'city': Train.CITY_WARSZAWA
    },
    {
        "id": 2,
        "question": 'In which city is located Wawel?',
        "answers": ['Katowice', 'Warsaw', 'Wroclaw', 'Krakow'],
        "right_answer": 4,
        'city': Train.CITY_KRAKOW

    },
    {
        "id": 3,
        "question": 'What is the oldest university in Poland?',
        "answers": ['University of Warsaw', 'University of Wrocław', 'Jagiellonian University', 'Adam Mickiewicz University in Poznań'],
        "right_answer": 3,
        'city': Train.CITY_KRAKOW

    },
    {
        "id": 4,
        "question": 'From which building is played bugle-call?',
        "answers": ['Kościół Mariacki w Krakowie', 'Ratusz w Krakowie', 'Wieża Wawelska w Krakowie', 'Ratusz w Poznaniu'],
        "right_answer": 1,
        'city': Train.CITY_KRAKOW

    },
    {
        "id": 5,
        "question": 'What is the symbol of Warsaw?',
        "answers": ['Siren', 'Wawel Dragon', 'Programmer', 'Train'],
        "right_answer": 1,
        'city': Train.CITY_WARSZAWA
    },
    {
        "id": 6,
        "question": 'How many nature reserves is in Kielce?',
        "answers": ['2', '3', '4', '5'],
        "right_answer": 4,
        'city': Train.CITY_KIELCE
    },
]
