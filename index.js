import edge from "edge";

var helloWorld = edge.func(function () {
    `
    async (input) => { 
        return ".NET Welcomes " + input.ToString(); 
    }
`});