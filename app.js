let app = angular.module('NewsTrackerApp', []);

app.factory("NewsService", function ($http) {
    let newsArray = [];

    $http({
        method: 'GET',
        url: "http://puzzlegram.herokuapp.com/news",
    }).then(function (news) {
        angular.copy(news.data.news, newsArray);
    });

    return {
        getNews: function () {
            console.log(newsArray);
            return newsArray;
        },
    }
});

app.controller("ButtonController", function($scope) {

});

app.controller("DisplayController", function($scope, NewsService) {
    $scope.news = NewsService.getNews();
});