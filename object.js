const obj = {
  name: "shamil",
  age: 20,
  // "-" or " " must be in single or double quotes and cant access with dot notation
  "key-three": true,
  sayMyname:function(){
    console.log(this.name );
  }
};

obj.hobby = "Football";
delete obj.delete

console.log(obj.name);
console.log(obj["age"]);
console.log(obj["key-three"]);
console.log(obj);
console.log(obj.sayMyname());