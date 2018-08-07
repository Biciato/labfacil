$(document).ready(function(){

  $('#novoUser').hide();
  $('#listaUsers').hide();
  $('.pt-3-half').mask('00:00');

  $('a').click(function(){
    var hide = $('#sidenav > ul > li > div').css('display','none');
    if (this.id == "rotinaDiaria"){
      hide;
      $(this).siblings().css('display','block');
    }
    if (this.id == "cadastro"){
      hide;
      $(this).siblings().css('display','block');
    }
    if (this.id == "faturamento"){
      hide;
      $(this).siblings().css('display','block');
    }
    if (this.id == "relatorios"){
      hide;
      $(this).siblings().css('display','block');
    }
    if (this.id == "administrativo"){
      hide;
      $(this).siblings().css('display','block');
    }
  });

  $('#tabUnid > tbody > tr').click(function() {
    $('#panel1 > div').hide();
    $('#panel1 > form').hide();
    $('#formUnid').css('display','block');
  });

  $('#tabPC > tbody > tr').click(function() {
    $('#panel2 > div').hide();
    $('#panel2 > form').hide();
    $('#formPC').css('display','block');
  });

  $('#tabFat > tbody > tr').click(function() {
    $('#panel3 > div').hide();
    $('#panel3 > form').hide();
    $('#formFat').css('display','block');
  });

  $('#tabHor > tbody > tr').click(function() {
    $('#panel5 > div').hide();
    $('#panel5 > form').hide();
    $('#formHor').css('display','block');
  });

  $('#admUser').click(function() {
    $('nav').hide();
    $('#listaUsers').hide();
    $('#novoUser').show();
  });

  $('#admUserList').click(function() {
    $('nav').hide();
    $('#novoUser').hide();
    $('#listaUsers').show();
  });
});
