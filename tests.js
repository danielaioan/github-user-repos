QUnit.test("test kibo007 first repository name", function() {

  $.ajaxSetup({
		async:false
  });


  $("#username").val("kibo007");
  $("#submit").trigger("click");


  var actual = $('#list-repos li:first-child a').text();
  equal( actual, "allmighty-autocomplete", "'allmighty-autocomplete' is the first repository name" );

});



QUnit.test("test a non existing repository", function() {

  $('#list-repos').html();
  $.ajaxSetup({
		async:false
  });


  $("#username").val("inga");
  $("#submit").trigger("click");


  var actual = $('#list-repos').text();
  equal( actual, "The user has 0 repositories", "The user has 0 repositories - returned message" );

});



QUnit.test("test a non existing repository", function() {

  $('#list-repos').html();
  $.ajaxSetup({
		async:false
  });


  $("#username").val("nonexistinguser");
  $("#submit").trigger("click");


  var actual = $('#list-repos').text();
  equal( actual, "The Github user does not exist", "The Github user does not exist - returned message" );

});
