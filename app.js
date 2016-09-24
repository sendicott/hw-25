let app = angular.module('NewsTrackerApp', []);

app.factory("NewsService", function ($http) {
    let newsArray = [];

    $http({
        method: 'GET',
        url: "http://puzzlegram.herokuapp.com/news",
    }).then(function (news) {
        console.log(news);
        angular.copy(news.data.news, newsArray);
        //     for (let i = 0; i < newsArray.length; i++) {
        //         newsArray[i].starred = false;
        //     }
    });

    console.log(newsArray);
    
    return {
        getNews: function () {
            console.log(newsArray);
            return newsArray;
        },

        // star: function (id) {
        //     for (let i = 0; i < newsArray.length; i++) {
        //         if (id === newsArray[i].id) {
        //             newsArray[i].starred = true;
        //             // newsArray[i].starred ? true : false
        //         } else {
        //             newsArray[i].starred = false;
        //         }
        //     }
        // }

    }
});

app.controller("ButtonController", function($scope) {

});

app.controller("DisplayController", function($scope) {

});