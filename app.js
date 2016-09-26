let app = angular.module('NewsTrackerApp', []);

app.factory("NewsService", function ($http) {
    let newsArray = [];

    $http({
        method: 'GET',
        url: "http://puzzlegram.herokuapp.com/news",
    }).then(function (news) {
        angular.copy(news.data.news, newsArray);
        // console.log("Testing: " + newsArray[0].published);
    });

    return {
        getNews: function () {
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
        },

        getBBC: function () {
            let BBCArray = [];
            for (let i = 0; i < newsArray.length; i++) {
                if (newsArray[i].publisher.name === "BBC") {
                    BBCArray.push(newsArray[i]);
                }
            }
            return BBCArray;
        },

        getNYT: function () {
            let NYTArray = [];
            for (let i = 0; i < newsArray.length; i++) {
                if (newsArray[i].publisher.name === "New York Times") {
                    NYTArray.push(newsArray[i]);
                }
            }
            return NYTArray;
        },

        getBuzz: function () {
            let BuzzArray = [];
            for (let i = 0; i < newsArray.length; i++) {
                if (newsArray[i].publisher.name === "Buzzfeed") {
                    BuzzArray.push(newsArray[i]);
                }
            }
            return BuzzArray;
        },
    }
});

app.controller("NewsController", function($scope, NewsService) {
    let favoriteArray = [];
    $scope.news = NewsService.getNews();
    $scope.removeHidden = function () {
        $scope.news = null;
        $scope.news = NewsService.getNews();
    }

    $scope.findCNN = function () {
        $scope.news = null;
        $scope.news = NewsService.getCNN();
    }

    $scope.findBBC = function () {
        $scope.news = null;
        $scope.news = NewsService.getBBC();
    }

    $scope.findNYT = function () {
        $scope.news = null;
        $scope.news = NewsService.getNYT();
    }

    $scope.findBuzz = function () {
        $scope.news = null;
        $scope.news = NewsService.getBuzz();
    }

    $scope.makeFavorite = function (element) {
        favoriteArray.push(element);
    }

    $scope.findFavorites = function () {
        $scope.news = null;
        $scope.news = favoriteArray;
    }

});