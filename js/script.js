
$(document).on('submit', function(event){
    event.preventDefault()
    let number = Number($('#numberOfSearch').val())
    let input = $("#searchTerm").val()
    // alert(input)
    $.ajax({
        url: `https://api.giphy.com/v1/gifs/search?api_key=keYipRkymMnFbSPxWruiVnygeIrzibb0&q=${input}&limit=${number}&offset=0&rating=g&lang=en`,
        success: function(data){
            data.data.forEach(gif => {
                console.log(gif)
            });
        } 
    })
})
