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

        getBloom: function () {

            for (let i = 0; i < newsArray.length; i++) {
                
            }
        }
    }
});

app.controller("NewsController", function($scope, NewsService) {
    $scope.news = NewsService.getNews();
    $scope.removeHidden = function () {
        let hiddenClass = document.querySelectorAll(".newsBox");
        for (let i = 0; i < hiddenClass.length; i++) {
            hiddenClass[i].classList.remove("hidden");    
        }
    }

    $scope.bloomFind = function () {
        let hiddenClass = document.querySelectorAll(".newsBox");
        for (let i = 0; i < hiddenClass.length; i++) {
            hiddenClass[i].classList.remove("hidden");    
        }
        
    }

    $scope.hideIt = function () {
        console.log($scope);
        console.log($scope.news);
    }

    // if (document.querySelectorAll("#hideClick").checked) {
    //     console.log("checked");
    // }
    // let hideClickArray = document.querySelectorAll("#hideClick").checked;
    // console.log(hideClickArray);

});