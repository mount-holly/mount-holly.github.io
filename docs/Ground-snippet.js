var ground = world.createBody();

  var groundFD = {
    density : 0.0,
    friction : 0.6
  };

  ground.createFixture(pl.Edge(Vec2(-20.0, 0.0), Vec2(20.0, 0.0)), groundFD);

  var hs = [ 0.25, 1.0, 4.0, 0.0, 0.0, -1.0, -2.0, -2.0, -1.25, 0.0 ];

  var x = 20.0, y1 = 0.0, dx = 5.0;

  for (var i = 0; i < 10; ++i) {
    var y2 = hs[i];
    ground.createFixture(pl.Edge(Vec2(x, y1), Vec2(x + dx, y2)), groundFD);
    y1 = y2;
    x += dx;
  }
