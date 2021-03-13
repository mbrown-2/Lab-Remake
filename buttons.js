const labelCustom = "Custom group";

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

// Console.dir
document.getElementById("console.dir").addEventListener("click", function() {
    console.dir(document.head);
});

// Console.dirxml
document.getElementById("console.dirxml").addEventListener("click", function() {
    console.dir(document);
});

// Console.group
document.getElementById("console.group").addEventListener("click", function() {
    const label = "Alternative descriptions for characters in Spongebob:";
    console.group(label);
    console.info("A yellow brick with all the positivity I wish I still had.");
    console.info("A giant, pink boomerang. (Atlantis SquarePantis circa. 2007).");
    console.info("The adult version of an average elementary musical performance.");
    console.info("Simply R.C.E. - Red Corporate Entity.");
    console.info("The actual fish-out-of-water.");
    console.groupEnd(label);
});

// groupCustomStart
document.getElementById("groupCustomStart").addEventListener("click", function() {
    console.group(labelCustom);
});

// groupCustomLog
document.getElementById("groupCustomLog").addEventListener("click", function() {
    console.info("Log");
});

// groupCustomEnd
document.getElementById("groupCustomEnd").addEventListener("click", function() {
    console.groupEnd(labelCustom);
});

// Console.time
document.getElementById("console.time").addEventListener("click", function() {
    console.time();
    console.log("Timer started!");
});

// Console.timeEnd
document.getElementById("console.timeEnd").addEventListener("click", function() {
    console.timeEnd();
    console.log("Timer ended!");
});

// Console.trace
document.getElementById("console.trace").addEventListener("click", function() {
    const first = () => { second(); };
    const second = () => { third(); };
    const third = () => { fourth(); };
    const fourth = () => { console.trace(); };
    first();
});
