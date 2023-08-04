$(document).ready(function() {

    // API URL
    var apiUrl = "http://156.67.220.149:9002/wishes?app=1";

    var page = 1;
    
    // Function to fetch data from the API and populate the HTML
    function getDataAndPopulate(pages) {
        $.getJSON(apiUrl+"&page="+pages, function(data) {
        // Loop through each wish in the data
        $("#wishesContainer").html("");
        $.each(data.data, function(index, wish) {
            // Create HTML structure for each wish
            var wishItem = `
            <div class="col-lg-4">
                <div class="item">
                <div class="text-center">
                    <span>${wish.name}</span>
                    <blockquote>
                    <p>"${wish.wishes}"</p>
                    </blockquote>
                </div>
                </div>
            </div>
            
            `;
            // Append the wish item to the wishesContainer

            $("#wishesContainer").append(wishItem);
        });
        });
    }
    
    // Call the function to fetch data and populate the HTML
    getDataAndPopulate(page);

    $("#nextpage").click(function () {
        page = page+1
        getDataAndPopulate(page);
    });

    $("#beforepage").click(function () {
        page = page-1
        if (page < 1) {
            page = 1;
        }
        page > 1 ? getDataAndPopulate(page) : getDataAndPopulate(1);
       
    });

    $("#weddingForm").submit(function (event) {
        event.preventDefault();
        submitFormToApi();
    });

    function submitFormToApi() {
        // Gather form data
        var formData = {
            name: $("#name").val(),
            wishes: $("#message").val(),
            app_id: 1,
        };
        
        // Make the API call
        $.ajax({
            type: "POST",
            url: apiUrl,
            data: JSON.stringify(formData),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                
                $("#name").val("");
                $("#message").val("");

                getDataAndPopulate(1);

                console.log("API response:", data);
                alert("submitted successfully!");
            },
            error: function (error) {
                console.error("API error:", error);
                alert("Error submitting the form. Please try again later.");
            }
        });
    }
});
