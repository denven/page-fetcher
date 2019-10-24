const request = require('request');
const fs = require('fs');
const argv = process.argv.slice(2);

const pageFetcher = function (argv) {
 console.log(argv); 
  request(argv[0], (error, response, body) => {

    fs.writeFile(argv[1], body, (err) => {
      if(err) {
        return console.log(err);
      } else {
        console.log("Save file sucessfully.");
      }
    });

  });
}

pageFetcher(argv);

