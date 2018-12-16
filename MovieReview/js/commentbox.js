function render(data) {
  let date = new Date().toISOString().substr(0, 10);
  document.querySelector("#date").value = date;

  var html = `
      <div class='commentBox'>
        <div class='leftPanelImg'>
          <img src='https://placeholdit.imgix.net/~text?w=100&h=100' />
        </div>
        <div class = 'rightPanel'>
          <span>` + data.name + `</span>
          <div class='date'>` + data.date + `</div>
          <p>` + data.body + `</p>
        </div>
        <div class='clear'></div>
      </div>
    `;
  $('#container').append(html);

}

$(document).ready(function() {
  let date = new Date().toISOString().substr(0, 10);
  document.querySelector("#date").value = date;


  var comment = [{
      "name": "Elvis Presley",
      "date": " 1977-08-15",
      "body": "Thank you. Thank you. Thank you very much."
    },
    {
      "name": "Mark Zuckerberg",
      "date": " 2010-10-30",
      "body": "I really wish there was more meaning in the plot. Seemed to be a little boring to me."
    },
    {
      "name": "Amy Bernard",
      "date": " 2017-02-21",
      "body": "Very good."
    },
    {
      "name": "Zaki Hasan",
      "date": "2016-12-01",
      "body": "What a great movie. Really kept me on my feet from beginning to end. Would definitely watch again!"
    },




  ];


  for (var i = 0; i < comment.length; i++) {
    render(comment[i]);
  }

  $('#addComment').click(function() {
    var addObj = {
      "name": $('#name').val(),
      "date": $('#date').val(),
      "body": $('#bodyText').val()
    };
    comment.push(addObj);
    render(addObj);
    $('#name').val('');
    // $('#date').val('dd/mm/yyyy');
    $('#bodyText').val('');

  });

});
