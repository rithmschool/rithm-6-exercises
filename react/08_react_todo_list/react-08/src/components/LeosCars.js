import React, { Component } from 'react';
import Todo from './Todo';

class LeosCars extends Component {
  constructor(props) {
    super(props);

    this.state = {
      leoscars: [
        {
          id: 0,
          modelYear: 2006,
          car: 'BMW Z4 M Roadster',
          yearAcquired: 2014,
          mods: 'Bilstein B8s, ZHP knob'
        },
        {
          id: 1,
          modelYear: 1996,
          car: 'BMW E36 328i Coupe',
          yearAcquired: 2007,
          mods:
            'E46 AP Suspenion Coilovers, E46 sway links, Whiteline front ARB, E30 M3 FCAB, E46 M3 RTAB, E46 Compact Sport knob, UUC DSSR, E46 330 front brakes, E46 328 rear brakes, BMW Style 24 wheels staggered'
        },
        {
          id: 2,
          modelYear: 2003,
          car: 'Renault Clio Sport 172',
          yearAcquired: 2016,
          mods: 'BMW front lug nuts, motorcycle catback'
        },
        {
          id: 3,
          modelYear: 1990,
          car: 'BMW E30 318iS',
          yearAcquired: 2009,
          mods: 'BMW M52 B25 alloy block transplant, Bilstein B6s'
        },
        {
          id: 4,
          modelYear: 1989,
          car: 'BMW E34 535i',
          yearAcquired: 2013,
          mods: 'Bilstein B6s front, BMW style 4s, 16x6.5 wheels'
        }
      ]
    };
  }

  render() {
    var todos = this.state.leoscars.map(cars => (
      <li>
        {cars.modelYear} {cars.car}
      </li>
    ));

    const carStyle = { color: 'royalblue' };

    return <div style={carStyle}> {todos} </div>;
  }
}

export default LeosCars;
