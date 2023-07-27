console.log(fxhash)
console.log(fxrand())

const sp = new URLSearchParams(window.location.search);
console.log(sp);

// this is how to define parameters
$fx.params([
  {
    id: "number_id",
    name: "Objects per line",
    type: "number",
    default: 12,
    options: {
      min: 1,
      max: 50,
      step: 1,
    },
  },
  {
    id: "transparency_id",
    name: "Objects transparency",
    type: "number",
    default: 150,
    options: {
      min: 0,
      max: 255,
      step: 1,
    },
  },
  {
    id: "perc_id",
    name: "Hide probability",
    type: "number",
    default: 40,
    options: {
      min: 0,
      max: 100,
      step: 1,
    },
  },
  {
    id: "select_id",
    name: "Palette",
    type: "select",
    default: "7",
    options: {
      options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    }
  },
  {
    id: "color_id",
    name: "Background color",
    type: "color",
    default: "b0242463",
  },
  {
    id: "background_id",
    name: "Background texture",
    type: "select",
    default: "1",
    options: {
      options: ["1", "2", "3", "4", "5", "6"],
    }
  },
]);

// this is how features can be defined
/*$fx.features({
  "A random feature": Math.floor($fx.rand() * 10),
  "A random boolean": $fx.rand() > 0.5,
  "A random string": ["A", "B", "C", "D"].at(Math.floor($fx.rand()*4)),
  "Feature from params, its a number": $fx.getParam("number_id"),
})*/

/*
// log the parameters, for debugging purposes, artists won't have to do that
console.log("Current param values:")
// Raw deserialize param values 
console.log($fx.getRawParams())
// Added addtional transformation to the parameter for easier usage
// e.g. color.hex.rgba, color.obj.rgba.r, color.arr.rgb[0] 
console.log($fx.getParams())

// how to read a single raw parameter
console.log("Single raw value:")
console.log($fx.getRawParam("color_id"));
// how to read a single transformed parameter
console.log("Single transformed value:")
console.log($fx.getParam("color_id"));
// palette
console.log("Palette value:")
console.log($fx.getRawParam("select_id"));

console.log("Background value:")
console.log($fx.getRawParam("background_id"));

// update the document based on the parameters
document.body.style.background = $fx.getParam("color_id").hex.rgba
document.body.innerHTML = `
<p>
url: ${window.location.href}
</p>
<p>
hash: ${$fx.hash}
</p>
<p>
params:
</p>
<pre>
${$fx.stringifyParams($fx.getRawParams())}
</pre>
<pre style="color: white;">
${$fx.stringifyParams($fx.getRawParams())}
</pre>
`
*/