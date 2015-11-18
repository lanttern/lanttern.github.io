
  /*
    draw function for the first chart
  */

function draw(data) {
      
      /*
        D3.js setup code
      */

          "use strict";
          var margin = 75,
              width = 1300 - margin,
              height = 460;

          var svg = d3.select("#mychart1")
            .append("svg")
              .attr("width", width + margin)
              .attr("height", height + margin)
            .append("g")
              .attr("class","chart");
              
      /*
        Dimple.js Chart construction code
      */

          // Create the indicator chart on the right of the main chart
          var indicator = new dimple.chart(svg, data);

          // Pick cyan as the default and yellow for the selected month
          var defaultColor = indicator.defaultColors[6];
          var indicatorColor = indicator.defaultColors[4];

          // The frame duration for the animation in milliseconds
          var frame = 2250;

          var firstTick = true;

          // Place the indicator bar chart to the right
          indicator.setBounds(850, 125, 153, 311);

          // Add industries along the y axis
          var y = indicator.addCategoryAxis("y", "Startup industry");

          // Use surive rate for bar size and hide the axis
          var x = indicator.addMeasureAxis("x", "Survive rate of startups in this industry by status");
          x.hidden = true;

          // Add the bars to the indicator and add event handlers
          var s = indicator.addSeries(null, dimple.plot.bar);
          s.addEventHandler("click", onClick);
          // Draw the side chart
          indicator.draw();

          // Remove the title from the y axis
          y.titleShape.remove();

          // Remove the lines from the y axis
          y.shapes.selectAll("line,path").remove();

          // Move the y axis text inside the plot area
          y.shapes.selectAll("text")
                  .style("text-anchor", "start")
                  .style("font-size", "12px")
                  .attr("transform", "translate(18, 0.5)");

          // add notes for bars
          svg.selectAll("title_text")
                  .data(["Click bar to select",
                      "and pause. Click again",
                      "to resume animation.",
                      "The bar length indicates",
                      "survive rate of industry"])
                  .enter()
                  .append("text")
                  .attr("x", 850)
                  .attr("y", function (d, i) { return 50 + i * 12; })
                  .style("font-family", "sans-serif")
                  .style("font-size", "12px")
                  .style("color", "Black")
                  .text(function (d) { return d; });

          // set the bar colors
          s.shapes
                  .attr("rx", 10)
                  .attr("ry", 10)
                  .style("fill", function (d) { return (d.y === ' Social Media ' ? indicatorColor.fill : defaultColor.fill) })
                  .style("stroke", function (d) { return (d.y === ' Social Media ' ? indicatorColor.stroke : defaultColor.stroke) })
                  .style("opacity", 0.5);

          // Draw the main chart
          var charts = new dimple.chart(svg, data);
          charts.setBounds(300, 100, 500, 380);
          var x = charts.addCategoryAxis("x", "Founded year of startups"); 
          var y = charts.addMeasureAxis("y", "Percentage of startups by industry");
          var z = charts.addMeasureAxis("z", "Funding of startups in this industry by status")
          x.dateParseFormat = "%Y";
          x.title = "Founded time period of startups";
          x.fontSize = "17px"; //set font size for x label
          y.dateParseFormat = "%";
          y.tickFormat = ".1%";
          y.overrideMax = 0.15;
          y.title = "Percentage of Startups by Industry";
          y.fontSize = "17px"; //set font size for y label
          charts.addSeries(["Status"], dimple.plot.line); // line chart
          charts.addSeries(["Status"], dimple.plot.scatter); // scatter chart
          var legend = charts.addLegend(width*0.3, 40, 600, 10, "left");
          legend.fontSize = "15px"; // set font size for legend
          // Add a storyboard to the main chart and set the tick event
          var story = charts.setStoryboard("Startup industry", onTick);
          // Change the frame duration
          story.frameDuration = frame;
          // Order the storyboard by date
          story.addOrderRule("Survive rate of startups in this industry by status", "Desc");

          // Draw the line chart
          charts.draw();

          // Remove the legends as they will refresh on tick
          charts.legends = [];
          // Remove the storyboard label
          story.storyLabel.remove();
          // On click of the side chart
          function onClick(e) {
              // Pause the animation
              story.pauseAnimation();
              // If it is already selected resume the animation
              // otherwise pause and move to the selected month
              if (e.yValue === story.getFrameValue()) {
                  story.startAnimation();
              } else {
                  story.goToFrame(e.yValue);
                  story.pauseAnimation();
              }
          }

          // On tick of the main charts storyboard
          function onTick(e) {
              if (!firstTick) {
                  // Color all shapes the same
                  s.shapes
                          .transition()
                          .duration(frame / 2)
                          .style("fill", function (d) { return (d.y === e ? indicatorColor.fill : defaultColor.fill) })
                          .style("stroke", function (d) { return (d.y === e ? indicatorColor.stroke : defaultColor.stroke) });
              }
              firstTick = false;
          }
      }

  /*
    Use D3 to load the CSV file
    and pass the contents of it to the draw function
  */

d3.csv("data/data.csv", draw);
 
