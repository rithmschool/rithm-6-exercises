import React, { Component } from "react";

// export default class Coin extends Component {
//   render() {
//     return (
//       <div>
//         <img
//           src={this.props.src}
//           alt="coin"
//           width="200px"
//         />
//       </div>
//     );
//   }
// }

const Coin = ({ src }) => {
  return (
    <div>
      <img
        src={src}
        alt="coin"
        width="200px"
      />
    </div>
  );
}

export default Coin;
