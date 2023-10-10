  $(document).ready(function () {
        $(".delete-cross").click(function () {
          $("#job-container").remove();
        });
  });
      


  $(document).ready(function () {
  const popupContainer = $('#popup-container');

  function displayJobDetails(job) {
    const popupContent = `
      <div class="popup-content">
        <h1>${job.company}</h1>
        <img src="${job.logo}" alt="${job.company}">
        <p>Position: ${job.position}</p>
        <p>Role: ${job.role}</p>
        <p>Level: ${job.level}</p>
        <p>Posted At: ${job.postedAt}</p>
        <p>Contract: ${job.contract}</p>
        <p>Location: ${job.location}</p>
        <p>Languages: ${job.languages.join(', ')}</p>
        <p>Tools: ${job.tools.join(', ')}</p>
      </div>
    `;

    popupContainer.html(popupContent);

    popupContainer.show();
  }
  $('#photosnap-link').click(function (event) {

    $.getJSON('data.json', function (data) {
      const companyName = 'Photosnap';
      const company = data.find(item => item.company === companyName);

      if (company) {
        displayJobDetails(company);
      } else {
        alert('Company data not found');
      }
    });
  });
});

$(document).ready(function(){
    $("#openButton").click(function(){
        $("#myForm").show();
    });
    $("#closeButton").click(function(){
        $("#myForm").hide();
    });
});


function addNewJob() {
    var company = $("input[name='company']").val();
    var logo = $("#logo").val();
    var position = $("input[name='position']").val();
    var role = $("input[name='role']").val();
    var level = $("input[name='level']").val();
    var postedAt = $("input[name='postedAt']").val();
    var contract = $("input[name='contract']").val();
    var isNew = $("input[name='new']").is(":checked");
    var isFeatured = $("input[name='featured']").is(":checked");
    var location = $("input[name='location']").val();
    var languages = $("input[name='languages']").val();
    var tools = $("input[name='tools']").val();

    var newJob = `
        <div class="container" id="job-container">
            <div class="content-left">
                <img src="${logo}" alt="${company}">
                <a href="#" id="photosnap-link">
                    <h3>${company}</h3>
                </a>
                ${isNew ? '<div class="box" style="background-color: hsl(180, 29%, 50%);">NEW!</div>' : ''}
                ${isFeatured ? '<div class="box" style="background-color: hsl(180, 14%, 20%);">FEATURED</div>' : ''}
                <h4>${position}</h4>
                <span class="job-info">${postedAt}</span>
                <span class="bullet">&bull;</span>
                <span class="job-info">${contract}</span>
                <span class="bullet">&bull;</span>
                <span class="job-info">${location}</span>
            </div>
            <div class="delete-cross">✖</div>
            <div class="job-filters">
                <div class="clickable-box" data-attribute="role">${role}</div>
                <div class="clickable-box" data-attribute="level">${level}</div>
                <div class="clickable-box" data-attribute="languages">${languages}</div>
                <div class="clickable-box" data-attribute="tools">${tools}</div>
            </div>
        </div>
    `;

    $("#job-container").append(newJob);
}


$(document).ready(function() {
    $("#saveJobButton").click(function() {
        addNewJob();
        $("#myForm").hide(); 
    });
});



    const form = document.querySelector('.form-container');
    const saveButton = document.getElementById('saveJobButton');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const company = form.querySelector('[name="company"]').value;
        const logo = form.querySelector('[name="logo"]').files[0];
        const position = form.querySelector('[name="position"]').value;
        if (company.trim() === '') {
            alert('Please enter a company name.');
            return;
        }

        if (!logo) {
            alert('Please select a logo.');
            return;
        }

        if (position.trim() === '') {
            alert('Please enter a position.');
            return;
        }

        form.reset();
        document.getElementById('myForm').style.display = 'none';
    });

