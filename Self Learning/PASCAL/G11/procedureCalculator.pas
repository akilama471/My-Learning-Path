program calculator(input,output);
Var total,cmd : integer;

Procedure numberSum(Var cmd : integer);
		Var num1,num2,stotal : integer;
    Begin
		     Writeln('===== Action : Sum =====');
		     Write('Enter First Number : ');
				 readln(num1);
		     Write('Enter Second Number : ');
				 readln(num2);
				 stotal := num1+num2;
				 WriteLn('Sum of ', num1 , ' + ', num2 ,' is : ', stotal);
	  End;

	Procedure numberSub(Var cmd : integer);
		Var num1,num2,stotal : integer;
    Begin
		     Writeln('===== Action : Substraction =====');
		     Write('Enter First Number : ');
				 readln(num1);
		     Write('Enter Second Number : ');
				 readln(num2);
				 stotal := num1-num2;
				 WriteLn('Substract of ', num1 , ' - ', num2 ,' is : ', stotal);
	  End;

	Procedure numberMulti(Var cmd : integer);
		Var num1,num2,stotal : integer;
    Begin
		     Writeln('===== Action : Multifier =====');
		     Write('Enter First Number : ');
				 readln(num1);
		     Write('Enter Second Number : ');
				 readln(num2);
				 stotal := num1*num2;
				 WriteLn('Multifier of ', num1 , ' * ', num2 ,' is : ', stotal);
	  End;

	Procedure numberDivide(Var cmd : integer);
		Var num1,num2,stotal : integer;
    Begin
		     Writeln('===== Action : Divide =====');
		     Write('Enter First Number : ');
				 readln(num1);
		     Write('Enter Second Number : ');
				 readln(num2);
				 if num2 = 0 then
				    Writeln('Error: Cannot divide by zero!')
				 else
				  begin
				    stotal := num1 div num2;
				    WriteLn('Division of ', num1 , ' / ', num2 ,' is : ', stotal);
				  end;
	  End;

Begin
	repeat
			WriteLn;
			Writeln('===== Choose Action ======');
			Writeln('1. Sum');
			Writeln('2. Substract');
			Writeln('3. Multifier');
			Writeln('4. Divider');
			Writeln('5. Exit');
    	Write('Enter your choice : ');
			Readln(cmd);
			Case cmd of
     		1 : numberSum(cmd);
     		2 : numberSub(cmd);
     		3 : numberMulti(cmd);
     		4 : numberDivide(cmd);
      	5: Writeln('Thank you...!');
			Else
				WriteLn('Invalid Action');
			End;
  until cmd = 5;
	readln(total);
End.
