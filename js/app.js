(function(){

  $(function(){

    //Event Handlers
    $(document)
    .on('click', '#erin', showErin)
    .on('click', '#vinny', showVinny)
    .on('click', '#beans', showBeans)
    .on('click', '#birdie', showBirdie)
    .on('click', '#games-button', showGames)
    .on('click', '#music-button', showMusic)
    .on('click', '#comics-button', showComics);

  });

  function showErin() {
    $('#erin-pic').fadeIn(1000);
  }

  function showVinny() {
    $('#vinny-pic').fadeIn(1000);
  }

  function showBeans() {
    $('#beans-pic').fadeIn(1000);
  }

  function showBirdie() {
    $('#birdie-pic').fadeIn(1000);
  }

  function showGames(){
    $('.games').fadeIn(500);
  }
  function showMusic(){
    $('.music').fadeIn(500);
  }
  function showComics(){
    $('.comic').fadeIn(500);
  }


})();
