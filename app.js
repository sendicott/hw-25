let app = angular.module('NewsTrackerApp', []);

app.component("story", {
    templateUrl: "article.html",
    bindings: {
        readable: "<",
    },
    controller: "NewsArticle", 
});


app.factory("NewsService", function ($http) {
    let newsArray = [];

    $http({
        method: 'GET',
        url: "http://puzzlegram.herokuapp.com/news",
    }).then(function (news) {
        angular.copy(news.data.news, newsArray);
        for (let i = 0; i < newsArray.length; i++) {
            newsArray[i].favorite = false;
        }
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

        getFavorites: function () {
            let favoriteArray = [];
            for (let i = 0; i < newsArray.length; i++) {
                if (newsArray[i].favorite === true) {
                    favoriteArray.push(newsArray[i]);
                }
            }
            return favoriteArray;
        }
    }
});

app.controller("NewsArticle", function($scope, NewsService) {
    $scope.hideArticle = function (element) {
        $scope.news = null;
        let articlesList = NewsService.getNews();

        for (let i = 0; i < articlesList.length; i++) {
            if (articlesList[i].id === element.id) {
                articlesList.splice(i, 1);
            }
        }
        $scope.news = articlesList;
    }
});

app.controller("NewsController", function($scope, NewsService) {    
    $scope.activeTab = "";

    $scope.news = NewsService.getNews();

    $scope.removeHidden = function () {
        $scope.activeTab = "all";
        $scope.news = null;
        $scope.news = NewsService.getNews();
    }

    $scope.findFavorites = function () {
        $scope.activeTab = "fave";
        $scope.news = null;
        $scope.news = NewsService.getFavorites();
    }

    $scope.findCNN = function () {
        $scope.activeTab = "CNN";
        $scope.news = null;
        $scope.news = NewsService.getCNN();
    }

    $scope.findBBC = function () {
        $scope.activeTab = "BBC";
        $scope.news = null;
        $scope.news = NewsService.getBBC();
    }

    $scope.findNYT = function () {
        $scope.activeTab = "NYT";
        $scope.news = null;
        $scope.news = NewsService.getNYT();
    }

    $scope.findBuzz = function () {
        $scope.activeTab = "Buzz";
        $scope.news = null;
        $scope.news = NewsService.getBuzz();
    }
});