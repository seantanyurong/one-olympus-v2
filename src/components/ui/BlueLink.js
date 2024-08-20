import React from 'react';

const BlueLink = (props) => {
  const renderSwitch = (param) => {
    switch (param) {
      case 'small':
        return '';

      case 'medium':
        return 'text-xl';

      case 'large':
        return 'text-2xl';

      default:
        return '';
    }
  };

  return (
    <a
      href={props.link}
      className={`inline-block cursor-pointer font-semibold text-link-main hover:text-link-hover underline ${
        props.addClassName
      } ${renderSwitch(props.size)}`}>
      {props.primaryText}
    </a>
  );
};

export default BlueLink;
