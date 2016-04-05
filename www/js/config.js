"use strict";

 angular.module("config", [])

.constant("ENV", {
	"name": "development",
	"apiEndpoint": "http://192.168.0.5:8081/api/"
	//"apiEndpoint": "http://ebjsts.sisu.mx/api/"
	//"apiEndpoint": "http://127.0.0.1:8081/api/"
})

;
