$("#creditsLink").on("click", function() {
    openPage(this, "credits")
})
$("#starCalcLink").on("click", function() {
    openPage(this, "starCalc")
})
$("#levelCalcLink").on("click", function() {
    openPage(this, "levelCalc")
})

function openPage(link, id) {
    var ACTIVE_LINK_CLASSNAME = "active"

    var jLink = $(link)
    if (!jLink.hasClass(ACTIVE_LINK_CLASSNAME)) {
        $("#pages > div").each(function(i, element) {
            $("#navbarNav a").each(function(index, element) {
                $(element).removeClass(ACTIVE_LINK_CLASSNAME)
            })
            $(element).slideUp()
        }).slideUp();

        $(link).addClass(ACTIVE_LINK_CLASSNAME)
        $("#"+id).slideDown();
    }
}
