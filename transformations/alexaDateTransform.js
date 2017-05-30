// First, tell the mapper what value types this transformation is valid for
exports.type = "string";
// Then, implement the transformation function

var months = [{
    long: "January",
    short: "Jan"
},
{
    long: "February",
    short: "Feb"
},
{
    long: "March",
    short: "Mar"
},
{
    long: "April",
    short: "Apr"
},
{
    long: "May",
    short: "May"
},
{
    long: "June",
    short: "Jun"
},
{
    long: "July",
    short: "Jul"
},
{
    long: "August",
    short: "Aug"
},
{
    long: "September",
    short: "Sep"
},
{
    long: "October",
    short: "Oct"
},
{
    long: "November",
    short: "Nov"
},
{
    long: "December",
    short: "Dec"
}
];

exports.transform = function (content) {

    if (content.length > 0) {
        var arrayOfStrings = content.split(" ");
        if (arrayOfStrings.length == 6) {
            //Year
            var yyyy = arrayOfStrings[3];
            
            //Month
            var MM = 0;

            var month = arrayOfStrings[2];

            console.log(month);

            for (var i = 0; i < months.length; i++) {
                var long = months[i].long;
                var short = months[i].short;

                console.log(long);
                console.log(short);

                if (month === long || month === short) {
                    MM = i + 1;

                    console.log("Match" + i);
                }

                console.log("MM" + MM);
            }

            if (MM < 10) {
                MM = "0" + MM.toString();

                console.log("MM" + MM);
            } else {
                MM = MM.toString();

                console.log("MM" + MM);
            }

            console.log("MM" + MM);

            //Day
            var dd = arrayOfStrings[1];

            //Time
            var time = arrayOfStrings[4];

            //Result
            var result = yyyy + "-" + MM + "-" + dd + "T" + time + ".0Z";
            return result;
        }

    }

    return content;
};