"use strict";

var url = "https://pokeapi.co/api/v2/pokemon"; //let results = null;

function getPokemon(url) {
  var results, data;
  return regeneratorRuntime.async(function getPokemon$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch(url));

        case 2:
          results = _context.sent;

          if (!results.ok) {
            _context.next = 8;
            break;
          }

          _context.next = 6;
          return regeneratorRuntime.awrap(results.json());

        case 6:
          data = _context.sent;
          doStuff(data);

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
}

function doStuff(data) {
  data.results.forEach(function (pokemon) {
    var div = document.createElement("div");
    div.textContent = pokemon.name;
    document.querySelector("main").appendChild(div);
  });
}

getPokemon(url);