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
                    title: 'Круто',
                    upvotes: 3
                }, {
                    title: 'Просто офигенно!',
                    upvotes: 2
                }]
            },
            {
                title: 'Очистить воду в фонтане',
                upvotes: 7,
                comments: [{
                    title: 'Не может быть!',
                    upvotes: 4
                }, {
                    title: 'Невероятно',
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
