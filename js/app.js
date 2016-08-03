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

  function showErin(e) {
    e.preventDefault();
    $('#erin-pic').fadeIn(1000);
  }

  function showVinny(e) {
    e.preventDefault();
    $('#vinny-pic').fadeIn(1000).css('display', 'inline-block');
  }

  function showBeans(e) {
    e.preventDefault();
    $('#beans-pic').fadeIn(1000).css('display', 'inline-block');
  }

  function showBirdie(e) {
    e.preventDefault();
    $('#birdie-pic').fadeIn(1000).css('display', 'inline-block');
  }

  function showGames(e){
    e.preventDefault();
    $('.games').fadeIn(500);
  }
  function showMusic(e){
    e.preventDefault();
    $('.music').fadeIn(500);
  }
  function showComics(e){
    e.preventDefault();
    $('.comic').fadeIn(500);
  }


})();
