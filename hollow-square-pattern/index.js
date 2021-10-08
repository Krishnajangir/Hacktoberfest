function print_rectangle(n, m)
{
  var i, j;
  for (i = 1; i <= n; i++)
  {
    for (j = 1; j <= m; j++)
    {
      if (i == 1 || i == n || j == 1 || j == m)
           document.write("*");
      else
          document.write("  ");
    }
    document.write("<br>");
  }
}

var rows = 6,
  columns = 20;
print_rectangle(rows, columns);
