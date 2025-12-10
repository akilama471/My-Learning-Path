program procedure_circle(input,output);
Const pie = 22/7;
Var radius:real;
Procedure GetDate(Var radius:Real);
    Begin
		     WriteLn('enter radius');
				 read(radius);
	  End;
Procedure processarea(var radius:Real);
     Var area:Real;
		 Begin
		      area := pie*radius*radius;
					WriteLn('area =',area);
					readln(area);
		 End;
Procedure processcircumference(Var radius:Real);
     Var circum:real;
		 Begin
		      circum := 2*pie*radius;
					WriteLn('circumference =',circum);
					
		 End;
Begin
     GetDate(radius);
		 processcircumference(radius);
		 processarea(radius);
End.

