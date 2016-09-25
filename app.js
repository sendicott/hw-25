let app = angular.module('NewsTrackerApp', []);

app.factory("NewsService", function ($http) {
    let newsArray = [];
    let favorites = [];

    $http({
        method: 'GET',
        url: "http://puzzlegram.herokuapp.com/news",
    }).then(function (news) {
        angular.copy(news.data.news, newsArray);
        // console.log("Testing: " + newsArray[0].published);
    });

    return {
        getNews: function () {
            // console.log(newsArray);
            return newsArray;
        },

        getCNN: function () {
            let CNNArray = [];
            for (let i = 0; i < newsArray.length; i++) {
                if (newsArray[i].publisher.name === "CNN") {
                    CNNArray.push(newsArray[i]);
                }
            }
            return CNNArray;
        }
    }
});

app.controller("NewsController", function($scope, NewsService) {
    $scope.news = NewsService.getNews();
    $scope.removeHidden = function () {
        $scope.news = null;
        $scope.news = NewsService.getNews();
    }

    $scope.findCNN = function () {
        $scope.news = null;
        $scope.news = NewsService.getCNN();
    }

    $scope.hideIt = function () {
        console.log($scope);
        console.log($scope.news);
    }
});