import React from "react";
import styles from "./styles.scss";
import PropTypes from "prop-types";

class LinkUnderlined extends React.Component {
  static defaultProps= {
    label: PropTypes.string.isRequired,
    isEnabled: PropTypes.bool,
    targetPath: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.object,
    highlighted: PropTypes.bool = false,
  }

  mouseEnter = () => {
    this.underline.animate([{
      width:'0%',
    },{
      width:'100%',
    }], {
      duration:150,
      fill: 'forwards',
      easing: 'ease-in-out',
    })
  }

  mouseLeave = () => {
    this.underline.animate([{
      width:'100%',
    },{
      width:'0%',
    }], {
      duration:150,
      fill: 'forwards',
      easing: 'ease-in-out',
    })
  }
  
  render() {
    const { label, targetPath, onClick, style, highlighted } = this.props;
    return (
      <div  style={{...styles, ...style}}
        className={`link-underlined ${highlighted ? 'highlighted' : ''}`}
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
        onClick={onClick}
        >
        { typeof targetPath === 'string' && (
          <a className="label" href={targetPath}>{label}</a>
        )}
        { typeof targetPath !== 'string' && (
          <span className="label">{label}</span>
        )}
        <div className="underline" ref={el=>this.underline = el}></div>
      </div>
    );
  }
}

export default LinkUnderlined;