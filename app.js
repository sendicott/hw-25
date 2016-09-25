let app = angular.module('NewsTrackerApp', []);

app.factory("NewsService", function ($http) {
    let newsArray = [];
    let favorites = [];

    $http({
        method: 'GET',
        url: "http://puzzlegram.herokuapp.com/news",
    }).then(function (news) {
        angular.copy(news.data.news, newsArray);
        console.log("Testing: " + newsArray[0].published);
    });

    return {
        getNews: function () {
            console.log(newsArray);
            return newsArray;
        },
    }
});

app.controller("NewsController", function($scope, NewsService) {
    $scope.news = NewsService.getNews();
    $scope.removeHidden = function () {
        console.log("hidden");
        let hiddenClass = document.querySelectorAll(".newsBox").classList
        hiddenClass.remove("hidden");
    }
});