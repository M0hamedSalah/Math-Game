            let x =30;
            let y =0 , score =0;
            var i ,j;
            var option =0;
            var bool  =true ;
            var enablerespond;
            var buttonindex , buttonid ,randombuttonid;
            var result , randomresult;
            function myfunc()
            {
                enablerespond =true;
                i = Math.round(Math.random()*10);
                j = Math.round(Math.random()*10);
                x--;
                document.getElementById("time").innerHTML ="Time remeaning : " +x;
                if(x==0)
                    {                             ///////////////finishing the game////////////////
                        clearInterval(y);    
                        enablerespond =false;
                        document.getElementById("panel").style="position: absolute;";
                        document.getElementById("panel").style="display:none;";
                        document.getElementById("gameover").style="display:block";
                        document.getElementById("bottom").style="margin-top:100px;";
                        document.getElementById("gameover").innerHTML="Congratulations You Scored : " +score;
                        document.getElementById("button0").innerHTML ="?";
                        document.getElementById("button1").innerHTML ="?";
                        document.getElementById("button2").innerHTML ="?";
                        document.getElementById("button3").innerHTML ="?";
                        document.getElementById("button0").style="background-color: bisque";
                        document.getElementById("button1").style="background-color: bisque";
                        document.getElementById("button2").style="background-color: bisque";
                        document.getElementById("button3").style="background-color: bisque";
                    }
                else if(bool)
                    {
                        document.getElementById("panel").innerHTML = i +"x" +j;
                        document.getElementById("panel").style="font-size:130px;"
                        buttonindex = Math.round(Math.random()*3);
                        buttonid = "button" + buttonindex.toString();
                        result = (i*j).toString();
                        document.getElementById(buttonid).innerHTML=result;
                        for(var z = 0;z<50;z++)
                            {
                                randomresult = Math.round(Math.random()*100).toString();
                                buttonindex = Math.round(Math.random()*3).toString();
                                randombuttonid = "button" + buttonindex.toString();
                                if(randombuttonid !=buttonid && randomresult!=result)
                                {document.getElementById(randombuttonid).innerHTML=randomresult;}
                                document.getElementById(randombuttonid).style="background-color: bisque";
                            }
                        bool=false;
                    }
            }
            function ti()
            {
                document.getElementById("button").innerHTML ="RESET";
                y = setInterval(myfunc,1000)
            }
            
            function startreset()
            {
                option++;
                if(option==1)
                {ti();}
                else if(option==2)
                 {
                     x=0;
                     reset();
                 }
            }
            
            function respond(clicked)
            {
                if(enablerespond)
              {
                bool=true;
                if(clicked == buttonid)
                   {   
                       document.getElementById(clicked).style="background:green ; color:white";
                       
                       score++;
                       document.getElementById("score").innerHTML="SCORE :"+score;
                       document.getElementById("score").style="line-height:45px";
                   }
                  else
                      {
                          document.getElementById(clicked).style="background:red ; color:white";
                          document.getElementById(buttonid).style="background:green ;color:white";
                      }
              }
            }
            function reset()
            {
                clearInterval(y);
                y=0;
                enablerespond = false;
                option =0;
                x=30;
                result=0;
                score =0;
                bool=true;
                document.getElementById("time").innerHTML ="Time remeaning :";
                document.getElementById("score").innerHTML="SCORE :";
                document.getElementById("panel").style="position: static;";
                document.getElementById("panel").innerHTML ="";
                document.getElementById("gameover").style="display:none";
                document.getElementById("bottom").style="margin-top:85px;";
                document.getElementById("button").innerHTML ="START";
                document.getElementById("button0").innerHTML ="?";
                document.getElementById("button1").innerHTML ="?";
                document.getElementById("button2").innerHTML ="?";
                document.getElementById("button3").innerHTML ="?";
            }