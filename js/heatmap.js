// Groups
// Heatmap


var g_width  = 0;
var g_height = 0;
var g_sigma  = 1;
var g_norm   = 1;

var g_2d_array=[];

function rbf(value)
{
	var result = Math.exp( -( (g_sigma*g_sigma)*(value*value)/( g_sigma * g_sigma) ) );
	return result;
}

exports.init = function(width, height, sigma, norm)
{
	g_width = width;
	g_height= height;
	g_sigma = sigma;
	g_norm  = norm;

	g_2d_array=new Array(height);
	for(i=0;i<g_height;i++)
	{
		g_2d_array[i] = new Array(width);
	}
	exports.reset();
}


exports.reset = function()
{
	for (i=0; i < g_height; i++)
	{
		for (j=0; j< g_width; j++)
		{
			g_2d_array[i][j]=0;
		}
	}
}

function update_heatmap(data)
{
	var x = data.x;
	var y = data.y;
	var v = data.v/g_norm;
	
	for (i=0; i < g_height; i++)
	{
		for (j=0; j< g_width; j++)
		{
			var diff = Math.sqrt( (i-x)*(i-x) + (j-y)*(j-y) )*v;
			var value = rbf(diff);
			var previous = g_2d_array[i][j];
			var new_value = Math.max(value, previous);
			g_2d_array[i][j]= new_value;
			console.log("Diff ", diff, " Value ", value, " Previous ", previous, " New " , new_value);
		}
	}
			
}

exports.heatmap = function(list)
{
	for (index in list)
	{
		var item = list[index];
		update_heatmap(item);
	}
}
