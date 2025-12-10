program calculator(input, output);

Var
  total, cmd : integer;

Function numberSum(cmd : integer) : integer;
	Var
	  num1, num2, stotal : integer;
	Begin
	  Writeln('===== Action : Sum =====');
	  Write('Enter First Number : ');
	  readln(num1);
	  Write('Enter Second Number : ');
	  readln(num2);
	  stotal := num1 + num2;
	  WriteLn('Sum of ', num1 , ' + ', num2 ,' is : ', stotal);
	  numberSum := stotal;
	End;

Function numberSub(cmd : integer) : integer;
	Var
	  num1, num2, stotal : integer;
	Begin
	  Writeln('===== Action : Substraction =====');
	  Write('Enter First Number : ');
	  readln(num1);
	  Write('Enter Second Number : ');
	  readln(num2);
	  stotal := num1 - num2;
	  WriteLn('Substract of ', num1 , ' - ', num2 ,' is : ', stotal);
	  numberSub := stotal;
	End;

Function numberMulti(cmd : integer) : integer;
	Var
	  num1, num2, stotal : integer;
	Begin
	  Writeln('===== Action : Multifier =====');
	  Write('Enter First Number : ');
	  readln(num1);
	  Write('Enter Second Number : ');
	  readln(num2);
	  stotal := num1 * num2;
	  WriteLn('Multifier of ', num1 , ' * ', num2 ,' is : ', stotal);
	  numberMulti := stotal;
	End;

Function numberDivide(cmd : integer) : integer;
	Var
	  num1, num2, stotal : integer;
	Begin
	  Writeln('===== Action : Divide =====');
	  Write('Enter First Number : ');
	  readln(num1);
	  Write('Enter Second Number : ');
	  readln(num2);
	  if num2 = 0 then
	  begin
	    Writeln('Error: Cannot divide by zero!');
	    stotal := 0;
	  end
	  else
	  begin
	    stotal := num1 div num2;
	    WriteLn('Division of ', num1 , ' / ', num2 ,' is : ', stotal);
	  end;
	  numberDivide := stotal;
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
      1 : total := numberSum(cmd);
      2 : total := numberSub(cmd);
      3 : total := numberMulti(cmd);
      4 : total := numberDivide(cmd);
      5 : Writeln('Thank you...!');
    Else
      WriteLn('Invalid Action');
    End;

  until cmd = 5;

  readln(total);
End.
