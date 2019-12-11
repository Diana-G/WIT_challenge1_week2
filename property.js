const handle ={}
for ( var name=1; name<=15; name++){
    var value = name*name;
    // static dot handle.name = value;
    //static square handle["name"] = value;
    handle[name] = value;
}
console.log(handle)
