$(document).ready(function () {


    // -------------------------------Output query sql ------------------------
    // select offerservedid, customerid, offerid, transactionid, serveddt, offerdetailid, channelind, offerlocationind, offerdisplayind, markservedmethodind
    // from opsbatch.dbo.offerserved with (nolock)
    // where ServedDT >= GETDATE () - 10
    // and offerservedid BETWEEN @ServeID AND @ServeID+10000000 order by 1

    $(".btn").click(function () {

        var minlim = parseInt($("#minlim").val().trim());
        var maxlim = parseInt($("#maxlim").val().trim());
        var increment = 10000000;
        $(".output").html("");
        var statement = "";

        for (let i = minlim; i < maxlim; i += increment) {
            if (i + increment <= maxlim) {
                statement = "select offerservedid, customerid, offerid, transactionid, serveddt, offerdetailid, channelind, offerlocationind, offerdisplayind, markservedmethodind from opsbatch.dbo.offerserved with (nolock) where ServedDT >= GETDATE () - 10 and offerservedid BETWEEN " + i + " AND " + (i + increment) + " order by 1"
                $(".output").append("<p>" + statement + "<p>");
            } else {
                statement = "select offerservedid, customerid, offerid, transactionid, serveddt, offerdetailid, channelind, offerlocationind, offerdisplayind, markservedmethodind from opsbatch.dbo.offerserved with (nolock) where ServedDT >= GETDATE () - 10 and offerservedid BETWEEN " + i + " AND " + maxlim + " order by 1"
                $(".output").append("<p>" + statement + "<p>");
            }
        }
    });


    //close document.ready 
});
