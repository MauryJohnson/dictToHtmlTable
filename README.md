# dictToHtmlTable
Convert ANY Dictionary to an HTML Table
Argument 1 is the Dictionary object.
Argument 2 is the td,tr,and table css configurations. Default CSS configurations are:

  1. td
    CSS("td","border:1px solid black;")

  2. tr
    CSS("tr","border:1px solid black;")

  3. table 
    CSS("table","border:2px solid black;")

  This is represented in Argument 2 as:
  {

   "td":CSS("td","border:1px solid black;"),

   "tr":CSS("tr","border:1px solid black;"),

   "table":CSS("table","border:2px solid black;")

  }
  
dictToHtmlTable([{"repeat(5, 10)":{"_id":"{{objectId()}}","index":"{{index()}}","guid":"{{guid()}}","isActive":"{{bool()}}","balance":"{{floating(1000, 4000, 2, \"$0,0.00\")}}","picture":"http://placehold.it/32x32","age":"{{integer(20, 40)}}","eyeColor":"{{random(\"blue\", \"brown\", \"green\")}}","name":{"first":"{{firstName()}}","last":"{{surname()}}"},"company":"{{company().toUpperCase()}}","phone":"+1 {{phone()}}","address":"{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}","about":"{{lorem(1, \"paragraphs\")}}","registered":"{{moment(this.date(new Date(2014, 0, 1), new Date())).format(\"LLLL\")}}","latitude":"{{floating(-90.000001, 90)}}","longitude":"{{floating(-180.000001, 180)}}","tags":[{"repeat(5)":"{{lorem(1, \"words\")}}"}],"friends":[{"repeat(3)":{"id":"{{index()}}","name":"{{firstName()}} {{surname()}}"}}]}}])

=>

<table style='border:2px solid black;'><tr style='border:1px solid black;'><td style='border:1px solid black;'>_id</td><td style='border:1px solid black;'>index</td><td style='border:1px solid black;'>guid</td><td style='border:1px solid black;'>isActive</td><td style='border:1px solid black;'>balance</td><td style='border:1px solid black;'>picture</td><td style='border:1px solid black;'>age</td><td style='border:1px solid black;'>eyeColor</td><td style='border:1px solid black;'>company</td><td style='border:1px solid black;'>phone</td><td style='border:1px solid black;'>address</td><td style='border:1px solid black;'>about</td><td style='border:1px solid black;'>registered</td><td style='border:1px solid black;'>latitude</td><td style='border:1px solid black;'>longitude</td></tr><tr><td style='border:1px solid black;'>{{objectId()}}</td><td style='border:1px solid black;'>{{index()}}</td><td style='border:1px solid black;'>{{guid()}}</td><td style='border:1px solid black;'>{{bool()}}</td><td style='border:1px solid black;'>{{floating(1000, 4000, 2, "$0,0.00")}}</td><td style='border:1px solid black;'>http://placehold.it/32x32</td><td style='border:1px solid black;'>{{integer(20, 40)}}</td><td style='border:1px solid black;'>{{random("blue", "brown", "green")}}</td><td style='border:1px solid black;'>{{company().toUpperCase()}}</td><td style='border:1px solid black;'>+1 {{phone()}}</td><td style='border:1px solid black;'>{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}</td><td style='border:1px solid black;'>{{lorem(1, "paragraphs")}}</td><td style='border:1px solid black;'>{{moment(this.date(new Date(2014, 0, 1), new Date())).format("LLLL")}}</td><td style='border:1px solid black;'>{{floating(-90.000001, 90)}}</td><td style='border:1px solid black;'>{{floating(-180.000001, 180)}}</td></tr></table><table style='border:2px solid black;'><tr style='border:1px solid black;'><td style='border:1px solid black;'>first</td><td style='border:1px solid black;'>last</td></tr><tr><td style='border:1px solid black;'>{{firstName()}}</td><td style='border:1px solid black;'>{{surname()}}</td></tr></table><table style='border:2px solid black;'><tr style='border:1px solid black;'><td style='border:1px solid black;'>repeat(5)</td></tr><tr><td style='border:1px solid black;'>{{lorem(1, "words")}}</td></tr></table><table style='border:2px solid black;'><tr style='border:1px solid black;'><td style='border:1px solid black;'>id</td><td style='border:1px solid black;'>name</td></tr><tr><td style='border:1px solid black;'>{{index()}}</td><td style='border:1px solid black;'>{{firstName()}} {{surname()}}</td></tr></table>
