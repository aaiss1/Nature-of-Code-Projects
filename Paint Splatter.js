//Most of the following code is credited to Pamela who made the page and Dan Shiffman

// Adapted from Dan Shiffman, natureofcode.com

var generator = new Random(1);

for(var i=0;i<350;i++)
{
    // The nextGaussian() function returns a normal distribution of random numbers with the following parameters: a mean of zero and a standard deviation of one
    var num = generator.nextGaussian();
    var num2 = generator.nextGaussian();
    var standardDeviation = 60;
    var mean = 200;
    
    // Multiply by the standard deviation and add the mean.
    var x = standardDeviation * num + mean;
    var y = standardDeviation * num2 + mean;
    
    noStroke();
    fill(0, 196, 49);
    ellipse(x, y, 20, 20);
}
