// Console.log
document.getElementById("console.log").addEventListener("click", function() {
    console.log("Hey check me out! I'm a logged message!");
});

// Console.error
document.getElementById("console.error").addEventListener("click", function() {
    console.error("Yikes, is that an error? Just kidding! But seriously, stop clicking me.");
});

// Console.table
document.getElementById("console.table").addEventListener("click", function() {
    console.table([
        {
            Character: "Spongebob",
            Color: "Yellow",
            Occupation: "Fry Cook"
        },
        {
            Character: "Patrick",
            Color: "Pink",
            Occupation: "Rock Dweller"
        },
        {
            Character: "Squidward",
            Color: "Green",
            Occupation: "Awful Musician"
        },
        {
            Character: "Eugene Krabs",
            Color: "Red",
            Occupation: "Crustaceous Cheapskate"
        },
        {
            Character: "Sandy Cheeks",
            Color: "Brown",
            Occupation: "Texan Scientist"
        }
    ]);
});