# securityToolsBeginner
UI using Node JS for security tools:
1. Virus Total IP adresses CSV file
2. ***more to come***

## Requisites
#### Dependencies:
+ "axios": "^1.3.2"
+ "cors": "^2.8.5"
+ "express": "^4.18.2"
+ "formidable": "^2.1.1"
+ "formidable": "^2.1.1"
+ "node-virustotal": "^3.35.0"
+ "requirejs": "^2.3.6"
+ "supervisor": "^0.12.0"

All can be seen in the package.json file.

You will also need a VirusTotal API key which you can insert on the API KEY tab on the UI. [VirusTotal API](https://support.virustotal.com/hc/en-us/articles/115002088769-Please-give-me-an-API-key)


## Running
git clone, jump into the directory and make sure all dependencies are installed. Once everything is installed make sure
you change the port you want to be runnning this on; can be found on temp.js
> app.listen(#yourPort)

When you're ready to run, do:
> npx supervisor temp.js

Then you'll be able to go to http://localhost:#yourPort




# Not the best at css or html, modify html and css for your liking.

