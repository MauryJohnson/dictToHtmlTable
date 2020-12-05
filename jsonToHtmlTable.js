  
  function CSS(Tag,Style){
    return "<"+Tag+" style='"+(Style || "")+"'>";
  }
  
  var dictToHtmlTable = function(O,T={}){
    
    //Iterate Object but order by levels
    var Tables = [

    ]
    
    var Queue = [[null,O]]

    var RowCount = 1;

    do{

      var Data = Queue.shift();

      var PType = Data[0]
      var Dict = Data[1]

      var Table = {
        "Header":[],
        "Row":{

        }
      }

      var Updated = false;

      for(var d in Dict){
        if(typeof Dict[d] == "object"){
          Queue.push([d,Dict[d]])
        }
        else{

          Table.Header.push(isNaN(parseInt(d))?d:(PType||d))

          Updated = true;

          if(!Table.Row[RowCount])
            Table.Row[RowCount] = [];

          Table.Row[RowCount].push(Dict[d]);

        }
      }

      if(Updated){
        Tables.push(Table);
      }

    }while(Queue.length>0)

    var Tables2 = {};
    for(var t in Tables){
      var hdr =  (Tables[t].Header+"").substring(0,100);
      //console.log(hdr)
      if(!Tables2[hdr])
        Tables2[hdr] = {"Header":Tables[t].Header,"Row":{}}

      var RL = Object.keys(Tables2[hdr].Row).length+1

      Tables2[hdr].Row[RL] = []

      for(var r in Tables[t].Row)
        for(var r2 in Tables[t].Row[r])
          Tables2[hdr].Row[RL].push(Tables[t].Row[r][r2]);
    }

    var Tables3 = [];

    for(var t in Tables2){
      Tables3.push(Tables2[t]);
    }
    Tables = Tables3;

    console.log("All Tables")

    console.log(JSON.stringify(Tables))

    var html = "";

    var TDC = T.td || CSS("td","border:1px solid black;");
    var TDR = T.tr || CSS("tr","border:1px solid black;")
    var TBL = T.table || CSS("table","border:2px solid black;");

    for(var i in Tables){
      var Table = Tables[i];

      var table = TBL

      table+=TDR

      for(var h in Table.Header){
        table+=

        TDC

        +Table.Header[h]+"</td>"
      }
      table+="</tr>"
      for(var d in Table.Row){
        table+="<tr>"
        for(var d2 in Table.Row[d]){

          table+=
                  TDC

                  +Table.Row[d][d2]+"</td>"

        }
        table+="</tr>"
      }

      table+="</table>"


      html+=table;
    }

    return html;

  }
