var searchIndex = {};
searchIndex["repitile_server"] = {"doc":"`repitile_server` uses the `repitile_core` crate, along with a `gotham` REST API server to communicate with the UI and update profiles, configurations, temperature, humidity, etc.","items":[[3,"GOTHAM_CHANNEL_SERVER_REQ","repitile_server","",null,null],[12,"__private_field","","",0,null],[3,"GOTHAM_CHANNEL_SERVER_RESP","","",null,null],[12,"__private_field","","",1,null],[5,"main","","",null,{"inputs":[],"output":null}],[0,"rest_server","","Contains the REST API server functionality.",null,null],[5,"start","repitile_server::rest_server","Starts an instance of the REST API server in a new thread.",null,{"inputs":[],"output":null}],[5,"prof","","",null,{"inputs":[{"name":"state"}],"output":{"generics":["handlerfuture"],"name":"box"}}],[5,"config","","",null,{"inputs":[{"name":"state"}],"output":{"generics":["handlerfuture"],"name":"box"}}],[5,"temp","","",null,null],[5,"humid","","",null,null],[5,"build_router","","",null,{"inputs":[],"output":{"name":"router"}}],[0,"simple_sensor","repitile_server","Defines a simple sensor that reads from our DHT22/RHT03 sensors connected to the Pi.",null,null],[3,"SimpleSensor","repitile_server::simple_sensor","Simple sensor that reads from a specific GPIO pin.",null,null],[12,"pin","","",2,null],[12,"temp","","",2,null],[12,"humid","","",2,null],[11,"new","","Creates a new `SimpleSensor` with the specified pin number.",2,{"inputs":[{"name":"u8"}],"output":{"name":"simplesensor"}}],[11,"read","","",2,{"inputs":[{"name":"self"}],"output":null}],[11,"temperature","","",2,{"inputs":[{"name":"self"}],"output":{"name":"u32"}}],[11,"humidity","","",2,{"inputs":[{"name":"self"}],"output":{"name":"u32"}}],[0,"simple_regulator","repitile_server","Defines a simple regulator that enables/disables a LED connected to the Pi for simple threshold testing.",null,null],[3,"SimpleTempRegulator","repitile_server::simple_regulator","Simple \"regulator\" that enables/disables a temperature indicator LED.",null,null],[12,"pin","","",3,null],[12,"threshold","","",3,null],[3,"SimpleHumidityRegulator","","Simple \"regulator\" that enables/disables a humidity indicator LED.",null,null],[12,"pin","","",4,null],[12,"threshold","","",4,null],[11,"new","","Creates a new `SimpleTempRegulator` from a GPIO pin number and threshold value for activation.",3,{"inputs":[{"name":"u8"},{"name":"u32"}],"output":{"name":"simpletempregulator"}}],[11,"profile_changed","","",3,{"inputs":[{"name":"self"},{"name":"profile"}],"output":null}],[11,"update","","",3,{"inputs":[{"name":"self"},{"name":"currentconditions"}],"output":null}],[11,"new","","Creates a new `SimpleHumidityRegulator` from a GPIO pin number and threshold value for activation.",4,{"inputs":[{"name":"u8"},{"name":"u32"}],"output":{"name":"simplehumidityregulator"}}],[11,"profile_changed","","",4,{"inputs":[{"name":"self"},{"name":"profile"}],"output":null}],[11,"update","","",4,{"inputs":[{"name":"self"},{"name":"currentconditions"}],"output":null}],[7,"GOTHAM_CHANNEL_SERVER_REQ","repitile_server","",null,null],[7,"GOTHAM_CHANNEL_SERVER_RESP","","",null,null],[11,"deref","","",0,null],[11,"initialize","","",0,{"inputs":[{"name":"self"}],"output":null}],[11,"deref","","",1,null],[11,"initialize","","",1,{"inputs":[{"name":"self"}],"output":null}]],"paths":[[3,"GOTHAM_CHANNEL_SERVER_REQ"],[3,"GOTHAM_CHANNEL_SERVER_RESP"],[3,"SimpleSensor"],[3,"SimpleTempRegulator"],[3,"SimpleHumidityRegulator"]]};
initSearch(searchIndex);