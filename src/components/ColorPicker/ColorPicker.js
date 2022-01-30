import React, { useState } from 'react';
import classNames from 'classnames';
import './ColorPicker.css';

export default function ColorPicker({ options }) {
  const [activeOptionIdx, setActiveOptionIdx] = useState(0);

  const makeOptionClassName = index => {
    return classNames('ColorPicker__option', {
      'ColorPicker__option--active': index === activeOptionIdx,
    });
  };

  const { label } = options[activeOptionIdx];

  return (
    <div className="ColorPicker">
      <h2 className="ColorPicker__title">Color Picker</h2>
      <p>Выбран цвет:{label}</p>
      <div>
        {options.map(({ label, color }, index) => {
          return (
            <button
              key={label}
              aria-label={label}
              className={makeOptionClassName(index)}
              style={{ backgroundColor: color }}
              onClick={() => setActiveOptionIdx(index)}
            ></button>
          );
        })}
      </div>
    </div>
  );
}

// class OldColorPicker extends Component {
//   state = {
//     activeOptionIdx: 0,
//   };

//   setActiveIdx = index => {
//     this.setState({ activeOptionIdx: index });
//   };

//   makeOptionClassName = index => {
//     return classNames('ColorPicker__option', {
//       'ColorPicker__option--active': index === this.state.activeOptionIdx,
//     });
//   };

//   render() {
//     const { activeOptionIdx } = this.state;

//     const { label } = this.props.options[activeOptionIdx];

//     return (
//       <div className="ColorPicker">
//         <h2 className="ColorPicker__title">Color Picker</h2>
//         <p>Выбран цвет:{label}</p>
//         <div>
//           {this.props.options.map(({ label, color }, index) => {
//             return (
//               <button
//                 key={label}
//                 className={this.makeOptionClassName(index)}
//                 style={{ backgroundColor: color }}
//                 onClick={() => this.setActiveIdx(index)}
//               ></button>
//             );
//           })}
//         </div>
//       </div>
//     );
//   }
// }

// export default OldColorPicker;
