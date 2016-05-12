app.factory('suggestions', [function() {
    var demoSuggestions = {
        posts: [
            {
                title: 'Заканчивать все электронные письма по поводу клубных собраний шутками',
                upvotes: 9,
                comments: []
            },
            {
                title: 'Бесплатная пицца на клубных собраниях',
                upvotes: 15,
                comments: [{
                    body: 'Круто',
                    upvotes: 3
                }, {
                    body: 'Просто офигенно!',
                    upvotes: 2
                }]
            },
            {
                title: 'Очистить воду в фонтане',
                upvotes: 7,
                comments: [{
                    body: 'Не может быть!',
                    upvotes: 4
                }, {
                    body: 'Невероятно',
                    upvotes: 10
                }]
            },
            {
                title: 'Петь песню Bon Jovi\'s "Living on a Prayer" во время собраний',
                upvotes: 3,
                comments: []
            }
        ]
    };
    return demoSuggestions;
}]);
