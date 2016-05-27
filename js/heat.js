
var heat_map = {
    canvas:null,
    context:null,
    width:1,
    height:1,
    cols:1,
    rows:1
};

var rgb_table1 = [ "#0500ff", "#0400ff", "#0300ff", "#0200ff", "#0100ff", "#0000ff", "#0002ff", "#0012ff", "#0022ff", "#0032ff", "#0044ff", "#0054ff", "#0064ff", "#0074ff", "#0084ff", "#0094ff", "#00a4ff", "#00b4ff", "#00c4ff", "#00d4ff", "#00e4ff", "#00fff4", "#00ffd0", "#00ffa8", "#00ff83", "#00ff5c", "#00ff36", "#00ff10", "#17ff00", "#3eff00", "#65ff00", "#8aff00", "#b0ff00", "#d7ff00", "#fdff00", "#fffa00", "#ffe600", "#ffdc00", "#ffd200", "#ffc800", "#ffbe00", "#ffb400", "#ffaa00", "#ffa000", "#ff9600", "#ff8c00", "#ff8200", "#ff7800", "#ff6e00", "#ff6400", "#ff5a00", "#ff5000", "#ff4600", "#ff3c00", "#ff3200", "#ff2800", "#ff1e00", "#ff1400", "#ff0a00", "#ff0000", "#ff0010", "#ff0020", "#ff0030", "#ff0040", "#ff0050", "#ff0060", "#ff0070", "#ff0080", "#ff0090", "#ff00A0", "#ff00B0", "#ff00C0", "#ff00D0", "#ff00E0", "#ff00F0", "#ff01F0", "#ff02F0", "#ff03F0", "#ff04F0", "#ff05F0", "#ff06F0", "#ff07F0", "#ff08F0", "#ff09F0", "#ff0AF0", "#ff0BF0", "#ff0CF0", "#ff0DF0", "#ff0EF0" ];

heat_map.init = function(canvas, width, height, cols, rows)
{
	console.log(canvas);
	this.width = width;
	this.height = height;
        this.cols = cols;
        this.rows = rows;
	this.canvas = canvas;
	this.canvas.width = width;
        this.canvas.height = height;
	this.context = this.canvas.getContext('2d');
        this.draw_grid(cols, rows);
}

heat_map.draw_grid = function(cols, rows)
{
	col_width  = this.width/cols;
	row_height = this.height/rows;
	console.log("Col ", col_width, "Row ", row_height);
	console.log("Col ", this.width, "Row ", this.height);
	console.log("Col ", cols, "Row ", rows);
	for ( i=0; i <= cols; i++)
	{
		var x1 = i*col_width;
		console.log(x1);
		this.context.beginPath();
               	this.context.moveTo(x1,0);
               	this.context.lineTo(x1, this.height);
		this.context.closePath();
               	this.context.strokeStyle = '#F00F0f0f';
               	this.context.stroke();
	}
	for ( i=0; i <= rows; i++)
	{
		var y1 = i*row_height;
		console.log(y1);
		this.context.beginPath();
               	this.context.moveTo(0, y1);
               	this.context.lineTo(this.width, y1);
		this.context.closePath();
               	this.context.strokeStyle = '#F00F0f0f';
               	this.context.stroke();
	}

}

heat_map.fill = function(data)
{
	col_width  = this.width/this.cols;
	row_height = this.height/this.rows;

	console.log(data.length , this.rows*this.cols);
	if (data.length == this.rows*this.cols)
	{
		for ( i=0; i <= this.cols; i++)
		{
			var x = i*col_width;
			for ( j=0; j <= this.rows; j++)
			{
				console.log(x, y, col_width, row_height);
				var y = j*row_height;
				var color = rgb_table1[data[j*this.cols + i]];
				this.context.fillStyle=color;
				this.context.fillRect(x, y, col_width, row_height);
			}
		}
	}
}

