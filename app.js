'use strict'

//global variables
var twitchBaseURL = 'https://wind-bow.glitch.me/twitch-api/streams/';
var channelUserName = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

$(document).ready(function(){
//loop through channels 
for(var i = 0; i < channelUserName.length; i++) {
    //fetch the JSON data.
    $.getJSON(twitchBaseURL + channelUserName[i] + '?callback=?', function(data) {
        
        var channelID = data._links.self;
        var isolateChannel = channelID.substring(channelID.lastIndexOf("/") + 1);

            if(data.stream !== null){
                function renderOnlineCh(){
                    $('.online').append('<tr class="table-row"><th scope="row"></th><td><a href="https://go.twitch.tv/' + isolateChannel + '"target=_blank' + '>' + isolateChannel + '</a></td><td><img class="logo" src="' + data.stream.channel.logo + '"><a href="https://go.twitch.tv/' + isolateChannel + '"target=_blank' + '>Online</a></td><td>' + data.stream.channel.status + '</td></tr>');
                }
                renderOnlineCh();
            } 
            
            else if (data.stream === null){
                function renderOffineCh(){
                    $('.offline').append('<tr class="table-row"><th scope="row"></th><td><a href="https://go.twitch.tv/' + isolateChannel + '"target=_blank' + '>' + isolateChannel + '</a></td><td><img class="logo" src="https://d30y9cdsu7xlg0.cloudfront.net/png/462620-200.png">Offline</td><td>');
                }
                renderOffineCh();
            }
        });
    }
});
        


  


